import { get } from "../common/base_api";
import { config } from "../config";

//get news api (gnews api)
export const getNews = (endpoint, params) => {
  return get(
    `https://gnews.io/api/v4/${endpoint}?&token=${config.GNEWS_TOKEN}`,
    params
  );
};

//get weather api (openweather api)
export const getWeather = (params) => {
  return get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${params?.lat}&lon=${params?.lon}&appid=${config.OPENWEATHER_TOKEN}&units=metric`
  );
};
