import React, { useEffect } from "react";
import { Form } from "react-final-form";
import WebFont from "webfontloader";

import DateInput from "./DateInput";

const Inputs = ({ states, currentState, onSubmit }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Work Sans"],
      },
    });
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full"
        >
          <div className="flex flex-col items-start w-full">
            {states.map((state) => {
              return state.label === currentState.label ? (
                ""
              ) : (
                <DateInput
                  key={state.label}
                  inputConfig={state}
                  currentState={currentState}
                />
              );
            })}
          </div>
          <div>
            <button
              style={{ fontFamily: "Work Sans" }}
              className="bg-gray-300 text-gray-900 font-light py-2 px-4 rounded inline-flex items-center mt-5 md:mt-16 mx-2 md:text-3xl"
            >
              Compute
            </button>
          </div>
        </form>
      )}
    </Form>
  );
};

export default Inputs;
