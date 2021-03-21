[![Build Status](https://travis-ci.com/ventoji/world-cup-dashboard.svg?branch=master)](https://travis-ci.com/ventoji/world-cup-dashboard)

## Coding exercise

This is a simple implementation of the Football World Cup Score.

## Docs
Every component in the WC dashboard application is detailed in the storybook documentation.
The root component is `<FootballCupScoreBoard />` and folder `store` hanlde state of the appliaction using `redux` library. Every component is placed in their own folder with all the files related to (test, stories, and index).

## How to use it
Just start adding a new game introduce names of the players, once is added you can edit your score or finish the game. All finished games are display in the left side of the dashboard and sorted by the required criteria (total score or the most recently added).

[Storybook documentation](https://ventoji.github.io/world-cup-dashboard)

## Development server

### Detailed scripts

* `npm run start` – start development with node at port 3000.
* `npm run build:dev` – build static site for production with webpack + options
* `npm run dev-server` – starts development server with webpack-dev-server at port 9000
* `npm run storybook` – start development for storybook for all components
* `npm run lint` – check code formatting and rules for react code and JS.
* `npm run lint:fix` – fix all problems found on the code 
* `npm run prettier` – check code formatting rules defined on .prettierrc file
* `npm run predeploy` – generates the static files for storybook before publishing in gh-pages
* `npm run test` – Run unitary test designed for components.
* `npm run test:coverage` – Review the test coverage for the whole app.

### Commit changes
Add your files and commit your changes following convention of commit. Before pushing any changes make sure you update all the packages running `npm run ncu`. To include new changes in the master branch all tests and linters have to pass. All tests and checking linters are execute automatically running the configured jobs (see .github folder) every time you push some code. Additionally to that travis.ci performs the sames tasks.  

### Release version
After changes `run npm release` to automatically increase the control of version according to the changes applied (major, minor or patch). You can use `npm version OPTION` as well to generate the new version.

## Screenshot

![Screenshot](images/dashboard.png)

## ToDo

- Review all egde cases.
- Test for connected components.
- Review validations.
- Fix some bugs in the dev enevironment for stories.
