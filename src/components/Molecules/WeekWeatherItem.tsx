import React from "react";
import P from "@/components/Atoms/P";
import Img from "@/components/Atoms/Img";
import nodataIcon from "../../../public/svg/nodata.svg";
import { WeekWeatherItemProps } from "@/interfaces/interfaces";
import SkeletonMui from "../Atoms/SkeletonMui";

function WeekWeatherItem({ loading }: WeekWeatherItemProps) {
  return (
    <div className="mb-8 flex flex-col items-center space-y-5 bg-purple py-2 px-6 lg:mb-0 lg:w-1/6">
      {loading ? (
        <SkeletonMui variant="rectangular" width={120} height={30} />
      ) : (
        <P className="text-xl font-bold">Tomorrow</P>
      )}
      {loading ? (
        <SkeletonMui variant="circular" width={80} height={80} />
      ) : (
        <Img
          className="relative h-20 w-20"
          src={nodataIcon}
          alt="Weather Icon"
        />
      )}
      <div className="flex w-full flex-row justify-between">
        {loading ? (
          <SkeletonMui variant="rectangular" width={140} height={30} />
        ) : (
          <>
            <P className="text-lg">16°C</P>
            <P className="text-lg text-gray">11°C</P>
          </>
        )}
      </div>
    </div>
  );
}

export default WeekWeatherItem;
