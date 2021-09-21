import React, { useEffect } from "react";
import WebFont from "webfontloader";

const CalculatorTitle = ({ title }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Fredoka One"],
      },
    });
  });

  return (
    <h1
      style={{ fontFamily: "Fredoka One" }}
      className="text-3xl md:text-6xl mb-5 text-white-cream dark:text-gray-100 text-center"
    >
      {title}
    </h1>
  );
};

export default CalculatorTitle;
