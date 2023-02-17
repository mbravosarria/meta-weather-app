import React from "react";
import Img from "@/components/Atoms/Img";
import P from "@/components/Atoms/P";
import nodataImg from "../../../public/svg/nodata.svg";
import locationIcon from "../../../public/svg/location.svg";

function TodayWeatherInfo() {
  return (
    <div className="flex h-full flex-col items-center justify-between">
      <Img className="relative h-52 w-52" src={nodataImg} alt="No Data Icon" />
      <div className="flex flex-row items-end">
        <P className="text-8xl font-bold">15</P>
        <P className="text-4xl font-bold text-gray">°C</P>
      </div>
      <P className="text-4xl font-bold text-gray">Shower</P>
      <div className="flex flex-col items-center space-y-4 text-gray">
        <P>Today - Fri, 5 Jun</P>
        <div className="flex flex-row items-center space-x-1">
          <Img
            className="relative h-4 w-4"
            src={locationIcon}
            alt="Location Icon"
          />
          <P>Helsinki</P>
        </div>
      </div>
    </div>
  );
}

export default TodayWeatherInfo;
