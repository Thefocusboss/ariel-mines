/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF8F5',
          light: '#FCFBF9',
          subtle: '#F3EFEA',
          muted: '#EAE3D8',
          card: '#FFFFFF',
          border: 'rgba(28, 25, 23, 0.09)',
          'border-gold': 'rgba(180, 138, 40, 0.28)',
        },
        navy: {
          DEFAULT: '#0B1B2B',
          dark: '#07131F',
          light: '#1E293B',
          deep: '#0F172A',
        },
        gold: {
          light: '#F8E7A2',
          DEFAULT: '#B48A28',
          dark: '#997D1E',
          deep: '#856A18',
          muted: '#78611C',
          glow: 'rgba(180, 138, 40, 0.25)',
        },
        amber: {
          accent: '#D97706',
          warm: '#B45309',
        },
        cobalt: {
          accent: '#0284C7',
          glow: 'rgba(2, 132, 199, 0.15)',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B48A28 0%, #856A18 100%)',
        'gold-gradient-light': 'linear-gradient(135deg, rgba(180, 138, 40, 0.12) 0%, rgba(180, 138, 40, 0.03) 100%)',
        'cream-radial': 'radial-gradient(ellipse at top, #FAF8F5 0%, #F3EFEA 100%)',
      },
      boxShadow: {
        'card-cream': '0 4px 20px -2px rgba(28, 25, 23, 0.05), 0 2px 6px -1px rgba(28, 25, 23, 0.02)',
        'card-hover': '0 12px 32px -4px rgba(28, 25, 23, 0.10), 0 4px 12px -2px rgba(28, 25, 23, 0.04)',
        'gold-subtle': '0 0 20px -3px rgba(180, 138, 40, 0.25)',
        'gold-glow': '0 0 30px 0px rgba(180, 138, 40, 0.35)',
      }
    },
  },
  plugins: [],
};
