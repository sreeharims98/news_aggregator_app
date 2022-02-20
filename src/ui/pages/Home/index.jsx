import React, { useEffect } from "react";
import "./style.scss";
import { useHomeStore } from "./store";
import { Empty } from "antd";
import { LoadingSpinner } from "../../common/components/LoadingSpinner";
import WeatherComp from "../../common/components/WeatherComp";
import NewsGrid from "../../common/components/NewsGrid";
import InfiniteScrollComp from "../../common/components/InfiniteScrollComp";
import { Link } from "react-router-dom";

export const Home = () => {
  // state management
  const [
    { isLoading, allNews, page, weather, newsEndPoint },
    { getNews, fetchMoreNews, getLocation, goBackToLatestNews },
  ] = useHomeStore();

  useEffect(() => {
    //get all news action
    getNews(page);
    //get user location
    getLocation();
  }, []);

  return (
    <div className="Home">
      {/* weather section */}
      {weather?.name && (
        <>
          <div className="sub-title">Weather report</div>
          <WeatherComp weather={weather} />
        </>
      )}
      {/* latest news section */}
      <div className="sub-title">
        {/* subtitle check */}
        <span>
          {newsEndPoint === "top-headlines?"
            ? "Latest news"
            : `Search results for ${newsEndPoint.split("=")[1]}`}
        </span>
        <span className="goback" onClick={goBackToLatestNews}>
          {newsEndPoint !== "top-headlines?" && "Go back"}
        </span>
      </div>
      <div className="home-con">
        {/* loading component show on initial loading */}
        {isLoading ? (
          <LoadingSpinner />
        ) : allNews.length > 0 ? (
          //show infinite scroll component, if there is news
          <InfiniteScrollComp data={allNews} next={fetchMoreNews}>
            {/* news grid component */}
            <NewsGrid data={allNews} />
          </InfiniteScrollComp>
        ) : (
          //if no data, display empty component
          <Empty />
        )}
      </div>
    </div>
  );
};
