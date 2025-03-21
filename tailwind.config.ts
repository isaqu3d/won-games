import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Open Sans"',
          '"Helvetica Neue"',
          'sans-serif'
        ]
      },

      colors: {
        primary: '#F231A5',
        secondary: '#3CD3C1',
        mainbg: '#06092B',
        white: '#FAFAFA',
        black: '#030517',
        lightgray: '#EAEAEA',
        gray: '#8F8F8F',
        darkgray: '#2E2F42'
      },

      zIndex: {
        base: '10',
        menu: '20',
        overlay: '30',
        modal: '40',
        alwaysOnTop: '50'
      },

      keyframes: {
        hoverUnderline: {
          '0%': { width: '0', left: '50%' },
          '100%': { width: '100%', left: '0' }
        }
      },
      animation: {
        hoverUnderline: 'hoverUnderline 0.2s forwards'
      }
    }
  },
  plugins: []
}
export default config
