import { get } from "../common/base_api";
import { config } from "../config";

//get news api
export const getNews = (endpoint, params) => {
  return get(
    `https://gnews.io/api/v4/${endpoint}?&token=${config.GNEWS_TOKEN}`,
    params
  );
};
