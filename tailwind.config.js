/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontSize: {
        'size-big-title': '1.5rem',
        'size-medium-title': '1.125rem',
        'size-body': '1rem',
        'size-subbody': '0.75rem',
      },
      colors: {
        'dark-gray-color': '#777777',
        'medium-gray-color': '#00000080',
        'light-gray-color': '#E5E5E5',
        'c-green-color': '#12B886',
        'c-light-color': '#F8F9FA',
      },
    },
  },
  plugins: [],
}
