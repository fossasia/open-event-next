const config = {
  root: true,
  plugins: [],
  overrides: [],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    // Uncomment the following lines to enable eslint-config-prettier
    // Is not enabled right now to avoid issues with the Next.js repo
    // "prettier",
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
  },
}

config.overrides.push({
  files: ['**/*.ts', '**/*.tsx'],
  parser: '@typescript-eslint/parser',
  plugins: [...config.plugins, '@typescript-eslint'],
  extends: [...config.extends, 'plugin:@typescript-eslint/recommended'],
  rules: {
    ...config.rules,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
  },
})

module.exports = config
