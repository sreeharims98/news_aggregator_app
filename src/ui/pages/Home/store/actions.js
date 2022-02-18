import { message } from "antd";
import { getNews } from "../../../../api/home";
import { getStorage, setStorage } from "../../../common/functions/storage";

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
        setState({ isLoading: true });

        const endpoint = getState().newsEndPoint;
        const lang = getState().language;
        const prevNews = getState().allNews;

        const res = await getNews(endpoint, { lang, page });
        setState({ allNews: [...prevNews, ...res?.articles] });
        setState({ isLoading: false });
      } catch (error) {
        setState({ isLoading: false });
        message.error(error?.data?.errors[0]);
      }
    },
  //fetch more news after scroll action
  fetchMoreNews:
    () =>
    ({ setState, getState }) => {
      setTimeout(() => {
        let page = getState().page;
        getNews(page + 1);
        setState({ page: page + 1 });
      }, 1500);
    },
};
export default actions;
