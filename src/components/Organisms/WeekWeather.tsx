import React from "react";
import WeekWeatherItem from "@/components/Molecules/WeekWeatherItem";
import { WeekWeatherProps } from "@/interfaces/interfaces";

function WeekWeather({ loading }: WeekWeatherProps) {
  return (
    <div className="flex flex-wrap justify-between px-5 lg:flex-row lg:px-0">
      <WeekWeatherItem loading={loading} />
      <WeekWeatherItem loading={loading} />
      <WeekWeatherItem loading={loading} />
      <WeekWeatherItem loading={loading} />
      <WeekWeatherItem loading={loading} />
    </div>
  );
}

export default WeekWeather;
