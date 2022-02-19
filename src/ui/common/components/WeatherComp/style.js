import styled from "styled-components";

export const WeatherCompWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  .weather-comp-con {
    max-width: 720px;
    width: 100%;
    height: 200px;
    background-color: #44aafe;
    border-radius: 16px;
    box-shadow: #44aafe80 0px 10px 15px -3px, #44aafe80 0px 4px 6px -2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 700px) {
      height: fit-content;
    }
    @media (max-width: 500px) {
      justify-content: center;
    }

    .left-con {
      padding: 5%;
      color: #fff;
      .left-top {
        font-size: xx-large;
        font-weight: lighter;
        @media (max-width: 500px) {
          text-align: center;
        }
      }
      .left-bot {
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 700px) {
          flex-direction: column;
          align-items: flex-start;
          .celcius {
            font-size: 3em;
          }

          .divider {
            display: none;
          }
        }
        @media (max-width: 500px) {
          align-items: center;
          .date-place-con {
            .date-con {
              text-align: center;
              justify-content: center;
            }
            .place-con {
              text-align: center;
              justify-content: center;
            }
          }
        }

        .mobile-img {
          display: none;
          @media (max-width: 500px) {
            display: flex;
          }
          img {
            height: 100px;
          }
        }
        .celcius {
          font-size: 4em;
          font-weight: lighter;
          display: flex;
        }
        .divider {
          border-right: 2px solid #ffffff30;
          height: 40px;
          width: 2px;
          margin: 0 1.5rem;
        }
        .date-place-con {
          .date-con {
            font-weight: lighter;
            font-size: larger;
          }
          .place-con {
            display: flex;
            align-items: center;
            font-size: larger;
            font-weight: lighter;
            img {
              width: 10px;
              margin-right: 0.4rem;
            }
          }
        }
      }
    }
    .right-con {
      height: 100%;
      @media (max-width: 500px) {
        display: none;
      }
      img {
        height: 100%;
      }
    }
  }
`;
