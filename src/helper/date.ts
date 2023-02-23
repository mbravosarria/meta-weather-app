var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const stringToDate = (str: string) => {
  console.log("🚀 ~ file: date.ts:19 ~ stringToDate ~ str:", str);
  const date = new Date(str);
  console.log("🚀 ~ file: date.ts:21 ~ stringToDate ~ date:", date);
  return `${days[date.getDay()]}, ${date.getDate() + 1} ${
    months[date.getMonth()]
  }`;
};
