const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      white: {
        DEFAULT: '#f9f9f9',
      },
      pampas: {
        DEFAULT: '#ece8e1',
      },
      black: {
        DEFAULT: '#111111',
      },
      gray: {
        DEFAULT: '#595959',
      },
      lightGray: {
        DEFAULT: '#d1d1d1',
      },
      red: {
        DEFAULT: '#ff4655',
      },
      ebony: {
        DEFAULT: '#0F1923',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          fontFamily: theme('fontFamily.roboto'),
          color: theme('colors.black.DEFAULT'),
        },
        h1: {
          fontFamily: theme('fontFamily.openSans'),
          fontSize: theme('fontSize.4xl'),
        },
        h2: {
          fontFamily: theme('fontFamily.openSans'),
          fontSize: theme('fontSize.3xl'),
        },
        h3: {
          fontFamily: theme('fontFamily.openSans'),
          fontSize: theme('fontSize.2xl'),
        },
        h4: {
          fontFamily: theme('fontFamily.openSans'),
          fontSize: theme('fontSize.xl'),
        },
        h5: {
          fontFamily: theme('fontFamily.openSans'),
          fontSize: theme('fontSize.lg'),
        },
        h6: {
          fontFamily: theme('fontFamily.openSans'),
          fontSize: theme('fontSize.base'),
        },
      });
    }),
  ],
};
