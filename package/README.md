# eslint-config-lintmyride

## Overview

This config is aimed at [React](https://reactjs.org/) projects that use [TypeScript](https://typescript-eslint.io/). It extends [airbnb](https://www.npmjs.com/package/eslint-prettier-config-airbnb)  ESLint config, has [Prettier](https://prettier.io/) and React integration. The package gives you a ready-to-use **eslint/prettier** config that you can easily integrate into your project without having to set everything up from scratch.

## Installation

To install the package, run:

```shell
npm install -D eslint-config-lintmyride
```

or

```shell
yarn add -D eslint-config-lintmyride
```

After you've installed the **main** package, you need to install its **peer dependencies**. These are needed for the linting and formatting to work properly. Here are the additional packages you need to install in your **React** **TypeScript** project.

```shell
@typescript-eslint/parser @typescript-eslint/eslint-plugin eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-prettier prettier
```

## Usage

Create config files for ESLint ( **.eslintrc.js** ) and Prettier ( **.prettierrc.js** ) and add this config there as seen in the examples below

```js
// .eslintrc.js

const eslintConfig = require('@liene-putnina/eslint-config-lintmyride');

module.exports = {
  ...eslintConfig,
  parserOptions: {
    ...eslintConfig.parserOptions,
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  /*The rules in parserOptions are needed to ensure that ESLint won't lint the files it's
  not supposed to and will follow the rules layed out in the local TypeScript config */
};
```

```js
// .prettierrc.js

module.exports = {
    ...require('@liene-putnina/eslint-config-lintmyride/src/prettier.js'),
};
```

If there are parts of your project you do NOT want to lint or format, add them to **.eslintignore** and **.prettierignore** files respectively.

See the [**example**](https://github.com/lienputnina/eslint-config-lintmyride/tree/main/example) project for a more comprehensive view of the setup and usage.

## License

Licensed under **MIT** License.
