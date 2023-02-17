import React from "react";
import SearchForm from "../Molecules/SearchForm";
import SearchItem from "../Molecules/SearchItem";
import { MenuSearchPlaceProps } from "@/configurations/interfaces";

function MenuSearchPlace({ setSearching }: MenuSearchPlaceProps) {
  return (
    <div className="flex flex-col space-y-8">
      <SearchForm {...{ setSearching }} />
      <div className="flex flex-col space-y-2">
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </div>
    </div>
  );
}

export default MenuSearchPlace;
