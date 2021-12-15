<div align="center">
<h1>DarenUI</h1>

<p>How to develop on the component library</p>
</div>

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Component library development](#component-library-development)
  - [Running Storybook](#running-storybook)
  - [Adding a new package](#adding-a-new-package)
  - [Adding a dependency to a specific package](#adding-a-dependency-to-a-specific-package)
    - [Add a local scoped package:](#add-a-local-scoped-package)
  - [Installing an npm package shared between multiple packages](#installing-an-npm-package-shared-between-multiple-packages)
  - [Publishing](#publishing)
- [Semantic Commit Messages](#semantic-commit-messages)
  - [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Component library development

Install node_modules with `yarn install`.

### Running Storybook

1. Run `yarn start` file in the project folder.
2. Visit `localhost:6006`

### Adding a new package

lerna create is a command to add a new package to be managed in Monorepo.

```bash
npx lerna create @daren/component-name
# component-name: name of your component kebab-case
# version: 1.0.0-alpha.0
# description:
# keywords:
# homepage:
# license:
# entry point:
```

> ⚠️ **Important!** <br />The package version should be: `"version": "1.0.0-alpha.0",`. That way it will be 1.0.0 on release. Otherwise it would be 1.1.0 on release and 1.0.0 will be skipped.

Then copy the missing stuff from `@daren/theme` `package.json` such as `scripts`, `repository`, `sideEffects`, `exports`, `main`, `module`, `types`, `typings`, `files` and the peer dependency to `react`.

Copy the `tsconfig.json`.

The folder structure should be like this:

```
/component-name/
├─ lib                      # all source files
│  ├─ index.ts              # export all components
│  └─ …
├─ stories/
│  └─ …                     # files ending with *.stories.tsx
├─ index.ts                 # export * from './lib'
├─ package.json
└─ tsconfig.json            # extends base config and include 'lib'
```

### Adding a dependency to a specific package

To install an npm package, we can use the yarn workspace command in the root directory or the yarn add package-name command in the package directory where you'd like to install the package.

```bash
cd packages/component-name
yarn add date-fns
# or
yarn workspace @daren/component-name add date-fns
```

#### Add a local scoped package:

```bash
# adds button package to the ui-components package
npx lerna add @darenui/button packages/ui-components
```

### Installing an npm package shared between multiple packages

Yarn Workspaces makes it possible to share dependencies installed in the root directory between all packages, useful for devDependencies like TypeScript, ESLint, and Jest. It leads to implicit dependencies because they are not listed in each package.json, but it reduces the cost to manage these npm packages in each package directory. To install shared npm packages, you have to add the -W flag to the yarn add command.

```bash
yarn add -W --dev typescript prettier eslint
```

### Publishing

Publishing happens whenever something gets pushed or merged with the `main` branch. Github actions and lerna will provide the versioning based on [Semantic Commit Messages](#semantic-commit-messages).


## Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

### Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html