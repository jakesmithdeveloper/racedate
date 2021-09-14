import React from "react";
import { connect } from "react-redux";
import { setDarkMode } from "../actions";

const Header = ({ darkMode, setDarkMode }) => {
  const switchDarkMode = (e) => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-evenly place-items-center bg-foreground-blue dark:bg-darker-purple max-w-sm md:max-w-lg w-full rounded-full text-white-cream dark:text-gray-100  p-10 mt-10 select-none">
      <h1 className="text-6xl font-bold">Race Date</h1>
      <div>
        <label for="toogleA" class="flex items-center cursor-pointer">
          <div class="relative">
            <input
              id="toogleA"
              type="checkbox"
              class="hidden"
              checked={darkMode}
              onClick={switchDarkMode}
            />

            <div class="toggle__line w-10 h-4 bg-gray-50  rounded-full shadow-inner"></div>

            <div class="toggle__dot absolute w-6 h-6 bg-purple-400 rounded-full shadow inset-y-0 left-0"></div>
          </div>
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode.darkMode,
  };
};

export default connect(mapStateToProps, { setDarkMode })(Header);
