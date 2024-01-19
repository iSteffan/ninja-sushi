import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
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
    },
    extend: {
      backgroundColor: {
        main: '#FFF',
        secondary: 'D2D2D7',
        'btn-green': '#00CC2D',
        'accent-hit': '#FBDCD5',
        'accent-new': '#CCF5D5',
      },
    },
  },
  plugins: [],
};
export default config;
