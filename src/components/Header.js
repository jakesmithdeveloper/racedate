import React from "react";
import { connect } from "react-redux";
import { setDarkMode } from "../actions";

const Header = ({ darkMode, setDarkMode }) => {
  const switchDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-evenly bg-foreground-blue dark:bg-darker-purple max-w-sm md:max-w-lg w-full rounded-full text-white-cream dark:text-gray-100  p-10 mt-10 select-none">
      <h1 className="text-6xl font-bold">Race Date</h1>
      <button className="mx-2" onClick={switchDarkMode}>
        {darkMode ? "light" : "dark"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode.darkMode,
  };
};

export default connect(mapStateToProps, { setDarkMode })(Header);
