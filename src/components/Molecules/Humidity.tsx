import React from "react";
import P from "@/components/Atoms/P";
import PercentBar from "@/components/Atoms/PercentBar";

function Humidity() {
  return (
    <div className="flex flex-col items-center space-y-2 bg-purple py-4 lg:w-[49%] xl:space-y-4">
      <P className="text-lg text-gray xl:text-xl">Humidity</P>
      <div className="flex flex-row items-center space-x-1">
        <P className="text-2xl font-bold xl:text-4xl">84</P>
        <P className="text-base xl:text-xl">%</P>
      </div>
      <PercentBar percent={75} />
    </div>
  );
}

export default Humidity;
