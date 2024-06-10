import React, { useContext } from "react";
import "./weekday.css";
import WeatherContext from "../../context/weatherContext";

const WeekDay = () => {
  const { weatherData, loading } = useContext(WeatherContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!weatherData) {
    return <div>No weather data available</div>;
  }
  // console.log(weatherData.daily[0])

  return (
    <>
      {weatherData.daily.map((d, i) => (
        <div className="week_day" key={i}>
          <div className="week_zone">
            <h5>{d.title}</h5>
          </div>
          <hr></hr>
          <div className="week_temp">
            <img src={d.icon} />
            <h1>{d.temp.toFixed()}°C</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default WeekDay;
