import React, { useEffect } from "react";
import { Field } from "react-final-form";
import WebFont from "webfontloader";

const DateInput = ({ inputConfig, currentState }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Work Sans"],
      },
    });
  }, []);

  const width = inputConfig.type === "text" ? "w-10 ml-5" : "w-40 md:w-72";

  return (
    <Field
      name={inputConfig.key}
      type={inputConfig.type}
      inputConfig={inputConfig}
    >
      {({ input, inputConfig }) => (
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
          <input {...input} className={`my-4 text-center ${width}`} />
        </div>
      )}
    </Field>
  );
};

export default DateInput;
