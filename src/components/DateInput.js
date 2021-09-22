import React, { useEffect } from "react";
import { Field } from "react-final-form";
import WebFont from "webfontloader";

const DateInput = ({ inputConfig }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Work Sans"],
      },
    });
  }, []);

  const width = inputConfig.type === "number" ? "ml-5 w-16" : "w-40 md:w-72";

  const validateRaceDate = (value, allValues) => {
    console.log(value);
    console.log(allValues);
  };

  return (
    <Field
      name={inputConfig.key}
      type={inputConfig.type}
      inputConfig={inputConfig}
      validate={inputConfig.key === "raceDate" ? validateRaceDate : null}
    >
      {({ input, inputConfig }) => (
        <div
          style={{ fontFamily: "Work Sans" }}
          className={`font-thin w-full flex ${
            inputConfig.type === "number" ? "" : "justify-between"
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
