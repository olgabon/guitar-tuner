module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "sourceType": 'module'
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@angular-eslint/component-selector": [
            "error",
            {
                "type": "element",
                "prefix": "app",
                "style": "kebab-case"
            }
        ],
        "@angular-eslint/directive-selector": [
            "error",
            {
                "type": "attribute",
                "prefix": "app",
                "style": "camelCase"
            }
        ],
    }
};
