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
        hero: 'url(/spc_home_splash.webp)',
        about: 'url(/spc_about_splash.webp)',
        form: 'url(/spc_quote_form.webp)',
        banner: 'url(/spc_truck_banner.webp)',
        gradientBlue: 'linear-gradient(to bottom right, #081E2F 40%, #174D62 75%)',
      },
      backgroundColor: {
        tintBlack: 'rgba(0, 0, 0, 0.5)',
        tintBlackLight: 'rgba(0, 0, 0, 0.22)',
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
