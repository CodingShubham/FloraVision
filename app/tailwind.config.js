export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#1b2316',
      },
      fontFamily: {
        'indie': ['Indie Flower', 'cursive'],  // ← add this
      },
    },
  },
  plugins: [],
}