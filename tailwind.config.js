module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: (theme) => ({
        sevens: "calc(100% / 7)",
      }),
      height: (theme) => ({
        cellHeightSM: "3em",
        cellHeightMD: "5em",
      }),
      border: (theme) => ({
        calendarBorder: "0.25rem solid black",
      }),
    },
  },
  variants: {
    extend: { display: ["group-hover"] },
  },
  plugins: [],
};
