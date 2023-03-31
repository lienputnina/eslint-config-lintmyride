module.exports = {
  'no-console': 1,
  'linebreak-style': 0,
  'import/no-duplicates': 2,
  'import/extensions': 0,
  eqeqeq: 2,
  '@typescript-eslint/no-var-requires': 0,
  '@typescript-eslint/no-non-null-assertion': 2,
  'prefer-destructuring': 0,
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        'test.{ts,tsx}',
        'test-*.{ts,tsx}',
        '**/*{.,_}{test,spec}.{ts,tsx}',
        '**/jest.config.ts',
        '**/jest.setup.ts',
      ],
      optionalDependencies: false,
    },
  ],
};
