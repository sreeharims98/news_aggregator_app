import React from "react";
import { locationIcon } from "../../assets/images/index.js";
import { unixToLocal } from "../../functions/dateConvertion.js";
import { WeatherCompWrapper } from "./style.js";

const WeatherComp = ({ weather }) => {
  const weatherData = weather?.weather[0];

  return (
    <WeatherCompWrapper>
      <div className="weather-comp-con">
        <div className="left-con">
          <div className="left-top">{weatherData?.main}</div>
          <div className="left-bot">
            <div className="mobile-img">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData?.icon}@4x.png`}
                alt={weatherData?.icon}
              />
            </div>
            <div className="celcius">
              <span>{weather?.main?.temp.toFixed(0)}</span> <span>&#176;</span>
            </div>
            <div className="divider"></div>
            <div className="date-place-con">
              <div className="date-con">{unixToLocal(weather?.dt)}</div>
              <div className="place-con">
                <img src={locationIcon} alt="loc" /> {weather?.name}
              </div>
            </div>
          </div>
        </div>
        <div className="right-con">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData?.icon}@4x.png`}
            alt={weatherData?.icon}
          />
        </div>
      </div>
    </WeatherCompWrapper>
  );
};
export default React.memo(WeatherComp);
