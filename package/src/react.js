module.exports = {
  'react/jsx-filename-extension': [
    'warn',
    {
      extensions: ['.jsx', 'tsx'],
    },
  ],
  'react/jsx-props-no-spreading': 'off',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/function-component-definition': [
    'warn',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
};
