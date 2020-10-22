<<<<<<< HEAD
# Dashboard
=======
# lumen dashboard

A starter/boilerplate repo for adding Sass/SCSS support to [Create React App](https://github.com/facebookincubator/create-react-app) without ejecting. This was built to accompany [this medium article](https://hackernoon.com/using-sass-with-create-react-app-without-ejecting-b5f4f827ed9e).

### Purpose

This is a quick repo you can fork which has already been configured to work with the Sass CLI. Review the instructions for [installing the CLI here](https://sass-lang.com/install).

### How it works:

To run the dev server run `npm run start`. This will run on localhost:3000 and essential it runs on this port to avoid CORS error with the backend.
To run the test suite run `npm run test` the majority of the tests are run using jest and enzyme. Howver with new components I have moved to using react hooks.  
At the time of writing enzyme did not support hooks so I moved to React-Testing-library.

From the command line run `yarn sass:watch` to have Sass watch the scss directory and compile out to the css directory. To do a one-time transpile, run the `yarn sass:build` script. The `build` script has also been updated to build your css first.

To change the environemnt variable from dev to production go to the .env file found in the root and change `REACT_APP_ENVIRONMENT=prod` is production `REACT_APP_ENVIRONMENT=dev` is dev

#### Structure

The files are mostly organised by Route - eg Overview is the /Overview page.

### Don't want to install Ruby and Sass globally?

Check out the `node-sass` branch. This includes the `node-sass` library in dev dependencies. The same `yarn sass:watch` and `yarn sass:build` scripts are still available.

#### Caveats to node-sass

The Sass cli will scan the source directory and transpile css automatically as soon as it's started in watch mode. `node-sass` does not, so if you forget to run the watch mode before adding a new SCSS file, run `yarn sass:build` to manually transpile your stylesheets and then run `yarn sass:watch`.

THINGS TO REFACTOR

LINE GRAPHS
>>>>>>> c34c52d... dashboard files
