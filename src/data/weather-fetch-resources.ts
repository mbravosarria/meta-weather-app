import { AxiosWeatherInstance } from "@/configurations/axios";
import { useQuery } from "react-query";

interface weatherParams {
  cityId: string;
  key: string;
  units?: string;
}

export function useTodayWeather(options: weatherParams) {
  const { data, isLoading, error } = useQuery(
    [`/today-weather`, options],
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

export function useDailyWeather(options: weatherParams) {
  const { data, isLoading, error } = useQuery(
    [`/daily-weather`, options],
    async () =>
      await AxiosWeatherInstance.get("/forecast/daily", {
        params: {
          city_id: options.cityId,
          key: options.key,
          units: options.units,
        },
      })
  );

  return {
    dailyWeather: data?.data?.data,
    dailyWeatherIsLoading: isLoading,
    dailyWeatherError: error,
  };
}
