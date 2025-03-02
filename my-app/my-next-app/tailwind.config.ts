// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563EB', // Customize the blue color used in the form
          700: '#1D4ED8',
        },
      },
    },
  },
  plugins: [],
};

export default config;