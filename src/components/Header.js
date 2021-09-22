import React, { useEffect } from "react";
import WebFont from "webfontloader";

const Header = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Bangers", "Faster One"],
      },
    });
  });

  return (
    <div className="flex place-items-center justify-center bg-foreground-blue dark:bg-darker-purple text-white-cream select-none w-80 h-40 rounded-lg mt-8 md:w-header-large">
      <h1
        style={{ fontFamily: "Faster One" }}
        className="tracking-wide text-5xl md:text-6xl"
      >
        Race Date
      </h1>
    </div>
  );
};

export default Header;
