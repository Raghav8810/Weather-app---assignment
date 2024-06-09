import React, { useContext } from "react";
import "./currentday.css";
import WeatherContext from "../../context/weatherContext";

const CurrentDay = () => {
  const { weatherData, loading } = useContext(WeatherContext);
  // if (loading) {
  //   return <div className='loading'>Loading...</div>;
  // }
  // if (!weatherData) {
  //   return <div>No weather data available</div>;
  // }
  console.log(weatherData);

  const extractTime = (timeString) => {
    const timePart = timeString.split("|")[1].trim();
    const timeRegex = /\d{2}:\d{2} [AP]M/;
    const extractedTime = timeRegex.exec(timePart)[0];
    return extractedTime;
  };
  return (
    <>
      <div className="current_day">
        <div className="curr_zone">
          <h5>{weatherData.name}</h5>
          <h5>{extractTime(weatherData.formattedLocalTime)}</h5>
        </div>

        <div className="curr_wheather">
          <div className="curr_temp">
            <h1 className="curr-time-temp">{weatherData.temp.toFixed()}°C</h1>
            <img src="./images/sunny.svg" />
          </div>

          <div className="curr_terms">
            <p className="real_time">
              Real Feel:{" "}
              <span className="real_span">{weatherData.feels_like}°C</span>
            </p>
            <p className="real_time">
              Sunrise: <span className="real_span">{weatherData.sunrise}</span>
            </p>
            <p className="real_time">
              Sunset: <span className="real_span">{weatherData.sunset}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentDay;
