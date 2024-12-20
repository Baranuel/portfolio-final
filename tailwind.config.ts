/** @type {import('tailwindcss').Config} */ 
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "350px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      keyframes: {
        pulseBG: {
          '0%': { transform: 'scale(1)', opacity: '1'},
          '50%': { transform: 'scale(1.5)', opacity: '0.15'},
          '100%': { transform: 'scale(1)', opacity: '1'}
        },
        text: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': '0 -200%',
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': '200% 0',
          },

        
        },
        appear: {
          '0%': { opacity: "0", transform:"translateY(50px)" },
          '100%': { opacity:"1" , transform:"translateY(0px)"},
        },
        iconPing: {
            '25%': { transform: 'scale(2)', opacity: '0.45'},
            '80%': { transform: 'scale(1)', opacity: '1'}
        },
        signal: {
          '0%': { alignSelf:'start',  transform:'translateY(-200%)',},
          '50%': { alignSelf:'start', transform:'translateY(-100%)',},
          '70%': { alignSelf:'start', transform:'translateY(0%)',},
          '100%': { alignSelf:'end', transform:'translateY(100%)'},
        },
        scroll_first_part: {
          '0%': { transform: 'translateX(calc(-100% - 128px))' },
          '100%': { transform: 'translateX(0)' },
        },
        scroll_first_part_mobile: {
          '0%': { transform: 'translateY(calc(100% - 128px))' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
        animation: {
          text: 'text 4s linear infinite',
          pulseBG : 'pulseBG 4s linear infinite',
          signal: 'signal 2s cubic-bezier(0.060, 0.975, 0.195, 0.985) infinite',
          icon_ping: 'iconPing 1.5s cubic-bezier(0.060, 0.975, 0.195, 0.985) forwards',
          appear_1: 'appear 1s ease-in-out forwards',
          appear_2: 'appear 1s ease-in-out 0.2s forwards',
          appear_3: 'appear 1s ease-in-out 0.3s forwards',
          scroll_first_part: 'scroll_first_part 35s linear infinite',
          scroll_second_part: 'scroll_first_part 35s linear infinite',
          scroll_first_part_mobile: 'scroll_first_part_mobile 35s linear infinite',
        },
  
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        bezier: "cubic-bezier(0.060, 0.975, 0.195, 0.985)",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "16": "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(1,255, 255, 0.35)",
          "0 0px 65px rgba(25, 255,255, 0.2)"
        ]
      },

      colors: {
        background: "#FAFAFA",
        primaryGrey: "#4E5050",
        primaryBlack: "#050505",
      },
      fontSize: {
        heroText: "74.88px",
        sectionTitle: "44px",
        sectionSubtitle: "18px",
        decorText: '10px',
        text: "15px",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        pixelify: ['var(--font-pixelify-sans)', 'sans-serif'],
        robotoMono: ['var(--font-roboto-mono)', 'monospace'],
        dmSans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
export default config;
