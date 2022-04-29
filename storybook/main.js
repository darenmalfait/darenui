module.exports = {
  stories: [
    '../stories/*.stories.{tsx,mdx}',
    '../packages/**/stories/*.stories.{tsx,mdx}',
  ],
  addons: [
    '@storybook/addon-docs',
    'storybook-dark-mode/register',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  typescript: {
    reactDocgen: false,
  },
}
