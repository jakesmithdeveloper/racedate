import React, { useEffect, useState } from "react";
import { Field } from "react-final-form";
import WebFont from "webfontloader";

const DateInput = ({ inputConfig, form }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Work Sans"],
      },
    });
  }, []);

  useState(() => {
    form.reset();
  }, [form]);

  const width = inputConfig.type === "number" ? "ml-5 w-16" : "w-40 md:w-72";

  const validateRaceDate = (value, allValues) => {
    if (!value || !allValues.startDate) {
      return undefined;
    }

    return new Date(value) > new Date(allValues.startDate)
      ? undefined
      : "race date must be after start date";
  };

  return (
    <Field
      name={inputConfig.key}
      type={inputConfig.type}
      inputConfig={inputConfig}
      validate={inputConfig.key === "raceDate" ? validateRaceDate : null}
    >
      {({ input, inputConfig, meta }) => (
        <div className="w-full text-center">
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
            <input
              {...input}
              className={`my-4 text-center ${width} ${
                meta.error && meta.touched ? "text-red-600" : ""
              }`}
            />
          </div>
          {meta.error && meta.touched ? (
            <span className="text-white-cream bg-red-400 text-xl rounded-md p-1">
              {meta.error}
            </span>
          ) : null}
        </div>
      )}
    </Field>
  );
};

export default DateInput;
