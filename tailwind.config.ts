import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['16px', '24px'],
      // base: ['16px', '19.5px'],
      // lg: ['18px', '21.94px'],
      // xl: ['20px', '24.38px'],
      // '2xl': ['24px', '29.26px'],
      // '3xl': ['28px', '50px'],
      // '4xl': ['48px', '58px'],
      // '8xl': ['96px', '106px'],
    },
    screens: {
      sm: '367px',
      md: '768px',
      lg: '1576px',
    },
    colors: {
      primary: '#1D1D1F',
      'secondary-gray': '#686870',
      'accent-orange': '#F63',
      'accent-green': '#00CC2D',
      'br-gray': '#D2D2D7',
      'menu-gray': '#9E9E9E',
    },
    extend: {
      backgroundColor: {
        'main-white': '#FFF',
        secondary: 'D2D2D7',
        'btn-green': '#00CC2D',
        'accent-hit': '#FBDCD5',
        'accent-new': '#CCF5D5',
        'local-gray': '#F5F5F7',
      },
    },
  },
  plugins: [],
};
export default config;
