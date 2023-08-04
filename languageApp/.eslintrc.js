module.exports = {
  'env': {
      'browser': true,
      'es2021': true
  },
  'extends': [
      'eslint:recommended',
      'prettier',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  'overrides': [
      {
          'env': {
              'node': true
          },
          'files': [
              '.eslintrc.{js,cjs}'
          ],
          'parserOptions': {
              'sourceType': 'script'
          }
      }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module',
      'project': './tsconfig.json',
      'tsconfigRootDir': __dirname,
  },
  'plugins': [
      '@typescript-eslint',
      'react',
      'react-hooks'
  ],
  'rules': {
      'indent': [
          'error',
          2
      ],
      'quotes': [
          'error',
          'single'
      ],
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off'
  },
  'settings': {
      'react': {
        'version': 'detect',
      },
  },
  
};
