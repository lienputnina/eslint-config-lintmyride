const base = require('./src/base.js');
const _import = require('./src/import.js');
const react = require('./src/react.js');

module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...base,
    ...react,
    ..._import,
  },
  overrides: [
    {
      files: ['*.+(spec|test|stories).*'],
      rules: {
        'react/jsx-props-no-spreading': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
      },
    },
  ],
};
