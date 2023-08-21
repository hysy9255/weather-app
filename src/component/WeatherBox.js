import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather", weather);
  const convertToF = (celcius) => {
    return celcius * (5 / 9);
  };
  let f;
  if (weather) {
    f = convertToF(weather.main.temp);
    f = Math.ceil(f * 100) / 100;
  }
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp}/ {f}
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
