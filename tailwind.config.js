/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'primary-color-light': '#F0A500',
        'primary-color-dark': '#FFC542',
        'secondary-color-light': '#F0A500',
        'secondary-color-dark': '#FFC542',
        'secondary-bg-light': '#F4F6F8',
        'secondary-bg-dark': '#1E1E1E',
        'primary-text-light': '#121212',
        'primary-text-dark': '#FFFFFF',
        'primary-opacity-color-text': '#949494'
      },
      fontSize: {
        'slim': '12px',
        'slim-med': '18px',
        'default': '20px',
        'med': '24px',
        'boom': '42px'
      },
      borderRadius: {
        'default': '20px'
      }
    },
  },
  plugins: [],
}

