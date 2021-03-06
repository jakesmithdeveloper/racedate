import React, { useEffect } from "react";
import WebFont from "webfontloader";

const ComputingSelector = ({ state, handleClick }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Work Sans"],
      },
    });
  }, []);

  return (
    <div
      className="flex items-center mb-5 px-10"
      style={{ fontFamily: "Work Sans" }}
    >
      <h3 className="text-white-cream md:text-3xl">Currently Computing: </h3>
      <div className="group inline-block relative ml-2">
        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center md:text-2xl">
          <span className="mr-1">{state.label}</span>
        </button>
        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
          <li
            onClick={handleClick}
            value={0}
            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap select-none"
          >
            Start Date
          </li>
          <li
            onClick={handleClick}
            value={1}
            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap select-none"
          >
            Race Date
          </li>
          <li
            onClick={handleClick}
            value={2}
            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap select-none"
          >
            Training Block Length
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComputingSelector;
