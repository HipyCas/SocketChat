module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    animation: ['hover', 'focus', 'motion-safe']
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
