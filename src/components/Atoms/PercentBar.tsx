import React from "react";
import { PercentBarProps } from "@/configurations/interfaces";

function PercentBar({ percent }: PercentBarProps) {
  return (
    <div className="flex w-[60%] flex-col">
      <div className="flex flex-row justify-between text-xs">
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div className="h-2 rounded-xl bg-white">
        <div
          className={`h-full rounded-xl bg-yellow`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="flex justify-end">
        <p className="text-xs">%</p>
      </div>
    </div>
  );
}

export default PercentBar;
