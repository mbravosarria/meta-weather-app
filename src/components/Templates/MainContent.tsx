import React from "react";
import { Acme } from "@next/font/google";
import UnitSwitcher from "@/components/Molecules/UnitSwitcher";
import WeekWeather from "@/components/Organisms/WeekWeather";
import TodayHighlights from "@/components/Organisms/TodayHighlights";
import P from "@/components/Atoms/P";

const acme = Acme({
  subsets: ["latin"],
  weight: "400",
});

function MainContent() {
  return (
    <div className={acme.className}>
      <div className="flex h-auto flex-col justify-between space-y-8 bg-purple-dark py-5 px-4 lg:h-screen lg:space-y-0 xl:py-10 xl:px-40">
        <div className="hidden justify-end xl:flex">
          <UnitSwitcher />
        </div>
        <WeekWeather />
        <TodayHighlights />
        <P className="text-center text-gray">
          created by <span className="text-white underline">mbravosarria</span>{" "}
          - devChallenges.io
        </P>
      </div>
    </div>
  );
}

export default MainContent;
