import React from "react";
import Img from "@/components/Atoms/Img";
import Input from "@/components/Atoms/Input";
import Button from "@/components/Atoms/Button";
import { SearchFormProps } from "@/configurations/interfaces";
import { Acme } from "@next/font/google";

const acme = Acme({
  subsets: ["latin"],
  weight: "400",
});

import closeIcon from "../../../public/svg/close.svg";
import searchIcon from "../../../public/svg/search.svg";

function SearchForm({ setSearching }: SearchFormProps) {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex justify-end">
        <Img
          className="relative h-6 w-6 hover:cursor-pointer"
          src={closeIcon}
          alt="Close Icon"
          onClick={() => setSearching(false)}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex w-3/4 flex-row items-center justify-between border border-white bg-purple">
          <Img
            className="relative m-auto h-5 w-5 hover:cursor-pointer"
            src={searchIcon}
            alt="Close Icon"
          />
          <Input
            type="text"
            className="w-5/6 bg-purple focus-visible:outline-none"
            placeholder="Search"
          />
        </div>
        <Button className="border border-purple-light bg-purple-light p-2">
          Search
        </Button>
      </div>
    </div>
  );
}

export default SearchForm;
