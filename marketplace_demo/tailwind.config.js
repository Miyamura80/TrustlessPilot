/* @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./{pages,components}/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
