const days = {
  0: "Sun",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const computeRaceDate = ({ startDate, block }) => {
  const raceDate = new Date(Date.parse(startDate));

  raceDate.setUTCDate(raceDate.getUTCDate() + block * 7);

  return parseDateToString(raceDate);
};

export const computeStartDate = ({ raceDate, block }) => {
  const startDate = new Date(Date.parse(raceDate));
  startDate.setUTCDate(startDate.getUTCDate() - block * 7);
  return parseDateToString(startDate);
};

export const computeTrainingBlockLength = ({ startDate, raceDate }) => {
  const start = new Date(Date.parse(startDate));
  const end = new Date(Date.parse(raceDate));

  const timeDifference = end.getTime() - start.getTime();
  const weekDifference = Math.ceil(timeDifference / (1000 * 3600 * 24 * 7));
  return `${weekDifference} ${weekDifference > 1 ? "weeks" : "week"}`;
};

export const parseInput = (values) => {
  const selectedOptions = Object.keys(values);
  const labels = ["raceDate", "startDate", "block"];

  return labels.filter((label) => !selectedOptions.includes(label))[0];
};

const parseDateToString = (date) => {
  return `${days[date.getUTCDay()]}, ${
    months[date.getUTCMonth()]
  } ${date.getUTCDate()} ${date.getFullYear()}`;
};

export const parseResult = (toCompute, values) => {
  switch (toCompute) {
    case "raceDate":
      return computeRaceDate(values);

    case "startDate":
      return computeStartDate(values);

    case "block":
      return computeTrainingBlockLength(values);

    default:
      break;
  }
};
