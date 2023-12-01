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
        serviceImg: '-5px 10px 10px 3px rgba(0,0,0,0.5)',
        mapImg: '10px 10px 10px 3px rgba(0,0,0,0.5)',
        testimonial: '6px 6px 10px 2px rgba(0,0,0,0.5)',
        xBlack: '20px 0px 10px 0px rgba(0,0,0,0.5), -20px 0px 10px 0px rgba(0,0,0,0.5)',
      },
      minHeight: {
        hero: '75vh',
      },
      scale: {
        400: '400%',
      },
      screens: {
        lg: '1024px',
      },
    },
  },
  plugins: [],
}
export default config
