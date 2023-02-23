export const setWindDirectionIcon = (wind_dir: string) => {
  switch (wind_dir) {
    case "N":
      return "arrow-up";
    case "NNE" || "NE" || "ENE":
      return "arrow-right-up";
    case "E":
      return "arrow-right";
    case "ESE" || "SE" || "SSE":
      return "arrow-right-down";
    case "S":
      return "arrow-down";
    case "SSW" || "SW" || "WSW":
      return "arrow-left-down";
    case "W":
      return "arrow-left";
    case "WNW" || "NW" || "NNW":
      return "arrow-up";

    default:
      return "question";
  }
};
