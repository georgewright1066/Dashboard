module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended",
        "plugin:react/recommended"
    ],

    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "react-hooks"

    ],
    "rules": {
        "no-console": 0,
        "react/jsx-uses-vars": [2],
        "import/extensions": 0,
        "react/display-name": 1,
        "no-debugger": "off",
        "react-hooks/rules-of-hooks": "error",

        "indent": [
            "error",
            2
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
            "always"
        ]
    }
};

