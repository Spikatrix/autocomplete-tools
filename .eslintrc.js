module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    "eslint-plugin-fig-linter/",
    "commander/fixtures/*/output.ts",
    "commander/fixtures/*/output.ts",
  ],
  extends: [
    "airbnb/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-console": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
  },
};
