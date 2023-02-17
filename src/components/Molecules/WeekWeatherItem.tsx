import React from "react";
import P from "@/components/Atoms/P";
import Img from "@/components/Atoms/Img";
import nodataIcon from "../../../public/svg/nodata.svg";

function WeekWeatherItem() {
  return (
    <div className="mb-8 flex flex-col items-center space-y-5 bg-purple py-2 px-6 lg:mb-0 lg:w-1/6">
      <P className="text-xl font-bold">Tomorrow</P>
      <Img className="relative h-20 w-20" src={nodataIcon} alt="Weather Icon" />
      <div className="flex w-full flex-row justify-between">
        <P className="text-lg">16°C</P>
        <P className="text-lg text-gray">11°C</P>
      </div>
    </div>
  );
}

export default WeekWeatherItem;
