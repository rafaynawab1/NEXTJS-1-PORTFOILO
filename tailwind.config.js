// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Ensure this includes all your JSX/TSX files
    './components/**/*.{js,ts,jsx,tsx}', // Add the components folder
    './app/**/*.{js,ts,jsx,tsx}',  // If you're using the new app directory in Next.js 13+
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
