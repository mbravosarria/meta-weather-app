import React from "react";
import SearchPlaceActions from "@/components/Molecules/SearchPlaceActions";
import TodayWeatherInfo from "@/components/Molecules/TodayWeatherInfo";
import { MenuWeatherInfoProps } from "@/configurations/interfaces";

function MenuWeatherInfo({ setSearching }: MenuWeatherInfoProps) {
  return (
    <div className="flex h-full flex-col space-y-14 xl:space-y-20">
      <SearchPlaceActions {...{ setSearching }} />
      <TodayWeatherInfo />
    </div>
  );
}

export default MenuWeatherInfo;
