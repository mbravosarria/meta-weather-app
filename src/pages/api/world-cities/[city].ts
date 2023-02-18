import type { NextApiRequest, NextApiResponse } from "next";
import { WorldCity } from "@/interfaces/interfaces";
import citiesJson from "@/data/cities_20000.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<WorldCity>>
) {
  const { city } = req.query;
  const cities = <WorldCity[]>citiesJson;
  const answer = cities.filter(
    (item) =>
      city &&
      item.city_name.toLowerCase().indexOf(city?.toString().toLowerCase()) !==
        -1
  );
  res.status(200).json(answer);
}
