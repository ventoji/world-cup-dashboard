
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "@storybook/addon-controls/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-a11y",
    "addon-redux/register"
  ]
}