import moment from "moment";

//sort data according to published date
export const sortDate = (data) => {
  const sortedData = data.sort(
    (a, b) =>
      moment(b.publishedAt).format("YYYYMMDD") -
      moment(a.publishedAt).format("YYYYMMDD")
  );
  return sortedData;
};
