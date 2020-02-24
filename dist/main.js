module.exports = {
  "extends": [
    "airbnb",
    "plugin:array-func/all",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:jest/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "array-func",
    "fp",
    "jest",
    "react-hooks",
    "sonarjs",
    "unicorn",
    "@getify/proper-arrows",
  ],
  "env": {
    "browser": true,
    "jest/globals": true
  },
  "globals": {
    "console": false,
    "document": false,
    "window": false,
    "navigator": false,
    "fetch": false,
    "Headers": false,
    "URL": false
  },
  "rules": {
    "arrow-parens": [2, "as-needed"],
    "brace-style": [2, "stroustrup"],
    "comma-dangle": [2, {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "function-paren-newline": [2, "multiline"],
    "jsx-quotes": [2, "prefer-single"],
    "id-length": [2, {
      "exceptions": [
        "_",
        "x",
        "y"
      ]
    }],
    "implicit-arrow-linebreak": 0,
    "max-len": 0,
    "no-console": 1,
    "no-multiple-empty-lines": [2, {
      "max": 2,
      "maxBOF": 0,
      "maxEOF": 1
    }],
    "no-var": 2,
    "no-unused-expressions": 0,
    "object-curly-newline": [2, {
      "multiline": true,
      "consistent": true
    }],
    "object-curly-spacing": [2, "never"],
    "operator-linebreak": [2, "before", {
      "overrides": {
        "=": "after"
      }
    }],
    "semi": [2, "never"],
    "space-in-parens": [2, "never"],
    "strict": [2, "never"],
    "fp/no-arguments": 2,
    "fp/no-class": 2,
    "fp/no-delete": 2,
    "fp/no-get-set": 2,
    "fp/no-let": 2,
    "fp/no-loops": 2,
    "fp/no-mutating-assign": 2,
    "fp/no-mutating-methods": 1,
    "fp/no-mutation": 2,
    "fp/no-proxy": 2,
    "fp/no-this": 2,
    "fp/no-valueof-field": 2,
    "import/no-unresolved": 2,
    "import/named": 2,
    "import/default": 2,
    "import/namespace": 2,
    "import/no-absolute-path": 2,
    "import/no-dynamic-require": 2,
    "import/no-webpack-loader-syntax": 2,
    "import/no-self-import": 2,
    "import/no-cycle": 2,
    "import/no-useless-path-segments": 2,
    "import/no-unused-modules": 2,
    "import/export": 2,
    "import/no-unused-modules": [2, {
      "unusedExports": true,
      "missingExports": true
    }],
    "import/no-nodejs-modules": 2,
    "import/first": 2,
    "import/exports-last": 2,
    "import/no-duplicates": 2,
    "import/no-namespace": 2,
    "import/order": [2, {
      "newlines-between": "always",
      "groups": [
        "builtin",
        "external",
        ["sibling", "parent", "index"]
      ]
    }],
    "import/newline-after-import": 2,
    "import/prefer-default-export": 2,
    "unicorn/import-index": 0,
    "import/no-unassigned-import": [2, {
      "allow": ["**/*.css"]
    }],
    "import/group-exports": 2,
    "optimize-regex/optimize-regex": 2,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "sonarjs/cognitive-complexity": [2, 15],
    "unicorn/filename-case": [2, {
      "case": "camelCase"
    }],
    "unicorn/prefer-exponentiation-operator": 2,
    "@getify/proper-arrows/params": [2, {
      "unused": "all",
      "count": 1,
      "length": 2,
      "allowed": ["_"]
    }],
    "@getify/proper-arrows/name": [2, {
      "trivial": false
    }]
  }
}
