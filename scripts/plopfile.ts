import camelCase from 'lodash/camelCase'
import capitalize from 'lodash/capitalize'
import nodePlop, {ActionType, NodePlopAPI} from 'node-plop'
import shell from 'shelljs'

const workspaces = ['packages'] as const

type Workspace = (typeof workspaces)[number]

interface Answers {
  componentName: string
  description: string
  outDir: Workspace
}

async function createPackage(plop: NodePlopAPI) {
  plop.setHelper('capitalize', text => {
    return capitalize(camelCase(text))
  })

  plop.setGenerator('component', {
    description: 'Generates a component package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this component:',
      },
      {
        type: 'list',
        name: 'outDir',
        message: 'where should this component or package live?',
        default: 'packages',
        choices: workspaces,
      },
    ],
    actions(answers: any) {
      const actions: ActionType[] = []

      if (!answers) return actions

      const {componentName, description, outDir} = answers as Answers

      actions.push({
        type: 'addMany',
        templateFiles: 'component/**',
        destination: `../${outDir}/{{dashCase componentName}}`,
        base: 'component/',
        data: {description, componentName},
        abortOnFail: true,
      })

      return actions
    },
  })

  const {runPrompts, runActions} = plop.getGenerator('component')

  const answers = await runPrompts()
  await runActions(answers)
}

async function run() {
  const plop = await nodePlop('plop-templates/plopfile.hbs')

  await createPackage(plop)
  shell.exec('yarn')
}

run
