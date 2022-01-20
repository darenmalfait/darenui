module.exports = {
  stories: ["../packages/**/stories/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
};
