import axios from "axios";
import { SearchType } from "../types";

export default function useWeather() {
  const fetchWeather = async (search: SearchType) => {
    const appID = import.meta.env.VITE_APIKEY;
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appID}`;

      const { data } = await axios(geoUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchWeather,
  };
}
