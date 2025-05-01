module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3a6d',  // Deep navy blue
          50: '#f0f4fa',
          100: '#d0dee8',
          200: '#a5bedb',
          300: '#7c9fca',
          400: '#5680b9',
          500: '#3a62a0',
          600: '#1a3a6d',  // Main color
          700: '#142d54',
          800: '#0e1f3b',
          900: '#071221'
        },
        secondary: {
          DEFAULT: '#c19434',  // Gold accent
          50: '#fdf8e7',
          100: '#f9ecbb',
          200: '#f2d988',
          300: '#e9c45d',
          400: '#d9ac3f',
          500: '#c19434',  // Main color
          600: '#a07829',
          700: '#7f5e21',
          800: '#5d4417',
          900: '#3c2a0e'
        },
        dark: {
          DEFAULT: '#121920',
          lighter: '#1c2630',
          card: '#232f3c',
          accent: '#2d3c4d'
        },
        light: {
          DEFAULT: '#f8f9fd',
          darker: '#edf1f7',
          card: '#ffffff'
        },
        accent: {
          blue: '#3e88d1',
          green: '#2c8874',
          red: '#b34e4b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-pattern.svg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(26, 58, 109, 0.2)', background: 'rgba(26, 58, 109, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(26, 58, 109, 0.6)', background: 'rgba(26, 58, 109, 0.2)' }
        }
      }
    },
  },
  plugins: [],
}