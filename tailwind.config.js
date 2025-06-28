/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        general: ['GeneralSans-Variable', 'sans-serif'],
        cabinet: ['CabinetGrotesk-Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
