module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF6B00',
        'brand-red': '#CC2200'
      },
      fontFamily: {
        'barlow': ['Barlow Condensed', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif']
      }
    }
  }
};