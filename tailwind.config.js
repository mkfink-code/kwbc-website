/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-azure': 'var(--brand-dark-azure)',
        'brand-yellow': 'var(--brand-yellow)',
        'brand-yellow-alt': 'var(--brand-yellow-alt)',
        'brand-dark-gray-green': 'var(--brand-dark-gray-green)',
        'brand-yellow-green': 'var(--brand-yellow-green)',
        'accent-coral': 'var(--accent-coral)',
        'neutral-50': 'var(--neutral-50)',
        'neutral-100': 'var(--neutral-100)',
        'neutral-200': 'var(--neutral-200)',
        'neutral-800': 'var(--neutral-800)',
        'neutral-900': 'var(--neutral-900)',
      },
      fontFamily: {
        'serif': ['Merriweather', 'Times New Roman', 'serif'],
        'sans': ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
