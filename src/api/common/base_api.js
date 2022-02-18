//common axios functions
import axios from "axios";

const base = async (options) => {
  try {
    const res = await axios({
      headers: {
        Accept: "application/json",
      },
      ...options,
    });
    return res?.data;
  } catch (error) {
    console.log(error?.response, "api base error");
    throw error?.response;
  }
};

//axios get
export const get = (url, params) => {
  const options = {
    method: "get",
    url,
    params,
  };
  return base(options);
};

//axios patch
export const patch = (url, data) => {
  const options = {
    method: "patch",
    url,
    data,
  };
  return base(options);
};

//axios post
export const post = (url, data) => {
  const options = {
    method: "post",
    url,
    data,
  };
  return base(options);
};

//axios put
export const put = (url, data) => {
  const options = {
    method: "put",
    url,
    data,
  };
  return base(options);
};

//axios delete
export const del = (url, data) => {
  const options = {
    method: "delete",
    url,
    data,
  };
  return base(options);
};
