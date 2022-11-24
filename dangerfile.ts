import { Buffer } from 'buffer'
import * as fs from 'fs'
import * as path from 'path'

import { markdown, danger, warn, message, GitHubPRDSL } from 'danger'

const BIG_PR_TRESHOLD = 600

async function getLocalFileContents(filepath: string) {
  return fs.readFileSync(path.resolve(`./${filepath}`), {
    encoding: 'utf8',
  })
}

interface GithubDraftablePRDSL extends GitHubPRDSL {
  draft: boolean
}

async function getRemoteFileContents(filepath: string) {
  const octokit = danger.github.api
  const pr = danger.github.pr as GithubDraftablePRDSL
  const refType = pr.draft ? 'head' : 'merge'
  const { data }: any = await octokit.repos.getContent({
    owner: 'darenmalfait',
    repo: 'darenui',
    path: filepath,
    ref: `refs/pull/${danger.github.thisPR.number}/${refType}`,
  })
  return Buffer.from(data.content, 'base64').toString()
}

async function getFileContents(filepath: string) {
  if (!(danger as any).github) {
    return getLocalFileContents(filepath)
  } else {
    return getRemoteFileContents(filepath)
  }
}

interface Package {
  path: string
  packageJson: {
    name: string
    scripts: {
      dev: string
      build: string
      watch: string
    }
    license: string
    dependencies?: { [key: string]: string }
    devDependencies?: { [key: string]: string }
  }
}

function listTouchedWorkflows(allFiles: string[]) {
  const touchedWorkflows = allFiles.filter(
    filepath =>
      filepath.startsWith('.github/workflows/') ||
      filepath.endsWith('dangerfile.ts'),
  )
  if (touchedWorkflows.length === 0) return

  message(`### Modified CI Scripts
* ${touchedWorkflows.join('\n* ')}`)
}

function listGenericWarnings() {
  if (
    danger.github.pr.additions + danger.github.pr.deletions >
    BIG_PR_TRESHOLD
  ) {
    warn(`:exclamation: Big PR`)
    markdown(
      `> Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review.`,
    )
  }
}

function listTouchedPackages(modifiedPackages: Package[]) {
  if (!modifiedPackages.length) return
  markdown(`### Modified Packages
The following packages were modified by this pull request:
* ${modifiedPackages
    .map(({ packageJson }) => `\`${packageJson.name}\``)
    .join('\n* ')}`)
}

async function getModifiedPackages(allFiles: string[]) {
  const packageList: Package[] = []
  const paths = new Set(
    allFiles
      .filter(filepath => filepath.startsWith('packages/'))
      .map(filepath => {
        return filepath.split('/').slice(0, 2).join('/')
      }),
  )

  const pathArray = Array.from(paths)
  for (const path of pathArray) {
    try {
      await getFileContents(`${path}/package.json`)
        .then(JSON.parse)
        .then(packageJson => {
          packageList.push({
            path,
            packageJson,
          })
        })
    } catch (e: any) {
      warn(`Could not find package: ${path}: ${e.message}`)
    }
  }

  return packageList
}

;(async function () {
  const allFiles = [
    ...danger.git.created_files,
    ...danger.git.deleted_files,
    ...danger.git.modified_files,
  ]

  const modifiedPackages = await getModifiedPackages(allFiles)

  listTouchedPackages(modifiedPackages)
  listGenericWarnings()
  listTouchedWorkflows(allFiles)
})()
