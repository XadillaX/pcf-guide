/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'pixel': ['Press Start 2P', 'Courier New', 'monospace'],
      },
      colors: {
        minecraft: {
          grass: '#7CB342',
          'grass-dark': '#689F38',
          'grass-darker': '#558B2F',
          stone: '#9E9E9E',
          'stone-dark': '#757575',
          'stone-darker': '#616161',
          dirt: '#795548',
          'dirt-dark': '#6D4C41',
          'dirt-darker': '#5D4037',
          gold: '#FFD700',
          'gold-dark': '#FFC107',
          'gold-darker': '#FF8F00',
          redstone: '#F44336',
          sky: '#42A5F5',
          'sky-dark': '#1976D2',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      fontSize: {
        'xs-pixel': ['10px', '1.6'],
        'sm-pixel': ['12px', '1.6'],
        'base-pixel': ['14px', '1.6'],
        'lg-pixel': ['16px', '1.6'],
        'xl-pixel': ['20px', '1.6'],
        '2xl-pixel': ['24px', '1.6'],
      },
      animation: {
        'pixel-pulse': 'pixelPulse 2s infinite',
        'redstone-glow': 'redstoneGlow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        pixelPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        redstoneGlow: {
          '0%': { boxShadow: '0 0 5px #F44336' },
          '100%': { boxShadow: '0 0 20px #F44336, 0 0 30px #F44336' },
        },
      },
    },
  },
  plugins: [],
};
