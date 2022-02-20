import moment from "moment";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { backIcon } from "../../common/assets/images";
import { routes } from "../../common/routes";
import "./style.scss";

export const NewsExpanded = () => {
  //get data passed through react router dom
  const { state } = useLocation();

  useEffect(() => {
    //scroll to start of page
    window.scroll(0, 0);
  }, []);

  return (
    <div className="NewsExpanded">
      <div className="news-source">
        <div className="backbtn-name">
          <Link to={routes.HOME}>
            <img src={backIcon} alt="<" />
          </Link>
          <a
            href={state?.source?.url}
            target="_blank"
            rel="noreferrer"
            className="source-name"
          >
            {state?.source?.name}
          </a>
        </div>
        <div className="published-date">
          {moment(state?.publishedAt).format("MMM DD, YYYY")}
        </div>
      </div>
      <div className="news-title">{state?.title}</div>
      <div className="image-con">
        <img src={state?.image} alt="news_image" />
      </div>
      <div className="news-content">{state?.content}</div>
    </div>
  );
};
