import React from "react";
import P from "@/components/Atoms/P";
import PercentBar from "@/components/Atoms/PercentBar";
import { HumidityProps } from "@/interfaces/interfaces";
import SkeletonMui from "../Atoms/SkeletonMui";

function Humidity({ loading, data }: HumidityProps) {
  return (
    <div className="flex flex-col items-center space-y-2 bg-purple py-4 lg:w-[49%]">
      {loading ? (
        <SkeletonMui variant="rectangular" width={140} height={35} />
      ) : (
        <P className="text-lg text-gray xl:text-xl">Humidity</P>
      )}
      <div className="flex flex-row items-center space-x-1">
        {loading ? (
          <SkeletonMui variant="rectangular" width={120} height={40} />
        ) : (
          <>
            <P className="text-2xl font-bold xl:text-4xl">
              {data ? data[0].rh : "--"}
            </P>
            <P className="text-base xl:text-xl">%</P>
          </>
        )}
      </div>
      {loading ? (
        <SkeletonMui variant="rounded" width={300} height={15} />
      ) : (
        <PercentBar percent={data ? data[0].rh : 0} />
      )}
    </div>
  );
}

export default Humidity;
