import React from "react";
import { differenceInCalendarMonths, addMonths } from "date-fns";

import Calendar from "./Calendar";

const Calendars = ({ dates = {} }) => {
  const renderCalendars = () => {
    let cals = [];

    const blockStartDate = dates.startDate;

    const blockEndDate = dates.raceDate;

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
          timeTravel={false}
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
