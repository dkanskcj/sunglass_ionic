/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors:{
      primary:'#001650',
      'primary-Lighter':'#334573',
      'primary-Light':'#1D2D62',
      'primary-select':'#334573',
      'primary-noselect':'#1A2D62',
      'primary-nosel_dot':'#9CA3AF',
      'primary-modal' : '#7D7D7E',
    },
    fontFamily: 'Pretendard'
  },
  },
  plugins: [],
};
