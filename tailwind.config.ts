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
      container: {
        center: true, // Centraliza automaticamente o container (testar isso depois)
        padding: '3.2rem' // Define o gutter (espaçamento interno)
      }
      // maxWidth: {
      //   container: '130rem' // Define o tamanho máximo do container (testar com isso tbm)
      // }
    }
  },
  plugins: []
}
export default config
