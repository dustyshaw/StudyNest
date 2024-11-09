/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lilac': {
          100: '#F9F7FD',
          200: '#ECE3F7',
          300: '#C4ABE6',
          400: '#8B5ACE',
          500: '#6532A9',
          600: '#331A56',
          700: '#1C0E2F',
        },
        'gray': {
          100: '#FAFAFA',
          200: '#F1F3F4',
          300: '#DEE1E6',
          400: '#BABCBE',
          500: '#5F6368',
          600: '#535353',
          700: '#202124',
        },
        'navy': {
          100: '#F2F6FD',
          200: '#C5D8F6',
          300: '#95B7EF',
          400: '#4580E3',
          500: '#1D5ABE',
          550: '#164592',
          600: '#0D2855',
          700: '#051123',
        },
        'sky': {
          100: '#FAFDFF',
          200: '#E7F6FE',
          300: '#D5F0FD',
          400: '#6DCBF8',
          500: '#1FAFF4',
          600: '#0D2855',
          700: '#065E88',
        },
        'lime': {
          100: '#FCFEFB',
          200: '#F6FDF2',
          300: '#E2F9D2',
          400: '#C9F3AC',
          500: '#ABEC7E',
          600: '#71DF25',
          700: '#5AB71A',
        },
      },
    }
  },
  plugins: [],
}

