module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
      extend: {
          colors:{
          'white' : '#FFFFFF',
          'black' : '#000000',
          'creme' : '#F2E5D5',
          'pink' : '#F27DB4',
          'blue' : '#04B1D9',
          'orange' : '#F19444',
          'red' : '#F15430',
          'darkred' : '#F04119'
          },
          fontFamily: {
              'barlow': ['Barlow', 'sans-serif'],
              'montserrat' : ['Montserrat' , ]
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
              'homeImg' : "url('/src/images/good.png')",
              'searchIcon' : "url('/src/images/search.png')",
              'closeIcon' : "url('/src/images/close.svg')"
          },
          borderRadius: {
              'none': '0',
              'sm': '0.125rem',
              'md': '0.375rem',
              'lg': '0.5rem',
              'full': '9999px',
              'large': '15px',
          },
          height: {
              '120': '120vh',
              '130': '130vh',
              '140': '140vh',
              '35%' : '35%',
              '36rem' : '36rem',
              '40rem' : '40rem',
              '19rem' : '19rem',
              '80vh' : '80vh',
              '60vh' : '60vh',
          },
          width: {
              '86' : '22rem',
              '60rem' : '60rem',
          },
          screens: {
            'xs': '440px',
            'sm': '640px',
      
            'md': '768px',
      
            'lg': '1024px',
      
            'xl': '1280px',
      
            '2xl': '1536px',

            '2xlMax': {'max': '1535px'},
    
            'xlMax': {'max': '1279px'},

            'lgMax': {'max': '1023px'},

            'mdMax': {'max': '767px'},
            'midMax': {'max': '890px'},

            'smMax': {'max': '639px'},
            'xsMax': {'max': '480px'},

            'smMid': {'min': '640px', 'max': '767px'},

            'midMid': {'min': '640px', 'max': '1023px'},
            'mdMid': {'min': '768px', 'max': '1023px'},

            'lgMid': {'min': '1024px', 'max': '1279px'},

            'xlMid': {'min': '1280px', 'max': '1535px'},
            
            '2xlMin': {'min': '1536px'},
            }
        //   }
      },
  },
}
