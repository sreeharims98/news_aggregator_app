import moment from "moment";

export const sortDate = (data) => {
  const sortedData = data.sort(
    (a, b) =>
      moment(b.publishedAt).format("YYYYMMDD") -
      moment(a.publishedAt).format("YYYYMMDD")
  );
  console.log(sortedData);
  return sortedData;
};
