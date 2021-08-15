import React, { useState, useEffect } from "react";

const DateInput = ({ inputConfig, handleChange, currentState }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, [currentState]);

  const width = inputConfig.type === "text" ? "w-10" : "";

  return (
    <div>
      <label
        className="text-gray-200"
        htmlFor=""
      >{`${inputConfig.label} : `}</label>
      <input
        className={`my-4 ${width}`}
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
