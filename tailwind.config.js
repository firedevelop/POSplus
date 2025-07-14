/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        stripe: {
          blue: "#635bff",
          dark: "#0a2540",
          gray: "#f6f9fc",
          gray2: "#e3e8ee",
          gray3: "#425466",
        },
      },
    },
  },
  plugins: [],
}