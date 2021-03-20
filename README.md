
## Coding exercise

This is a simple implementation of the Football World Cup Score.

## Docs
Every component in the WC dashboard application is detailed in the storybook documentation.

[Component documentation](https://ventoji.github.io/world-cup-dashboard)

## Development server

### Detailed scripts

* `npm run build:lib` – generate a resusable version of FootballCupScoreBoard component to be published in a npm registry.
* `npm run build:dev` – build static site for production with webpack + options
* `npm run dev-server` – starts development server with webpack-dev-server
* `npm run storybook` – start development for storybook for all components
* `npm run prepublish` – build the code formatted in commonjs for  FootballCupScoreBoard component
* `npm run lint` – check code formatting and rules for react code and JS.
* `npm run lint:fix` – fix all problems found on the code 
* `npm run prettier` – check code formatting rules defined on .prettierrc file
* `npm run predeploy` – generates the static files for storybook before publishing in gh-pages
* `npm run test` – Run unitary test designed for components.

### Commit changes
Add your files and commit your changes following convention of commit. Before pushing any changes make sure you update all the packages running `npm run nuc`.

### Release version
After changes `run npm release` to automatically increase the control of version according to the changes applied (major, minor or patch). You can use `npm version OPTION` as well to generate the new version.