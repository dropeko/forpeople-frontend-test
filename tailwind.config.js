/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        deepseek: {
          dark: '#0A192F', 
          primary: '#1E3A8A', 
          secondary: '#3B82F6', 
          light: '#F3F4F6',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};