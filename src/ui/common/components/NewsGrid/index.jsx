import React from "react";
import { Col, Row } from "antd";
import NewsCard from "../NewsCard";

const NewsGrid = ({ data }) => {
  return (
    <Row gutter={[50, 100]}>
      {data?.map((n, index) => (
        <Col xs={24} sm={12} lg={8} key={index + n?.title}>
          <NewsCard news={n} />
        </Col>
      ))}
    </Row>
  );
};

export default NewsGrid;
