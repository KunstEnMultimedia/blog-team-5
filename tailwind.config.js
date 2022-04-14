// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   extend: {
//     theme: {
 
//     },
//     colors: {
//       'coolBlue' : '#1fb6ff'
//     },
//   },
  
//   plugins: [],
// }

module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
      extend: {
          colors:{
          'white' : '#FFFFFF', //? Hebben we dit nodig?
          'black' : '#000000', //? Hebben we dit nodig?
          'gray' : '#6d7f8c',
          'mint' : '#a4c9d9',
          'blue' : '#2b86bf',
          'sky-blue' : '#84a9d9',
          'purple' : '#6f73bf',
          },
          fontFamily: {
              'barlow': ['Barlow', 'sans-serif'],
          },
          fontSize: { //.INFO_template: 'name' : ['fontSize', 'lineHeight'],
              'heading1' : ['96px', '115px'],
              'heading2' : ['60px', '72px'],
              'heading3' : ['48px', '58px'],
              'heading4' : ['34px', '41px'],
              'heading5' : ['24px', '29px'],
              'heading6' : ['20px', '24px'], //? 24px lineHeight? Navragen bij Adi...
              'paragraphL' : ['24px', '29px'],
              'paragraphM' : ['20px', '24px'], //? 24px lineHeight? Navragen bij Adi...
              'paragraphS' : ['16px', '19px'], //? 19px lineHeight? Navragen bij Adi...
              'button' : ['20px', '24px'], //? 24px lineHeight? Navragen bij Adi...
              'caption' : ['14px', '17px'],
          },
          backgroundImage: { //TODO: add images to folder and list them here
              // 'cover' : "url('/src/img/cover.png')",
          },
          borderRadius: {
              'none': '0',
              'sm': '0.125rem',
              // DEFAULT: '0.25rem',
              // DEFAULT: '4px',
              'md': '0.375rem',
              'lg': '0.5rem',
              'full': '9999px',
              'large': '15px',
          },
      },
  },
  plugins: [],
}
