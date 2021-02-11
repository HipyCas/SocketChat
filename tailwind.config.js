module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    animation: ['group-hover', 'hover', 'motion-safe']
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
