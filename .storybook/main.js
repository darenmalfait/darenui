module.exports = {
  core: {
    builder: 'webpack5',
  },
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
