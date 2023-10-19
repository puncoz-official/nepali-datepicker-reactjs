/** @type {import("tailwindcss").Config} */
export default {
  prefix: "ndp-",
  darkMode: ["class", "[data-theme=\"dark\"]"],
  important: ".nepali-datepicker",
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--ndp-primary)",
        secondary: "var(--ndp-secondary)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
