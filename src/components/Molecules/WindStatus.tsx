import React from "react";
import P from "@/components/Atoms/P";
import Img from "@/components/Atoms/Img";
import arrowLeftDownIcon from "../../../public/svg/arrow-left-down.svg";

function WindStatus() {
  return (
    <div className="flex flex-col items-center space-y-3 bg-purple py-4 lg:w-[49%]">
      <P className="text-lg text-gray xl:text-xl">Wind status</P>
      <div className="flex flex-row items-center space-x-1">
        <P className="text-2xl font-bold xl:text-4xl">7</P>
        <P className="text-base xl:text-xl">mph</P>
      </div>
      <div className="flex flex-row items-center space-x-1">
        <div className="rounded-full bg-gray p-1">
          <Img
            className="relative h-3 w-3 rounded-full bg-gray xl:h-5 xl:w-5"
            src={arrowLeftDownIcon}
            alt="Location Current Icon"
          />
        </div>
        <P className="text-sm text-gray xl:text-base">WSW</P>
      </div>
    </div>
  );
}

export default WindStatus;
