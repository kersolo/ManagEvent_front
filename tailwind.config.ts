import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'mobileBgDp': "url('/src/assets/img/pictures/fireworkMobile.jpg')",
        'desktopBgDp': "url('/src/assets/img/pictures/celebration-3443777.jpg')"
      }
    }
  },
  plugins: []
});
