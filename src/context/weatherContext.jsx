import React, { createContext, useState, useEffect, useCallback } from "react";
import getFormatData from "../API/api";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState({ q: "New Delhi" });
  const [units, setUnits] = useState("metric");

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getFormatData({ ...query, units });
      setWeatherData(data);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [query, units]);

  //current location fetching here
  const fetchCurrentLocationWeather = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setQuery({ lat: position.coords.latitude, lon: position.coords.longitude });
        },
        (error) => {
          setError("Unable to retrieve your location");
        }
      );
    } else {
      setError("Geolocation is not supported by this device.");
    }
  }, []);


  useEffect(() => {
    const loadWithDelay = () => {
      setLoading(true);
      setTimeout(() => {
        fetchData();
      }, 500);
    };

    loadWithDelay();
  }, [fetchData]);

  return (
    <WeatherContext.Provider
      value={{ weatherData, loading, error, setQuery, setUnits, fetchCurrentLocationWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
