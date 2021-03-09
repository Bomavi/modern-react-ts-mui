module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    // eslint
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'lines-around-comment': ['error', { beforeBlockComment: true }],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-nested-ternary': 'error',
    'no-trailing-spaces': 'error',
    'prefer-object-spread': 'error',
    'no-duplicate-imports': 'warn',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'space-before-blocks': 'error',
    'spaced-comment': ['error', 'always'],
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
      },
    ],
    // tslint
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/explicit-function-return-type': [
      0,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        interfaces: ['signature', 'field', 'constructor', 'method'],
        typeLiterals: ['signature', 'field', 'constructor', 'method'],
      },
    ],
    // prettier
    'prettier/prettier': ['error', { singleQuote: true }],
    // react
    'react/jsx-sort-props': [
      1,
      {
        shorthandFirst: true,
        callbacksLast: true,
        ignoreCase: false,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'rendering'],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
