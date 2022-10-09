/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{pages,components}/**/*.{html,js,ts,tsx,jsx}",
  "./node_modules/flowbite-react/**/*.js",
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
