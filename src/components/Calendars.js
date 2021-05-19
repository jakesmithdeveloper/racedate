import React from "react";
import { differenceInCalendarMonths, addMonths, addMinutes } from "date-fns";

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
          key={i}
          blockStartDate={addMinutes(
            dates.startDate,
            dates.startDate.getTimezoneOffset()
          )}
          blockEndDate={addMinutes(
            dates.raceDate,
            dates.raceDate.getTimezoneOffset()
          )}
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
