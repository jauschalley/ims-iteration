module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "globals": {
        "$": true,
        "require": true,
        "process": true,
        "expect": true,
        "it": true,
        "describe": true,
        "module": true
      },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};