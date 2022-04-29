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
  - [Installing an npm package shared between multiple packages](#installing-an-npm-package-shared-between-multiple-packages)
  - [Updating packages](#updating-packages)
  - [Publishing](#publishing)
- [Semantic Commit Messages](#semantic-commit-messages)
  - [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Component library development

Install node_modules with `yarn install`.

### Running Storybook

1. Run `yarn run dev` file in the project folder.
2. Visit `[localhost:6006](http://localhost:6006/)`

### Adding a new package
```bash
yarn create:pkg
# component-name: name of your component kebab-case
# description: package description
```

### Adding a dependency to a specific package

To install an npm package, we can use the yarn workspace command in the root directory or the yarn add package-name command in the package directory where you'd like to install the package.

```bash
cd packages/component-name
yarn add date-fns
# or
yarn workspace @daren/component-name add date-fns
```

### Installing an npm package shared between multiple packages

yarn Workspaces makes it possible to share dependencies installed in the root directory between all packages, useful for devDependencies like TypeScript, ESLint, and Jest. It leads to implicit dependencies because they are not listed in each package.json, but it reduces the cost to manage these npm packages in each package directory. To install shared npm packages, you have to add the -W flag to the yarn add command.

```bash
yarn add -W --dev typescript prettier eslint
```

### Updating packages

There is a Command line interface for simplifying the process of bulk updating dependencies across multiple Lerna or yarn Workspace packages.

Simply run the lernaupdate command in the root of a Lerna-based project:

```bash
npx lerna-update-wizard
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