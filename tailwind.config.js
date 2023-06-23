/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "88vh": "88vh",
        "12vh": "12vh",
        "7%": "7%",
      },
      colors: {
        chatBg: "#D0D6D9",
        messagesBg: "#BDC3C7",
        actionBtn: "#3498DB",
        bgPrimary: "#2C3E50",
        formLogin: "#E9EFE6",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
