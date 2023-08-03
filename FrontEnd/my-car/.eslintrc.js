module.exports = {
  // extends: ['airbnb'],
  extends: ['react-app', 'prettier', 'plugin:prettier/recommended'],
  // plugins: ['prettier'],
  env: {
    browser: true,
    jest: true,
  },
  ignorePatterns: ['node_modules/'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    indent: 'off',
    camelcase: 'off',
    semi: 'off',
    quotes: 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-magic-numbers': 'off',
    'no-redeclare': 'off',
    'no-array-constructor': 'off',
    'no-dupe-class-members': 'off',
    'no-extra-semi': 'off',
    'no-empty-function': 'off',
    'linebreak-style': 'off',
    'prettier/prettier': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-array-index-key': 'off',
    'react/function-component-definition': 2,
  },

  // rules: {
  //   'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
  //   'react/react-in-jsx-scope': 'on',
  //   'react/prop-types': 'on',
  //   'operator-linebreak': ['error', 'after'],
  //   'no-confusing-arrow': ['error', { allowParens: true }],
  //   'implicit-arrow-linebreak': 'on',
  //   'prettier/prettier': 'error',
  //   eqeqeq: 'off',
  //   curly: 'error',
  // },
  // parser: '@babel/eslint-parser',
  // parser: '@babel/eslint-parser',
  // parserOptions: {
  //   requireConfigFile: false,
  //   babelOptions: {
  //     presets: ['@babel/preset-react'],
  //   },
  // },
};
