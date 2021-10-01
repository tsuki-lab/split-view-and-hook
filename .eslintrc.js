module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  rules: {
    'import/no-anonymous-default-export': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/ban-types': 'warn',
    'quotes': ['error', 'single'],
    'space-in-parens': ['error', 'never'],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', {'max': 1}],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'semi-style': ['error', 'first'],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    'no-undef': 'off',
    'no-useless-catch': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'comma',
        'requireLast': false
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': false
      }
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      { accessibility: 'explicit' }
    ],
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error'
  }
}