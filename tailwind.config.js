/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '1572px',
      },
    },
    fontFamily: {
      sans: ["'Alegreya Sans', sans-serif"],
      mono: ["'Alegreya Sans', sans-serif"],
    },
    screens: {
      sm: { max: '767px' },
      md: { max: '991px', min: '768px' },
      lg: { max: '1199px', min: '992px' },
      xl: { min: '1200px' },
    },
    fontSize: {
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      28: '28px',
      30: '30px',
      32: '32px',
      36: '36px',
      48: '48px',
      85: '85px',
      'faqNav': '28px'
    },
    extend: {
      backgroundImage: {
        'product-image': "url('/images/bg/product-page.svg')",
        'product-image2': "url('/images/bg/product-page2.svg')",
        'product-image3': "url('/images/bg/product-page3.svg')",
      },
      colors: {
        'blue-500': '#4CBAE4',
        'black-500': '#0C0C0C',
        'black-400': '#3D3D3D',
        'black-300': '#5B5B5B',
        'black-100': '#EBEBEB',
        'dirty-white': '#888889',
        'gray-500': '#333',
        'gray-400': '#888',
      },
    },
  },
  plugins: [],
}
