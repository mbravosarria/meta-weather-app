import React from "react";
import { Acme } from "@next/font/google";
import UnitSwitcher from "@/components/Molecules/UnitSwitcher";
import WeekWeather from "@/components/Organisms/WeekWeather";
import TodayHighlights from "@/components/Organisms/TodayHighlights";
import P from "@/components/Atoms/P";
import Img from "@/components/Atoms/Img";
import alertIcon from "../../../public/svg/alert-triangle.svg";
import { MainContextProps } from "@/interfaces/interfaces";

const acme = Acme({
  subsets: ["latin"],
  weight: "400",
});

function MainContent({
  todayLoading,
  todayData,
  dailyLoading,
  dailyData,
}: MainContextProps) {
  return (
    <div className={acme.className}>
      <div className="flex h-auto flex-col justify-between space-y-8 bg-purple-dark py-5 px-4 lg:h-screen lg:space-y-0 xl:py-10 xl:px-40">
        <div
          className={`flex flex-row ${
            !todayLoading && !todayData ? "justify-between" : "justify-end"
          }`}
        >
          {!todayLoading && !todayData && (
            <div className="flex flex-row items-center justify-center space-x-2 bg-purple px-4">
              <Img
                className="relative h-14 w-14 lg:h-6 lg:w-6"
                src={alertIcon}
                alt="Alert icon"
              />
              <P className="font-bold text-yellow">
                Weatherbit API response with: Daily call limit exceeded
              </P>
            </div>
          )}
          <div className="hidden justify-end xl:flex">
            <UnitSwitcher />
          </div>
        </div>
        <WeekWeather loading={dailyLoading} data={dailyData} />
        <TodayHighlights loading={todayLoading} data={todayData} />
        <P className="text-center text-gray">
          created by <span className="text-white underline">mbravosarria</span>{" "}
          - devChallenges.io
        </P>
      </div>
    </div>
  );
}

export default MainContent;
