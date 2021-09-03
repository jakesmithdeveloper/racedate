import React from "react";
import { format } from "date-fns";

export const CalendarHeader = ({ currentMonth }) => {
  const dateFormat = "MMMM yyyy";

  return (
    <div className="w-full py-4 border-b border-solid border-gray-700 m-0 p-0 flex flex-row flex-wrap">
      <div className="flex-grow max-w-full content-center text-center font-bold">
        <span>{format(currentMonth, dateFormat)}</span>
      </div>
    </div>
  );
};
