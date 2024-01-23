module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  overrides: [
    {
      files: ['**/*.test.js'], // Adicione ou ajuste esta parte conforme necessário
      env: {
        mocha: true,
      },
      rules: {
        // Adicione regras específicas para arquivos de teste, se necessário
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
  