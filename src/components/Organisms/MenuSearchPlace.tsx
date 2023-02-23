import React, { useEffect, useState } from "react";
import SearchForm from "../Molecules/SearchForm";
import SearchItem from "../Molecules/SearchItem";
import { MenuSearchPlaceProps, WorldCity } from "@/interfaces/interfaces";
import SkeletonMui from "@/components/Atoms/SkeletonMui";

function MenuSearchPlace({ setSearching }: MenuSearchPlaceProps) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex h-full flex-col space-y-8">
      <SearchForm {...{ setSearching, setCities, setLoading }} />
      <div className="flex flex-col space-y-2 overflow-hidden">
        {loading ? (
          <>
            <SkeletonMui variant="rectangular" width={500} height={60} />
            <SkeletonMui variant="rectangular" width={500} height={60} />
            <SkeletonMui variant="rectangular" width={500} height={60} />
            <SkeletonMui variant="rectangular" width={500} height={60} />
            <SkeletonMui variant="rectangular" width={500} height={60} />
            <SkeletonMui variant="rectangular" width={500} height={60} />
            <SkeletonMui variant="rectangular" width={500} height={60} />
            <SkeletonMui variant="rectangular" width={500} height={60} />
          </>
        ) : (
          <>
            {cities.map((item: WorldCity) => (
              <SearchItem
                key={item.city_id}
                code={item.city_id.toString()}
                text={`${item.city_name}, ${item.country_code}`}
                {...{ setSearching }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default MenuSearchPlace;
