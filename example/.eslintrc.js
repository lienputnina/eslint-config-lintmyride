const eslintConfig = require('@liene-putnina/eslint-config-prettier-lienep');

module.exports = {
  ...eslintConfig,
  parserOptions: {
    ...eslintConfig.parserOptions,
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
};
