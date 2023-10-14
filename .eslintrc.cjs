module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "tsx": true,
    }, "ecmaVersion": "latest", "sourceType": "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "react-refresh", "prettier", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "camelcase": "error",
    "no-duplicate-imports": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/react-in-jsx-scope": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-alert": process.env.NODE_ENV === "production" ? "error" : "off",
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": 0,
    "react/display-name": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-empty-function": "off",
    "react/no-unknown-property": "off",
    "react/no-unescaped-entities ": "off",
  },
  "settings": {
    "react": {
      "version": "detect",
    },
    "import/resolver": {
      "typescript": {},
    },
  },
}
