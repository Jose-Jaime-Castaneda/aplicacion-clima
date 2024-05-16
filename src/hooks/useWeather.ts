import axios from "axios";
import { z } from "zod";
//import { object, string, number, Output, parse } from "valibot";
import { SearchType } from "../types";
import { useMemo, useState } from "react";

const INITIAL_STATE = {
  name: "",
  main: {
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
};

// zod
const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
});

export type Weather = z.infer<typeof Weather>;

// valibot
/* const WeatherSchema = object({
  name: string(),
  main: object({
    temp: number(),
    temp_max: number(),
    temp_min: number(),
  }),
});

type Weather = Output<typeof WeatherSchema>; */

export default function useWeather() {
  const [weather, setWeather] = useState<Weather>(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (search: SearchType) => {
    const appID = import.meta.env.VITE_APIKEY;
    setIsLoading(true);
    setWeather(INITIAL_STATE);
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appID}`;

      const { data } = await axios(geoUrl);

      const lat = data[0].lat;
      const lon = data[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`;

      const { data: weatherResult } = await axios(weatherUrl);
      // zod
      const result = Weather.safeParse(weatherResult);

      // valibot
      //const result = parse(WeatherSchema, weatherResult);

      if (result.success) {
        setWeather(result.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const hasWeatherData = useMemo(() => weather.name.length > 0, [weather.name]);

  return {
    weather,
    isLoading,
    fetchWeather,
    hasWeatherData,
  };
}
