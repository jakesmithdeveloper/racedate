import React from "react";
import {
  format,
  addDays,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isEqual,
  compareAsc,
  startOfDay,
} from "date-fns";

const Calendar = ({ blockEndDate, blockStartDate, currentMonth }) => {
  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="w-full py-4 border-b border-solid border-gray-700 m-0 p-0 flex flex-row flex-wrap">
        <div className="flex-grow max-w-full content-center text-center font-bold">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EEEEEE";
    const days = [];

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          className="flex-grow max-w-full content-center text-center"
          key={i}
        >
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

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startOfDay(startDate);
    let formattedDate = "";

    while (day.getTime() <= endDate.getTime()) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        days.push(
          <div
            className={` flex-grow-0 square border-r border-solid border-gray-100 overflow-hidden cursor-pointer rounded-sm ${
              !isSameMonth(day, monthStart)
                ? "pointer-events-none text-gray-400"
                : compareAsc(day, startOfDay(blockStartDate)) >= 0 &&
                  compareAsc(day, startOfDay(blockEndDate)) <= 0
                ? isEqual(startOfDay(day), startOfDay(blockEndDate))
                  ? "bg-yellow-400 text-gray-100"
                  : "bg-green-700 text-gray-100"
                : ""
            }`}
            key={day}
          >
            <span className="absolute text-sm top-3 right-3 font-bold">
              {formattedDate}
            </span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div
          className=" m-0 p-0 flex flex-row flex-wrap w-full border-b border-solid border-gray-100"
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
    <div className="calendar block relative pb-4 px-4 my-4 w-full rounded-xl">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
