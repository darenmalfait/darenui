module.exports = {
  root: true,
  extends: ['daren', 'daren/react', 'daren/jsx-a11y'],
  parserOptions: {
    project: './tsconfig.json',
    parser: '@babel/eslint-parser',
  },
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-relative-packages': 'off',
  },
}
