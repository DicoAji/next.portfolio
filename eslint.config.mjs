import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // pastikan ini sudah terinstal
import tsParser from "@typescript-eslint/parser"; // pastikan ini juga sudah terinstal

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: require("eslint-plugin-react"),
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    rules: {
      "no-dupe-keys": "error",
      "no-multiple-default-exports": "error",
      // aturan lainnya sesuai kebutuhan Anda
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
