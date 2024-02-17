/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: {max: '1999.99px'},
      md: {max: '1309.99px'},
      sm: {max: '767.99px'},
      xs: {max: '479.99px'},
    },
    extend: {
      colors: {
        purple50: '#AC85FF',
        blueViolet: '#5027B5',
        lightGray: '#666768',
        pinkDark: '#FF00C7',
        grayLight: '#464747',
        gray50: '#EAEAEA',
        gray100: '#787878',
        gray200: '#666768'
},
      backgroundImage: {
        heroGradient: 'linear-gradient(94.59deg, #4923b4, 2.39%, #e878cf 97.66%)',
      }
    },
  },
  plugins: [],
}
