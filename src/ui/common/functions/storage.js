//get session storage function and return value
export const getStorage = (param) => {
  const res = sessionStorage.getItem(param);
  return JSON.parse(res);
};

//set session storage function
export const setStorage = (param, value) => {
  sessionStorage.setItem(param, JSON.stringify(value));
};
