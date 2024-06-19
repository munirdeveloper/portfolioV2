/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./contact.html", "./src/input.css"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
