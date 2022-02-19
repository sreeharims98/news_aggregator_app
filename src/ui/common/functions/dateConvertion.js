import moment from "moment";

//convert unix timestamp to local date
export const unixToLocal = (date) => {
  const local = moment(date * 1000).format("dddd MM YYYY");
  return local;
};
