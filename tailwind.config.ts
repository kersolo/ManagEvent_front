import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orangeDP: {
        DEFAULT: "#FFB647",
      },
      darkOrangeDP: {
        DEFAULT: "#ff9c06",
      },
      darkBlueDP: {
        DEFAULT: "#0B1247",
      },
      mediumBlueDP: {
        DEFAULT: "#111b6c",
      },
      lightBlueDP: {
        DEFAULT: "#02b2dc",
      },
    },
    button: {
      valid: {
        type: "submit",
      },
    },
  },
  plugins: [],
});
