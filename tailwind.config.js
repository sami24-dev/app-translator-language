/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grayLigthCard: '#212936cc',
        grayDarkCard: '#121826cc',
        grayDark: '#4d5562',
        grayDarktext: '#394150',
        grayLightext: '#cdd5e0',
        whiteText: '#f9fafb',
        lightText: '#f9fafb',
        blueLight: '#7ca9f3',
        blueDark: '#3662e3',
        backgraundContain: '#040711'
      },
    },
  },
  plugins: [],
}

