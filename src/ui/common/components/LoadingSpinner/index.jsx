import React from "react";
import { Spin } from "antd";
import { LoadingWrapper } from "./style";

export const LoadingSpinner = () => {
  return (
    <LoadingWrapper>
      <Spin size="large" />
    </LoadingWrapper>
  );
};
