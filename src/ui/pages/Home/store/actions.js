import { message } from "antd";
import { getNews, getWeather } from "../../../../api/home";
import { getLocation } from "../../../common/functions/getLocation";
import { sortDate } from "../../../common/functions/sort";
import { getStorage, setStorage } from "../../../common/functions/storage";

//all actions of the store
const actions = {
  //loading action
  isLoading:
    (value) =>
    ({ setState }) => {
      setState({ isLoading: value });
    },
  //get selected language stored in session storage
  getLanguage:
    () =>
    ({ setState }) => {
      const value = getStorage("news_lang");
      setState({ language: value ?? "en" });
    },
  //set selected language in session storage
  setLanguage:
    (value) =>
    ({ setState, dispatch }) => {
      setStorage("news_lang", value);
      setState({ language: value });
      dispatch(actions.getNews(1));
    },
  //get all news action
  getNews:
    (page) =>
    async ({ setState, getState }) => {
      try {
        // initial loading when page number is 1
        if (page === 1) {
          setState({ isLoading: true });
        }

        const endpoint = getState().newsEndPoint;
        const lang = getState().language;
        const prevNews = getState().allNews;

        const res = await getNews(endpoint, { lang, page });

        if (page === 1) {
          //when page is 1 then store the fetched data only
          const sortedArray = sortDate(res?.articles);
          setState({ allNews: [...sortedArray] });
          setState({ isLoading: false });
        } else {
          //when page is not 1 then store the prev news along with new news
          setState({ allNews: [...prevNews, ...res?.articles] });
        }
      } catch (error) {
        setState({ isLoading: false });
        message.error(error?.data?.errors[0]);
      }
    },
  //fetch more news after scroll action
  fetchMoreNews:
    () =>
    ({ setState, getState, dispatch }) => {
      // call get news function on scroll with a delay of 1.5s
      setTimeout(() => {
        let page = getState().page; //get current page number
        dispatch(actions.getNews(page + 1));
        setState({ page: page + 1 }); //increment page number
      }, 1500);
    },
  //search news by search query
  onNewsSearch:
    (data) =>
    ({ setState, dispatch }) => {
      setState({ newsEndPoint: `search?q=${data}` });
      dispatch(actions.getNews(1));
    },
  //acton to goback to latest news from searched results
  goBackToLatestNews:
    () =>
    ({ setState, dispatch }) => {
      setState({ newsEndPoint: `top-headlines?` });
      dispatch(actions.getNews(1));
    },

  //get location of user
  getLocation:
    () =>
    async ({ setState, dispatch }) => {
      //get user lat and lon
      const loc = await getLocation();
      setState({ currentLocation: loc });
      //dispatch get weather function
      if (loc?.lat && loc?.lon) {
        dispatch(actions.getWeather(loc));
      }
    },
  //get weather info from current coordinates
  getWeather:
    (loc) =>
    async ({ setState }) => {
      //calling openweather api
      const res = await getWeather(loc);
      setState({ weather: res });
    },
};
export default actions;
