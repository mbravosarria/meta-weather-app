import React from "react";
import Img from "@/components/Atoms/Img";
import P from "@/components/Atoms/P";
import nodataImg from "../../../public/svg/nodata.svg";
import locationIcon from "../../../public/svg/location.svg";
import { TodayWeatherInfoProps } from "@/interfaces/interfaces";
import SkeletonMui from "../Atoms/SkeletonMui";
import { useUnit } from "@/context/unit/unit.context";
import { stringToDate } from "@/helper/date";

function TodayWeatherInfo({ loading, data }: TodayWeatherInfoProps) {
  const { unit } = useUnit();

  return (
    <div className="flex h-full flex-col items-center justify-between">
      {loading ? (
        <SkeletonMui variant="circular" width={200} height={200} />
      ) : (
        <Img
          className="relative h-52 w-52"
          src={data ? `/icons/${data[0]?.weather.icon}.png` : nodataImg}
          alt="No Data Icon"
        />
      )}
      <div className="flex flex-row items-end">
        {loading ? (
          <SkeletonMui variant="rectangular" width={100} height={100} />
        ) : (
          <>
            <P className="text-8xl font-bold">{data ? data[0].temp : "--"}</P>
            <P className="text-4xl font-bold text-gray">
              °{unit == "" ? "C" : "F"}
            </P>
          </>
        )}
      </div>
      {loading ? (
        <SkeletonMui variant="rectangular" width={150} height={40} />
      ) : (
        <P className="text-4xl font-bold text-gray">
          {data ? data[0].weather.description : "---- ----"}
        </P>
      )}
      <div className="flex flex-col items-center space-y-4 text-gray">
        {loading ? (
          <SkeletonMui variant="rectangular" width={120} height={20} />
        ) : (
          <P>
            Today -{" "}
            {data
              ? stringToDate(data[0].datetime.split(":")[0])
              : "---, --- --"}
          </P>
        )}
        {loading ? (
          <SkeletonMui variant="rectangular" width={100} height={20} />
        ) : (
          <div className="flex flex-row items-center space-x-1">
            <Img
              className="relative h-4 w-4"
              src={locationIcon}
              alt="Location Icon"
            />
            <P>{data ? data[0].city_name : "----"}</P>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodayWeatherInfo;
