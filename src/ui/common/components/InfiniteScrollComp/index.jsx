import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingSpinner } from "../LoadingSpinner";
import { InfinteScrollCompWrapper } from "./style";

const InfiniteScrollComp = ({ data, next, children }) => {
  return (
    <InfinteScrollCompWrapper>
      {/* react-infinite-scroll-component package used for infinte scroll */}
      <InfiniteScroll
        dataLength={data.length} //give total number of news
        next={next} // give function to call next set of news
        hasMore={true} //used to stop calling the next function if there is no more data
        loader={<LoadingSpinner />} //loader ui
      >
        {children}
      </InfiniteScroll>
    </InfinteScrollCompWrapper>
  );
};

export default InfiniteScrollComp;
