import React from "react";
import { startOfWeek, format, addDays } from "date-fns";

export const Days = ({ currentMonth }) => {
  const dateFormat = "EEEEEE";
  const days = [];

  let startDate = startOfWeek(currentMonth);

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="flex-grow max-w-full content-center text-center" key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    );
  }

  return (
    <div className="uppercase font-normal text-gray-800 text-xs py-3 border-b border-gray-800 m-0 p-0 flex flex-row flex-wrap w-full mb-4">
      {days}
    </div>
  );
};
