/** @type {import("tailwindcss").Config} */
export default {
  prefix: "ndp-",
  darkMode: ["class", "[data-theme=\"dark\"]"],
  important: ".nepali-datepicker",
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
