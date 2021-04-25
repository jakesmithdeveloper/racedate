import React, { useState } from "react";

const DateInput = ({ inputConfig }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <label htmlFor="">{`${inputConfig.label} : `}</label>
      <input
        type={inputConfig.type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default DateInput;
