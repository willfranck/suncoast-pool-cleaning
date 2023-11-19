import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hero: 'url(/spc_home_splash.jpg)',
        form: 'url(/spc_home_form.jpg)',
        about: 'url(/spc_about_splash.jpg)',
      },
      backgroundColor: {
        tintBlack: 'rgba(0, 0, 0, 0.5)',
      },
      boxShadow: {
        form: '20px 0px 10px 0px rgba(0,0,0,0.5), -20px 0px 10px 0px rgba(0,0,0,0.5)'
      },
      minHeight: {
        hero: '70vh',
      },
      scale: {
        400: '400%',
      }
    },
  },
  plugins: [],
}
export default config
