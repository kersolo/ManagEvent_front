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
        DEFAULT: "#c47600",
      },
      darkBlueDP: {
        DEFAULT: "#0B1247",
      },
      lightBlueDP: {
        DEFAULT: "#02b2dc",
      },
    },
    button: {
      styles: {
        base: {
          initial: {
            textTransform: "capitalize",
          },
        },
      },
    },
  },
  plugins: [],
});
