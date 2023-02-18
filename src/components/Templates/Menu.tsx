import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Acme } from "@next/font/google";
import { MenuProps } from "@/interfaces/interfaces";

const acme = Acme({
  subsets: ["latin"],
  weight: "400",
});

const MenuWeatherInfo = dynamic(
  () => import("@/components/Organisms/MenuWeatherInfo")
);
const MenuSearchPlace = dynamic(
  () => import("@/components/Organisms/MenuSearchPlace")
);

function Menu({ loading, data }: MenuProps) {
  const [searching, setSearching] = useState(false);

  return (
    <div className={acme.className}>
      <div className="h-screen bg-purple py-5 px-2 xl:p-10">
        {searching ? (
          <MenuSearchPlace {...{ setSearching }} />
        ) : (
          <MenuWeatherInfo {...{ setSearching, loading, data }} />
        )}
      </div>
    </div>
  );
}

export default Menu;
