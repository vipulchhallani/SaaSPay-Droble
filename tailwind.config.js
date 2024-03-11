/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B2EBC',
          dark:"#6E4FDF",
          light:"#495377",
          vlight:"#B1B4D4",
          vdark:"#1F0247",
        },
        white:{
          DEFAULT: '#FFFFFF',
          light:"#F3F7FC",
          vlight:"rgba(255, 255, 255, 0.50)",
          dark:"#F3F6FA",
        },
        grey:{
          DEFAULT:"#C4BAD5",
          light:"#9699BF",
          dark:"#4E5D78",
          vdark:"#BBC0CA",
          vlight:"#F0F1F5",
          
        },
        black:{
          DEFAULT: '#1A202C',
         dark:"#24104D",
         light:'#323B4B',
         vlight:'#F8F9FA',
         vdark:"#3E4C59",
        },
        green:{
          DEFAULT: '#6FFD86',
          dark:"#3ECCA6",
          light:"#29B97D",
          vlight:'#F2FBFF',
        },
        pink:{
          DEFAULT:'#E2DAFF',
          light:'#F4F1FE',
          vlight:'#FDEEED',
          dark:'#FEFAF0',
          vdark:'rgba(228, 220, 255, 0.56)',
        }
      },
    },
    screens: {
      'xs': '0px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
      
    },
    fontSize: {
      'xs': '10px',
      'sm': '13px',
      'tiny': '14px',
      'base': '16px',
      'lg':   '18px',
      'xl': '24px',
      '2xl': '28px',
      '3xl': '30px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '40px',
      '7xl': '48px',
      '8xl': '54px',
      '9xl': '72px',
    },
  },
  plugins: [],
});

