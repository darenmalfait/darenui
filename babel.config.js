const BABEL_ENV = process.env.BABEL_ENV
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs'
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm'

module.exports = function babel(api) {
  api.cache(true)

  const presets = [
    [
      '@babel/env',
      {
        loose: true,
        modules: isCommonJS ? 'commonjs' : false,
        targets: {
          esmodules: isESM ? true : undefined,
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ]

  const plugins = [['@babel/plugin-proposal-class-properties', {loose: true}]]

  return {
    presets,
    plugins,
  }
}
