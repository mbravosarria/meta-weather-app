import React from "react";
import P from "@/components/Atoms/P";
import WindStatus from "@/components/Molecules/WindStatus";
import Humidity from "@/components/Molecules/Humidity";
import CommonHighlightItem from "@/components/Molecules/CommonHighlightItem";

function TodayHighlights() {
  return (
    <div className="flex flex-col space-y-3 xl:space-y-5">
      <P className="text-xl font-bold xl:text-2xl">Today&apos;s Highlights</P>
      <div className="flex flex-col justify-between space-y-3 lg:flex-row lg:space-y-0">
        <WindStatus />
        <Humidity />
      </div>
      <div className="flex flex-col justify-between space-y-3 lg:flex-row lg:space-y-0">
        <CommonHighlightItem title="Visibility" value="6,4" unit="miles" />
        <CommonHighlightItem title="Air Pressure" value="998" unit="mb" />
      </div>
    </div>
  );
}

export default TodayHighlights;
