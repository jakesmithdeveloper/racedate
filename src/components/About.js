import React, { useEffect } from "react";
import WebFont from "webfontloader";

const About = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Work Sans", "Fredoka One"],
      },
    });
  }, []);

  return (
    <div className="mt-6 px-4 w-full max-w-sm md:max-w-lg text-black dark:text-gray-100">
      <hr className="border-gray-700 mb-1 md:mb-3" />
      <p
        style={{ fontFamily: "Work Sans" }}
        className="tracking-wide text-left text-2xl md:text-4xl"
      >
        <span className="font-extrabold text-black dark:text-gray-100 text-2xl md:text-4xl">
          RaceDate{" "}
        </span>
        is a very simple calculator with the goal of calculating the following
      </p>
      <hr className="border-gray-700 mt-1 md:mt-3" />
      <ul>
        <li
          style={{ fontFamily: "Fredoka One" }}
          className="font-bold mt-3 text-xl md:text-3xl md:font-light"
        >
          Training Block Length (in weeks)
        </li>
        <p
          style={{ fontFamily: "Work Sans" }}
          className="text-lg md:text-xl text-left"
        >
          computed with your training{" "}
          <span className="font-semibold">start date</span> and your{" "}
          <span className="font-semibold">race date</span>
        </p>
        <li
          style={{ fontFamily: "Fredoka One" }}
          className="font-bold mt-3 text-xl md:text-3xl"
        >
          Race Date
        </li>
        <p style={{ fontFamily: "Work Sans" }} className="text-lg md:text-xl">
          computed with your{" "}
          <span className="font-semibold">training start date</span> and{" "}
          <span className="font-semibold">training block length</span>
        </p>
        <li
          style={{ fontFamily: "Fredoka One" }}
          className="font-bold mt-3 text-xl md:text-3xl"
        >
          Training Start Date
        </li>
        <p style={{ fontFamily: "Work Sans" }} className="text-lg md:text-xl">
          computed with your <span className="font-semibold">race date</span>{" "}
          and <span className="font-semibold">training block length</span>
        </p>
      </ul>
    </div>
  );
};

export default About;
