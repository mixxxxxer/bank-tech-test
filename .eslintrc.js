module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      files: ['test/*'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ["jest"],
  rules: {
  },
};
