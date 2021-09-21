import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setDarkMode } from "../actions";
import WebFont from "webfontloader";

const Header = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Bangers"],
      },
    });
  });

  const switchDarkMode = (e) => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-evenly place-items-center bg-foreground-blue dark:bg-darker-purple text-white-cream select-none w-80 h-40 rounded-full mt-8">
      <h1 style={{ fontFamily: "Bangers" }} className="tracking-wider text-5xl">
        Race Date
      </h1>
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
