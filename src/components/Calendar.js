import React from "react";
import {
  format,
  addDays,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  endOfWeek,
} from "date-fns";

import { CalendarHeader } from "./CalendarHeader";
import { Days } from "./Days";
import { Cell } from "./Cell";

const Calendar = ({ blockEndDate, blockStartDate, currentMonth }) => {
  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day.getTime() <= endDate.getTime()) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        days.push(
          <Cell
            day={day}
            monthStart={monthStart}
            blockStartDate={blockStartDate}
            blockEndDate={blockEndDate}
            formattedDate={formattedDate}
          />
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div
          className=" m-0 p-0 flex flex-row flex-wrap w-full border-b border-solid border-gray-900"
          key={day}
        >
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  };

  return (
    <div className="calendar block relative pb-4 px-4 my-4 w-full rounded-xl bg-white-cream">
      <CalendarHeader currentMonth={currentMonth} />
      <Days currentMonth={currentMonth} />
      {renderCells()}
    </div>
  );
};

export default Calendar;
