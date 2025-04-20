/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#18d412',
          dark: '#0ca420',
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          dark: '#0d0c0c',
        },
      },
    },
  },
  plugins: [],
}
