module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        "plugin:prettier/recommended",
        "prettier",
        "prettier/react",
        "prettier/standard"
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
        "constructor-super": 2,
        "for-direction": 2,
        "no-class-assign": 2,
        "no-const-assign": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-dupe-args": 2,
        "no-dupe-class-members": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-semi": 2,
        "no-fallthrough": 2,
        "no-func-assign": 2,
        "no-global-assign": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-new-symbol": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-redeclare": 2,
        "no-self-assign": 2,
        "no-this-before-super": 2,
        "no-undef": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "no-unsafe-negation": 2,
        "no-unused-labels": 2,
        "no-unused-vars": 2,
        "no-useless-escape": 2,
        "prettier/prettier": [
            "error",
            {
                "arrowParens": "always",
                "bracketSpacing": true,
                "jsxBracketSameLine": true,
                "semi": true,
                "singleQuote": false,
                "tabWidth": 4
            }
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/react-in-jsx-scope": "error",
        "use-isnan": 2,
        "valid-typeof": 2,
        "arrow-parens": 2,
        "arrow-spacing": 2,
        "comma-style": 2,
        "default-case": 2,
        "func-call-spacing": 2,
        "block-spacing": 2,
        "brace-style": 2,
        "array-callback-return": 2,
        "comma-dangle": 2,
        "comma-spacing": 2,
        "computed-property-spacing": 2,
        "eol-last": 2,
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": 2,
        eqeqeq: 2,
        "func-name-matching": 2,
        "func-style": 2,
        indent: ["error", 4],
        "key-spacing": 2,
        "keyword-spacing": 2,
        "linebreak-style": 2,
        "max-len": 2,
        "new-parens": 2,
        "no-confusing-arrow": 2,
        "no-duplicate-imports": 2,
        "no-extra-parens": [
            "error",
            "functions"
        ],
        "no-misleading-character-class": 2,
        "no-mixed-requires": 2,
        "no-multi-spaces": 2,
        "no-multiple-empty-lines": 2,
        "no-new-require": 2,
        "no-path-concat": 2,
        "no-proto": 2,
        "no-restricted-modules": 2,
        "no-return-await": 2,
        "no-self-compare": 2,
        "no-tabs": 2,
        "no-template-curly-in-string": 2,
        "no-throw-literal": 2,
        "no-trailing-spaces": 2,
        "no-undef-init": 2,
        "no-use-before-define": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-return": 2,
        "no-void": 2,
        "no-whitespace-before-property": 2,
        "no-with": 2,
        "object-curly-spacing": [
            "error",
            "always",
            {
                "arraysInObjects": false,
                "objectsInObjects": true
            }
        ],
        "one-var": 2,
        "one-var-declaration-per-line": 2,
        "operator-linebreak": 2,
        "prefer-const": 2,
        "quotes": 2,
        "rest-spread-spacing": 2,
        "semi": 2,
        "semi-spacing": 2,
        "space-before-blocks": 2,
        "space-in-parens": 2,
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "spaced-comment": 2,
        "strict": 2,
        "symbol-description": 2,
        "template-curly-spacing": 2,
        "unicode-bom": 2
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
