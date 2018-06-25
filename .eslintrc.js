module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "impliedStrict": true,
            "jsx": true,
            "experimentalObjectRestSpread": true
        },
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tabs"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": ["error"],
        "no-const-assign": "warn",
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "constructor-super": "warn",
        "valid-typeof": "warn",
        "strict": 0,
        "experimentalDecorators": 0,
        "no-console": 0,
        "no-undefine": 0
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "^16.2.0"
        }
    },
    "globals": {
        "renderer": true,
        "styled": true,
        "shallow": true,
        "toJson": true,
        "React": true
    }
};