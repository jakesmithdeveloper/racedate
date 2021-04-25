import React from "react";

const Header = ({ state, handleClick }) => {
  return (
    <div className="flex items-center">
      <h3>Currently Computing: </h3>
      <div className="group inline-block relative ml-2">
        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span className="mr-1">{state}</span>
        </button>
        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
          <li
            onClick={handleClick}
            value={0}
            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap"
          >
            Race Date
          </li>
          <li
            onClick={handleClick}
            value={1}
            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap"
          >
            Start Date
          </li>
          <li
            onClick={handleClick}
            value={2}
            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap"
          >
            Training Block Length
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
