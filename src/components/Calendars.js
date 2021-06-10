import React from "react";
import { differenceInCalendarMonths, addMonths, addMinutes } from "date-fns";

import Calendar from "./Calendar";

const Calendars = ({ dates = {} }) => {
  const renderCalendars = () => {
    let cals = [];

    const blockStartDate = addMinutes(
      dates.startDate,
      dates.startDate.getTimezoneOffset()
    );
    const blockEndDate = addMinutes(
      dates.raceDate,
      dates.raceDate.getTimezoneOffset()
    );

    for (
      let i = 0;
      i < differenceInCalendarMonths(blockEndDate, blockStartDate) + 1;
      i++
    ) {
      cals.push(
        <Calendar
          key={i}
          blockStartDate={blockStartDate}
          blockEndDate={blockEndDate}
          currentMonth={addMonths(dates.startDate, i)}
        />
      );
    }

    return cals;
  };

  return (
    <div className="w-full flex flex-col items-center mb-20">
      {renderCalendars()}
    </div>
  );
};

export default Calendars;
