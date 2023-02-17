import React from "react";
import P from "../Atoms/P";
import { CommonHighlightItemProps } from "@/configurations/interfaces";

function CommonHighlightItem({ title, value, unit }: CommonHighlightItemProps) {
  return (
    <div className="flex flex-col items-center space-y-2 bg-purple py-4 lg:w-[49%] xl:space-y-4">
      <P className="text-lg text-gray xl:text-xl">{title}</P>
      <div className="flex flex-row items-center space-x-1">
        <P className="text-2xl font-bold xl:text-4xl">{value}</P>
        <P className="text-base xl:text-xl">{unit}</P>
      </div>
    </div>
  );
}

export default CommonHighlightItem;
