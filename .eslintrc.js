module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 13,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "multiline-ternary": 0,
        semi: [2, "always"],
        indent: [0, 2],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true
            }
        ]
    }
};
