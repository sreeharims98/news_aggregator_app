import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/index.js";
import { NewsCardWrapper } from "./style.js";

const NewsCard = ({ news }) => {
  return (
    <NewsCardWrapper>
      <Link to={routes.NEWS_EXPANDED} state={news}>
        <div className="image-con">
          <img src={news?.image} alt="news_image" />
        </div>
        <div className="text-con">
          <div className="news-title">{news?.title}</div>
          <div className="news-source">
            <div className="source-name">{news?.source?.name}</div>
            <div className="published-date">
              {moment(news?.publishedAt).format("MMM DD, YYYY")}
            </div>
          </div>
        </div>
      </Link>
    </NewsCardWrapper>
  );
};
export default React.memo(NewsCard);
