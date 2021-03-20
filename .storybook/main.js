const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-controls/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-a11y"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(scss|css)$/,
      use: [
          'style-loader', 
          'css-loader', 
          'sass-loader'],
      include: path.resolve(__dirname, '../src'),
    });
  
    return config;
  }
}