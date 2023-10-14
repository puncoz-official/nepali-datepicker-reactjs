/** @type {import("tailwindcss").Config} */
export default {
  prefix: "ndp-",
  darkMode: ["class", "[data-theme=\"dark\"]"],
  important: ".ndp__datepicker",
  content: [
    "./NepaliDatePicker/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
