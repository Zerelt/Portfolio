'use strict'

// https://eslint.org/docs/rules/
// https://github.com/standard/eslint-plugin-standard
// https://github.com/yannickcr/eslint-plugin-react

/*
  "off" or 0 - turn the rule off
  "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
  "error" or 2 - turn the rule on as an error (exit code will be 1)
*/

module.exports = {
  extends: ['standard', 'standard-jsx', 'prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'standard/object-curly-even-spacing': ['warn', 'always'],
    'standard/array-bracket-even-spacing': ['warn','never'],
    
    'no-unreachable': 'warn',
    'no-throw-literal': 'warn',
    
    'jsx-quotes': 0,
    'no-redeclare': 'error',
    'no-mixed-operators': 0,
    'no-constant-condition': 'warn',
    'generator-star-spacing': 0,
    'no-labels': 0,
    'node/no-deprecated-api': 'warn',
    'no-dupe-keys': 'warn',
    'no-debugger': 'warn',
    'spaced-comment': 'warn',
    'react/jsx-closing-bracket-location':
    [
      1,
      {
        'nonEmpty':'after-props',
        'selfClosing':'tag-aligned'
      }
    ],
    'react/jsx-curly-spacing': ['error', { when: 'never' }],
    "react/jsx-handler-names":[0],
    'react/jsx-indent': [2,2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-tag-spacing': 'warn',
    'react/prop-types': 'warn',
    'react/self-closing-comp': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
}