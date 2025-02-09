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

      spacing: {
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem'
      },

      zIndex: {
        base: '10',
        menu: '20',
        overlay: '30',
        modal: '40',
        alwaysOnTop: '50'
      }
    }
  },
  plugins: []
}
export default config
