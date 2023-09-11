/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    cursor: {
      'normal': 'url(images/cursor.svg), auto',
      'pointer': 'url(images/cursor-pointer.svg), pointer',
    },
    extend: {
      fontFamily: {
        'body': 'Montserrat, sans-serif',
        'heading': 'Bebas Neue, sans-serif',
      },
      colors: {
        'primary': '#FF00E8',
        'secondary': '#00B6FF',
        'white': '#FDFBFA',
      },
      fontSize: {
        'main-heading': ['96px', {
          lineHeight: '116.7%',
          letterSpacing: 'normal',
          fontWeight: '400',
          fontFamily: 'heading'
        }],
        'tab-main-heading': ['75px', {
          lineHeight: '116.7%',
          letterSpacing: 'normal',
          fontWeight: '400',
          fontFamily: 'heading'
        }],
        'phone-main-heading': ['64px', {
          lineHeight: '116.7%',
          letterSpacing: 'normal',
          fontWeight: '400',
          fontFamily: 'heading'
        }],
        'heading': ['48px', {
          lineHeight: '56.016px',
          letterSpacing: 'normal',
          fontWeight: '400',
        }],
        'body-text': ['16px', {
          lineHeight: 'normal',
          letterSpacing: 'normal',
          fontWeight: '300',
        }],
        'accordion-heading': ['18px', {
          lineHeight: '27px',
          letterSpacing: 'normal',
          fontWeight: '600',
        }],
        'button': ['18px', {
          lineHeight: '26px',
          letterSpacing: 'normal',
          fontWeight: '700',
        }],
        'sub-heading': ['20px', {
          lineHeight: 'normal',
          letterSpacing: 'normal',
          fontWeight: '200',
        }],
        'nav-item': ['16px', {
          lineHeight: '24px',
          letterSpacing: 'normal',
          fontWeight: '300',
        }],
      },
      gap: {
        '56': '56px',
        '48': '48px',
        '24': '24px',
        '16': '16px'
      },
      padding: {
        'main-sides-desktop': '15%',
        'main-sides-tablet': '10%',
        'main-sides-phone': '4%',
        '80' : '80px',
        '48': '48px',
        '24': '24px',
        '16': '16px'
      },
      boxShadow: {
        'pink': '3px 16px 28px 0px rgba(255, 0, 232, 0.15), 7px -8px 40px 0px rgba(255, 0, 232, 0.15), 9px 1px 18px 0px rgba(255, 0, 232, 0.25), -17px 1px 45px 0px rgba(255,0,232,0.15)',
        'blue': '3px 16px 28px 0px rgba(0, 182, 255, 0.15), 7px -8px 40px 0px rgba(0, 182, 255, 0.15), 9px 1px 18px 0px rgba(0, 182, 255, 0.25), -17px 1px 45px 0px rgba(0, 182, 255, 0.15)',
      },
      borderRadius: {
        'accordion': '50px 50px 50px 0px',
        'button': '5px',
        'card': '50px',
      },
      height: {
        'button': '56px',
      },
      
    },
  },
  plugins: [],
}

