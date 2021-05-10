import React from "react";

import Calendar from "./Calendar";

const Calendars = ({ startDate = new Date(), raceDate = new Date() }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Calendar
        blockStartDate={startDate}
        raceDate={raceDate}
        currentMonth={new Date(startDate)}
      />
      <Calendar
        blockStartDate={startDate}
        raceDate={raceDate}
        currentMonth={new Date(2021, 5, 1)}
      />
      <Calendar
        blockStartDate={startDate}
        raceDate={raceDate}
        currentMonth={new Date(2021, 6, 1)}
      />
      <Calendar
        blockStartDate={startDate}
        raceDate={raceDate}
        currentMonth={new Date(2021, 7, 1)}
      />
    </div>
  );
};

export default Calendars;
