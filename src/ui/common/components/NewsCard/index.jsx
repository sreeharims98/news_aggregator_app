import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { newsCover } from "../../assets/images/index.js";
import { routes } from "../../routes/index.js";
import { NewsCardWrapper } from "./style.js";

const NewsCard = ({ news }) => {
  return (
    <NewsCardWrapper>
      {/* pass news data to NEWS_EXPANDED route */}
      <Link to={routes.NEWS_EXPANDED} state={news}>
        <div className="image-con">
          <img
            src={news?.image}
            alt="news_image"
            onError={(e) => (e.currentTarget.src = newsCover)} //fallback image when link is 404
          />
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
