/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#35789B',
        'secondary': '#0D8564',
        'tertiary': '#74A0BC',
        'light': '#E3EBEF',
        'primary-dark': '#2A6080',
        'secondary-dark': '#0A6A50',
        'tertiary-light': '#8FB5CC',
      },
    },
  },
  plugins: [],
}
