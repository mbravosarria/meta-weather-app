import React from "react";
import Img from "@/components/Atoms/Img";
import Input from "@/components/Atoms/Input";
import Button from "@/components/Atoms/Button";
import { AxiosLocalInstance } from "@/configurations/axios";
import { SearchFormProps } from "@/interfaces/interfaces";

import closeIcon from "../../../public/svg/close.svg";
import searchIcon from "../../../public/svg/search.svg";

function SearchForm({ setSearching, setCities, setLoading }: SearchFormProps) {
  const handleChange = async (e: Event) => {
    setLoading(true);
    const target = e.target as HTMLInputElement;
    await AxiosLocalInstance.get(`/api/world-cities/${target.value}`)
      .then((res) => {
        setCities(res.data);
        setLoading(false);
      })
      .catch((_) => clearFilter());
  };

  const clearFilter = () => {
    setLoading(false);
    setCities([]);
  };

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
        <div className="flex w-full flex-row items-center justify-between border border-white bg-purple p-2">
          <Img
            className="relative m-auto h-5 w-5 hover:cursor-pointer"
            src={searchIcon}
            alt="Close Icon"
          />
          <Input
            type="text"
            className="w-5/6 bg-purple focus-visible:outline-none"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
