import React from "react";
import Button from "@/components/Atoms/Button";
import Img from "@/components/Atoms/Img";
import { SearchPlaceActionsProps } from "@/interfaces/interfaces";

import currentLocationIcon from "../../../public/svg/location-current-solid.svg";

function SearchPlaceActions({ setSearching }: SearchPlaceActionsProps) {
  return (
    <div className="flex flex-row items-center justify-between">
      <Button
        className="bg-gray py-1 px-4 shadow-lg"
        onClick={() => setSearching(true)}
      >
        Search for places
      </Button>
      <Button className="flex justify-center rounded-full bg-gray p-[0.3rem] shadow-lg">
        <Img
          className="relative h-6 w-6"
          src={currentLocationIcon}
          alt="Current location icon"
        />
      </Button>
    </div>
  );
}

export default SearchPlaceActions;
