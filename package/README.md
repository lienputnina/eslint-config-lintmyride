# eslint-prettier-config-lienep

## ESLint and Prettier config for React

> A config for [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/), aimed primarily to be used in React projects.

## Overview

This configuration extends [airbnb](https://www.npmjs.com/package/eslint-prettier-config-airbnb) ESLint config, with [airbnb/hooks](https://github.com/airbnb/javascript/tree/master/packages/eslint-prettier-config-airbnb#eslint-prettier-config-airbnbhooks) enabled, and Prettier integration via the ESLint [plugin](https://github.com/prettier/eslint-plugin-prettier).

The goal of this configuration is to get code linting and formatting up and running as quickly as possible in a modern development environment, without sacrificing cleanliness and readability, and having to configure ESLint + Prettier from scratch every time.

## Installation

To install the package, run:

```shell
npm install -D eslint-prettier-config-lienep
yarn add -D eslint-prettier-config-lienep
```

This will install the shared config, as well as its peer dependencies:

- eslint
- eslint-prettier-config-airbnb
- eslint-prettier-config-prettier
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- prettier

**NOTE:** if you are on NPM <7, you will need to install these manually:

```shell
npx install-peerdeps -D eslint-prettier-config-lienep
```

## How to use

- Create an .eslintrc.js file in your project directory and add the package to the "extends" array
- Run

```shell
npm run lint or yarn lint
```

## License

Licensed under MIT License.
