import globals from 'globals';
import n from 'eslint-plugin-n';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  prettier,
  n.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
];
