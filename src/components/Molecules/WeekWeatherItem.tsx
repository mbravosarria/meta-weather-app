import React from "react";
import P from "@/components/Atoms/P";
import Img from "@/components/Atoms/Img";
import nodataIcon from "../../../public/svg/nodata.svg";
import { WeekWeatherItemProps } from "@/interfaces/interfaces";
import SkeletonMui from "../Atoms/SkeletonMui";
import { useUnit } from "@/context/unit/unit.context";
import { stringToDate } from "@/helper/date";

function WeekWeatherItem({ loading, data }: WeekWeatherItemProps) {
  const { unit } = useUnit();

  return (
    <div className="mb-8 flex flex-col items-center space-y-5 bg-purple py-2 px-6 lg:mb-0 lg:w-1/6">
      {loading ? (
        <SkeletonMui variant="rectangular" width={120} height={30} />
      ) : (
        <P className="text-lg font-bold">
          {data ? stringToDate(data?.datetime) : "---, -- ---"}
        </P>
      )}
      {loading ? (
        <SkeletonMui variant="circular" width={80} height={80} />
      ) : (
        <Img
          className="relative h-20 w-20"
          src={data ? `/icons/${data?.weather.icon}.png` : nodataIcon}
          alt="Weather Icon"
        />
      )}
      <div className="flex w-full flex-row justify-between">
        {loading ? (
          <SkeletonMui variant="rectangular" width={140} height={30} />
        ) : (
          <>
            <P className="text-lg">
              {data ? data?.max_temp : "--"}°{unit == "" ? "C" : "F"}
            </P>
            <P className="text-lg text-gray">
              {data ? data?.min_temp : "--"}°{unit == "" ? "C" : "F"}
            </P>
          </>
        )}
      </div>
    </div>
  );
}

export default WeekWeatherItem;
