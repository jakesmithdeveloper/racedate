import React from "react";
import { differenceInCalendarMonths, addMonths } from "date-fns";

import Calendar from "./Calendar";

const Calendars = ({ dates = {} }) => {
  const renderCalendars = () => {
    let cals = [];

    for (
      let i = 0;
      i < differenceInCalendarMonths(dates.raceDate, dates.startDate) + 1;
      i++
    ) {
      cals.push(
        <Calendar
          blockStartDate={dates.startDate}
          blockEndDate={dates.raceDate}
          currentMonth={addMonths(dates.startDate, i)}
        />
      );
    }

    return cals;
  };

  return (
    <div className="w-full flex flex-col items-center">{renderCalendars()}</div>
  );
};

export default Calendars;
