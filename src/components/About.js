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
      <p
        style={{ fontFamily: "Work Sans" }}
        className="tracking-wide text-left text-2xl"
      >
        <span className="font-extrabold text-black text-2xl">RaceDate </span>
        is a very simple calculator with the goal of calculating the following
      </p>
      <ul>
        <li
          style={{ fontFamily: "Fredoka One" }}
          className="font-bold mt-3 text-xl"
        >
          Training Block Length (in weeks)
        </li>
        <p style={{ fontFamily: "Work Sans" }} className="text-lg text-left">
          computed with your training{" "}
          <span className="font-semibold">start date</span> and your{" "}
          <span className="font-semibold">race date</span>
        </p>
        <li
          style={{ fontFamily: "Fredoka One" }}
          className="font-bold mt-3 text-xl"
        >
          Race Date
        </li>
        <p style={{ fontFamily: "Work Sans" }} className="text-lg">
          computed with your{" "}
          <span className="font-semibold">training start date</span> and{" "}
          <span className="font-semibold">training block length</span>
        </p>
        <li
          style={{ fontFamily: "Fredoka One" }}
          className="font-bold mt-3 text-xl"
        >
          Training Start Date
        </li>
        <p style={{ fontFamily: "Work Sans" }} className="text-lg">
          computed with your <span className="font-semibold">race date</span>{" "}
          and <span className="font-semibold">training block length</span>
        </p>
      </ul>
    </div>
  );
};

export default About;
