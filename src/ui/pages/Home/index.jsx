import React, { useEffect } from "react";
import "./style.scss";
import NewsCard from "../../common/components/NewsCard";
import { useHomeStore } from "./store";
import { Col, Empty, Row } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingSpinner } from "../../common/components/LoadingSpinner";

export const Home = () => {
  // state management
  const [{ isLoading, allNews, page }, { getNews, fetchMoreNews }] =
    useHomeStore();

  useEffect(() => {
    //get all news action
    getNews(page);
  }, []);

  return (
    <div className="Home">
      <div className="sub-title">Latest news</div>
      <div className="home-con">
        {isLoading ? (
          //show loading ui, if fetching data
          <LoadingSpinner />
        ) : allNews.length > 0 ? (
          //show infinite scroll component, if there is news
          <InfiniteScroll
            dataLength={allNews.length} //give total number of news
            next={fetchMoreNews} // give function to call next set of news
            hasMore={true} //used to stop calling the next function if there is no more data
            loader={isLoading ? <LoadingSpinner /> : null} //loader ui
          >
            {/* mapping all news using  grid */}
            <Row gutter={[50, 100]}>
              {allNews?.map((n, index) => (
                <Col xs={24} sm={12} lg={8} key={index + n?.title}>
                  <NewsCard news={n} />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        ) : (
          //if no data, display empty component
          <Empty />
        )}
      </div>
    </div>
  );
};