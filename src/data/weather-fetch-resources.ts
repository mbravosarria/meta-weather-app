import { AxiosWeatherInstance } from "@/configurations/axios";
import { useQuery } from "react-query";

interface currentWeatherParams {
  cityId: string;
  key: string;
  units?: string;
}

export function useTodayWeather(options: currentWeatherParams) {
  const { data, isLoading, error } = useQuery(
    [`/filter-products`, options],
    async () =>
      await AxiosWeatherInstance.get("/current", {
        params: {
          city_id: options.cityId,
          key: options.key,
          units: options.units,
        },
      })
  );
  return {
    currentWeather: data?.data?.data,
    currentWeatherIsLoading: isLoading,
    currentWeatherError: error,
  };
}
