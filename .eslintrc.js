module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:node/recommended",
    "plugin:prettier:recommended",
  ], // all the rules that we want the code to follow
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ["react"],
  rules: {
    "no-console": "off", // stopping the rule for console log
    quotes: "off", // stopping rule for the quotes around the string
  },
};
