import React from "react";
import P from "@/components/Atoms/P";
import Img from "@/components/Atoms/Img";
import arrowLeftDownIcon from "../../../public/svg/arrow-left-down.svg";
import { WindStatusProps } from "@/interfaces/interfaces";
import SkeletonMui from "../Atoms/SkeletonMui";

function WindStatus({ loading, data }: WindStatusProps) {
  return (
    <div className="flex flex-col items-center space-y-3 bg-purple py-4 lg:w-[49%]">
      {loading ? (
        <SkeletonMui variant="rectangular" width={140} height={35} />
      ) : (
        <P className="text-lg text-gray xl:text-xl">Wind status</P>
      )}
      <div className="flex flex-row items-center space-x-1">
        {loading ? (
          <SkeletonMui variant="rectangular" width={120} height={40} />
        ) : (
          <>
            <P className="text-2xl font-bold xl:text-4xl">
              {data ? data[0].wind_spd : "--"}
            </P>
            <P className="text-base xl:text-xl">m/s</P>
          </>
        )}
      </div>
      {loading ? (
        <SkeletonMui variant="rectangular" width={140} height={35} />
      ) : (
        <div className="flex flex-row items-center space-x-1">
          <div className="rounded-full bg-gray p-1">
            <Img
              className="relative h-3 w-3 rounded-full bg-gray xl:h-5 xl:w-5"
              src={arrowLeftDownIcon}
              alt="Location Current Icon"
            />
          </div>
          <P className="text-sm text-gray xl:text-base">
            {data ? data[0].wind_cdir : "---"}
          </P>
        </div>
      )}
    </div>
  );
}

export default WindStatus;
