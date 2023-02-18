import React from "react";
import SearchPlaceActions from "@/components/Molecules/SearchPlaceActions";
import TodayWeatherInfo from "@/components/Molecules/TodayWeatherInfo";
import { MenuWeatherInfoProps } from "@/interfaces/interfaces";

function MenuWeatherInfo({
  setSearching,
  loading,
  data,
}: MenuWeatherInfoProps) {
  return (
    <div className="flex h-full flex-col space-y-14 xl:space-y-20">
      <SearchPlaceActions {...{ setSearching }} />
      <TodayWeatherInfo loading={loading} data={data} />
    </div>
  );
}

export default MenuWeatherInfo;
