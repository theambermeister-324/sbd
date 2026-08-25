import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default [
  {
    ignores: ["dist/", ".astro/", ".vercel/", "node_modules/"],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  ...astro.configs.recommended,
  ...astro.configs["flat/jsx-a11y-recommended"],
  {
    files: ["**/*.astro"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  {
    files: ["**/*.{tsx,jsx}"],
    plugins: {
      react,
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "warn",
    },
  },

  {
    files: ["*.config.{mjs,js,ts}", "*.config.*.{mjs,js,ts}"],
    languageOptions: {
      globals: globals.node,
    },
  },
];
