import React from "react";
import P from "@/components/Atoms/P";
import WindStatus from "@/components/Molecules/WindStatus";
import Humidity from "@/components/Molecules/Humidity";
import CommonHighlightItem from "@/components/Molecules/CommonHighlightItem";
import { TodayHighlightsProps } from "@/interfaces/interfaces";
import { useUnit } from "@/context/unit/unit.context";

function TodayHighlights({ loading, data }: TodayHighlightsProps) {
  const { unit } = useUnit();

  return (
    <div className="flex flex-col space-y-3 mt-16">
      <P className="text-xl font-bold xl:text-2xl">Today&apos;s Highlights</P>
      <div className="flex flex-col justify-between space-y-2 lg:flex-row lg:space-y-0">
        <WindStatus loading={loading} data={data} />
        <Humidity loading={loading} data={data} />
      </div>
      <div className="flex flex-col justify-between space-y-2 lg:flex-row lg:space-y-0">
        <CommonHighlightItem
          title="Visibility"
          value={data ? data[0].vis : "--"}
          unit={unit == "" ? "km" : "miles"}
          loading={loading}
        />
        <CommonHighlightItem
          title="Air Pressure"
          value={data ? data[0].pres : "----"}
          unit="mb"
          loading={loading}
        />
      </div>
    </div>
  );
}

export default TodayHighlights;
