import React from "react";
import { connect } from "react-redux";
import { setDarkMode } from "../actions";
import Sun from "../resources/sun.png";
import Moon from "../resources/moon.png";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const switchDarkMode = (e) => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      {darkMode ? (
        <img
          onClick={switchDarkMode}
          className="w-logo-large h-logo-large"
          src={Sun}
          alt=""
        />
      ) : (
        <img
          className="w-logo-large h-logo-large"
          onClick={switchDarkMode}
          src={Moon}
          alt=""
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode.darkMode,
  };
};

export default connect(mapStateToProps, { setDarkMode })(DarkModeToggle);
