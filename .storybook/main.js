module.exports = {
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  stories: ["../components/**/*.stories.js"],
};
