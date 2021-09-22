module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
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
      marginBottome: {
        square: "100%",
      },
      borderRadius: {
        calc: "50px",
      },
      width: (theme) => ({
        sevens: "calc(100% / 7)",
        logo: "32px",
        "logo-large": "64px",
        "container-large": "600px",
        "header-large": "475px",
      }),
      height: (theme) => ({
        cellHeightSM: "6em",
        cellHeightMD: "8em",
        sevens: "calc(100% / 7)",
        logo: "32px",
        "logo-large": "64px",
        "container-large": "600px",
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
      animation: ["hover"],
      backgroundColor: ["active"],
      borderColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
