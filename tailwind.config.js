import tailwindColors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        interactive: {
          DEFAULT: tailwindColors.fuchsia[400],
        },
      },
      textColor: {
        primary: tailwindColors.slate[950],
        secondary: tailwindColors.slate[600],
      }
    },
  },
  plugins: [],
}
