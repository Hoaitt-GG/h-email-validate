module.exports = {
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "binaryLiterals": true,
      "blockBindings": true,
      "defaultParams": true,
      "forOf": true,
      "generators": true,
      "modules": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": true,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "octalLiterals": true,
      "regexUFlag": true,
      "regexYFlag": true,
      "templateStrings": true,
      "unicodeCodePointEscapes": true,
      "jsx": false
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },

  "globals": {

  },

  "plugins": [

  ],

  "extends": "eslint:all",

  "rules": {
    "arrow-body-style": 0,
    "dot-location": 0,
    "global-require": 0,
    "id-length": 0,
    "indent": [
      "error",
      2, {
        "SwitchCase": 1
      }
    ],
    "init-declarations": 0,
    "max-len": [
      "error", {
        "code": 1200,
        "ignoreTrailingComments": true,
        "ignoreComments": true,
        "ignoreUrls": true
      }
    ],
    "max-lines": 0,
    "max-params": ["error", 5],
    "max-statements": 0,
    "multiline-ternary": 0,
    "newline-after-var": 0,
    "newline-before-return": 0,
    "newline-per-chained-call": 0,
    "no-console": 0,
    "no-inline-comments": 0,
    "no-magic-numbers": 0,
    "no-mixed-operators": 0,
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "no-prototype-builtins": 0,
    "no-sync": 0,
    "no-ternary": 0,
    "no-underscore-dangle": 0,
    "no-var": 0,
    "object-curly-newline": 0,
    "object-curly-spacing": 2,
    "object-property-newline": 0,
    "one-var": 0,
    "padded-blocks": 0,
    "prefer-const": 0,
    "prefer-reflect": 0,
    "prefer-template": 0,
    "quotes": [
      "error",
      "single", {
        "allowTemplateLiterals": true
      }
    ],
    "quote-props": [
      "error", "as-needed"
    ],
    "require-jsdoc": 0,
    "sort-keys": 0,
    "space-before-function-paren": [
      "error", "never"
    ],
    "vars-on-top": 0
  }
};