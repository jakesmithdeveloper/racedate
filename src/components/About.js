import React from "react";

const About = () => {
  return (
    <div className="mt-10  w-full max-w-lg text-foreground-blue">
      <h2 className="text-2xl font-bold mb-2">About</h2>

      <p className="">
        RaceDate is a very simple calculator with the goal of calculating the
        following
      </p>
      <ul>
        <li className="font-bold mt-5">Training Block Length (in weeks)</li>
        <p>
          Training block length is computed with your training{" "}
          <span className="font-semibold">start date</span> and your{" "}
          <span className="font-semibold">race date</span>
        </p>
        <li className="font-bold mt-5">Race Date</li>
        <p>
          Race date is computed with your{" "}
          <span className="font-semibold">training start date</span> and{" "}
          <span className="font-semibold">
            training block length (in weeks)
          </span>
        </p>
        <li className="font-bold mt-5">Training Start Date</li>
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
