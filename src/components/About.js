import React from "react";

const About = () => {
  return (
    <div className="mt-10  w-full max-w-sm md:max-w-lg text-foreground-blue">
      <h2 className="text-4xl font-bold mb-2">About</h2>

      <p className="text-xl">
        RaceDate is a very simple calculator with the goal of calculating the
        following
      </p>
      <ul>
        <li className="font-bold mt-5 text-xl">
          Training Block Length (in weeks)
        </li>
        <p className="text-lg">
          Training block length is computed with your training{" "}
          <span className="font-semibold">start date</span> and your{" "}
          <span className="font-semibold">race date</span>
        </p>
        <li className="font-bold mt-5 text-xl">Race Date</li>
        <p className="text-lg">
          Race date is computed with your{" "}
          <span className="font-semibold">training start date</span> and{" "}
          <span className="font-semibold">
            training block length (in weeks)
          </span>
        </p>
        <li className="font-bold mt-5 text-xl">Training Start Date</li>
        <p>
          Training start date is computed with your{" "}
          <span className="font-semibold">race date</span> and{" "}
          <span className="font-semibold">training block length</span>
        </p>
      </ul>
    </div>
  );
};

export default About;
