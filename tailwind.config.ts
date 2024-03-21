import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
    colors: {
      orangeDP: "#FFB647",
      darkOrangeDP: "#ff9c06",
      darkBlueDP: "#0B1247",
      mediumBlueDP: "#111b6c",
      lightBlueDP: "#00D7FF",
      redDP: "#e42828",
      darkRedDP: "#be1818",
      greenDP: "#0bb55b",
    },
  },
  plugins: [],
});
