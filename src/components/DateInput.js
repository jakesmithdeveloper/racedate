import React, { useState, useEffect } from "react";

const DateInput = ({ inputConfig, handleChange }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, [inputConfig]);

  return (
    <div>
      <label htmlFor="">{`${inputConfig.label} : `}</label>
      <input
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
