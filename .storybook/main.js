module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../stories/*.stories.{tsx,mdx}',
    '../packages/**/stories/*.stories.{tsx,mdx}',
  ],
  framework: "@storybook/react",
  addons: [
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    'storybook-dark-mode/register',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            plugins: [require('tailwindcss')(), require('autoprefixer')()],
          },
        },
        cssLoaderOptions: { importLoaders: 1 },
      },
    },
  ],
  typescript: {
    reactDocgen: false,
  },
}
