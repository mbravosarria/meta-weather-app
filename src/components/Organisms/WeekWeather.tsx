import React from "react";
import WeekWeatherItem from "@/components/Molecules/WeekWeatherItem";
import { WeekWeatherProps } from "@/interfaces/interfaces";

function WeekWeather({ loading, data }: WeekWeatherProps) {
  const weekData = () => {
    const answer = [];

    for (let i = 1; i < 6; i++) {
      answer.push(data[i]);
    }

    return answer;
  };

  return (
    <div className="flex flex-wrap justify-between px-5 lg:flex-row lg:px-0 pb-4">
      {data &&
        weekData().map((item: any) => (
          <WeekWeatherItem
            key={item.valid_date}
            loading={loading}
            data={item}
          />
        ))}
      {!data && (
        <>
          <WeekWeatherItem loading={loading} data={undefined} />
          <WeekWeatherItem loading={loading} data={undefined} />
          <WeekWeatherItem loading={loading} data={undefined} />
          <WeekWeatherItem loading={loading} data={undefined} />
          <WeekWeatherItem loading={loading} data={undefined} />
        </>
      )}
    </div>
  );
}

export default WeekWeather;
