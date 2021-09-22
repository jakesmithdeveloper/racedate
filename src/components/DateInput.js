import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";

const DateInput = ({ inputConfig, handleChange, currentState }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Work Sans"],
      },
    });
  }, []);

  useEffect(() => {
    setValue("");
  }, [currentState]);

  const width = inputConfig.type === "text" ? "w-10 ml-5" : "w-40 md:w-72";

  return (
    <div
      style={{ fontFamily: "Work Sans" }}
      className={`font-thin w-full flex ${
        inputConfig.type === "text" ? "" : "justify-between"
      } items-center px-10 md:text-2xl`}
    >
      <label
        className="text-gray-200"
        htmlFor=""
      >{`${inputConfig.label} : `}</label>
      <input
        className={`my-4 text-center ${width}`}
        type={inputConfig.type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleChange({ key: inputConfig.key, value: e.target.value });
        }}
      />
    </div>
  );
};

export default DateInput;
