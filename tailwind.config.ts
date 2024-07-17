import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      inter: ['var(--font-inter)'],
      ls: ['var(--font-league-spartan)'],
      bg: ['var(--font-bricolage-grotesque)']
    },
    extend: {
      colors: {
        brand: {
          primary: '#f9bf52'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      cursor: {
        dot: 'url(/dot.svg), pointer'
      }
    }
  },
  plugins: []
}
export default config
