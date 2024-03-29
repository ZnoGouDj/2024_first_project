module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'amd': true,
        'node': true
    },
    'plugins': [
        '@typescript-eslint',
        'i18next',
        'react-hooks',
    ],
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended',
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'rules': {
        'quotes': ['error', 'single'],
        // we want to force semicolons
        'semi': ['error', 'always'],
        // we use 2 spaces to indent our code
        'indent': ['error', 4],
        // we want to avoid extraneous spaces
        'no-multi-spaces': ['error'],
        'i18next/no-literal-string': ['error', {
            markupOnly: true, 
            ignoreAttribute: ['data-testid', 'to'],
        }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
    'overrides': [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            }
        }
    ],
    'globals': {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    }
};