/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'color-bg': '#040C18',
        'color-footer': '#031B34',
       'color-blog':' #042c54',
        'color-text': '#81AFDD',
       'color-subtext':' #FF8A71',
       
      }
    },
  },
  plugins: [],
}