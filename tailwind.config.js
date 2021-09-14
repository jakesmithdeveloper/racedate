module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "foreground-blue": "#05386B",
        "background-green": "#5CDB95",
        "accent-green": "#379683",
        "light-green": "#8EE4AF",
        "white-cream": "#EDF5E1",
        "dark-blue": "#150050",
        "darker-purple": "#3F0071",
        "dark-purple": "#610094",
        "dark-selection": "#A12568",
      },
      width: (theme) => ({
        sevens: "calc(100% / 7)",
      }),
      height: (theme) => ({
        cellHeightSM: "6em",
        cellHeightMD: "8em",
        sevens: "calc(100% / 7)",
      }),
      border: (theme) => ({
        calendarBorder: "0.25rem solid black",
      }),
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      translate: ["active"],
      backgroundColor: ["active"],
      borderColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
