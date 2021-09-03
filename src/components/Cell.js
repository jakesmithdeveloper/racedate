import React from "react";

import { isSameMonth, isEqual, compareAsc } from "date-fns";

export const Cell = ({
  day,
  monthStart,
  blockStartDate,
  blockEndDate,
  formattedDate,
}) => {
  return (
    <div
      className={` flex-grow-0 square border-r border-solid border-gray-100 overflow-hidden cursor-pointer rounded-sm ${
        !isSameMonth(day, monthStart)
          ? "pointer-events-none text-gray-400"
          : compareAsc(day, blockStartDate) > 0 &&
            compareAsc(day, blockEndDate) <= 0
          ? isEqual(day, blockEndDate)
            ? "bg-red-400 text-gray-100 font-bold"
            : "bg-green-700 text-gray-100"
          : isEqual(day, blockStartDate)
          ? "bg-blue-400 text-gray-100 font-bold"
          : ""
      }`}
      key={day}
    >
      <span className="absolute text-sm top-3 right-3 font-bold">
        {formattedDate}
      </span>

      {isEqual(day, blockStartDate) ? (
        <span className="w-full h-full absolute text-center halfway tracking-wider">
          Start Day
        </span>
      ) : (
        ""
      )}

      {isEqual(day, blockEndDate) ? (
        <span className="w-full h-full absolute text-center halfway tracking-wider">
          Race Day
        </span>
      ) : (
        ""
      )}
    </div>
  );
};
