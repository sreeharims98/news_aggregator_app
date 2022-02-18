import styled from "styled-components";

export const NewsCardWrapper = styled.div`
  a {
    color: inherit;
  }
  max-width: 600px;
  border-radius: 16px;
  transition: all ease-in-out 0.2s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }
  .image-con {
    width: 100%;
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }
  }
  .text-con {
    padding: 1rem;
    .news-title {
      font-size: medium;
      font-weight: bold;
      color: #333333;
      padding: 0.5rem 0;
    }
    .news-description {
    }
    .news-source {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 0;
      .source-name {
        color: #666666;
      }
      .published-date {
        color: #666666;
      }
    }
  }
`;
