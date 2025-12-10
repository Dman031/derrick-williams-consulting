module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#1e293b',
        accent: '#3b82f6',
        accentGlow: '#60a5fa',
        highlight: '#8b5cf6',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.5)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-glow': 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      },
    },
  },
  plugins: [],
}

