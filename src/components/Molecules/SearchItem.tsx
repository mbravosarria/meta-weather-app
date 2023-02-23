import React, { useState } from "react";
import P from "@/components/Atoms/P";
import Img from "@/components/Atoms/Img";
import { SearchItemProps } from "@/interfaces/interfaces";
import { useCity } from "@/context/city/city.context";

import rightArrowIcon from "../../../public/svg/right-arrow.svg";

function SearchItem({ text, code, setSearching }: SearchItemProps) {
  const { setCity } = useCity();
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-row items-center justify-between border border-purple p-4 hover:cursor-pointer hover:border-gray"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setCity({ code });
        setSearching && setSearching(false);
      }}
    >
      <P>{text}</P>
      {hover && (
        <Img
          className="relative h-4 w-4"
          src={rightArrowIcon}
          alt="Right Arrow Icon"
        />
      )}
    </div>
  );
}

export default SearchItem;
