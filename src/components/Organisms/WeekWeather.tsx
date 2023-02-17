import React from "react";
import WeekWeatherItem from "@/components/Molecules/WeekWeatherItem";

function WeekWeather() {
  return (
    <div className="flex flex-wrap justify-between px-5 lg:flex-row lg:px-0">
      <WeekWeatherItem />
      <WeekWeatherItem />
      <WeekWeatherItem />
      <WeekWeatherItem />
      <WeekWeatherItem />
    </div>
  );
}

export default WeekWeather;
