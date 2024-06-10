import { DateTime } from "luxon";
import weatherimg from "../Utils/weatherImg";
const API_KEY = import.meta.env.VITE_API_KEY_APP;
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL_APP;

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_API_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formateToLocalTime = (
  seconds,
  offset,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(seconds)
    .plus({ seconds: offset })
    .toFormat(format);
};

const currentDataFormate = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_main, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timeZone,
    visibility,
    deg,
  } = data;
  const { main: details, icon } = weather[0];
  const FormattedLocalTime = formateToLocalTime(dt, timeZone);
  const customIconUrl = weatherimg[icon];

  return {
    temp,
    feels_like,
    temp_main,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formateToLocalTime(sunrise, timeZone, "hh:mm a"),
    sunset: formateToLocalTime(sunset, timeZone, "hh:mm a"),
    speed,
    details,
    // icon : iconUrl(icon),
    icon: customIconUrl,
    formattedLocalTime: formateToLocalTime(dt, timeZone),
    dt,
    timeZone,
    lat,
    lon,
    visibility,
    deg,
  };
};

//get forcaste weather
const getformateForcasteWeather = (seconds, offset, data) => {
  //hour
  const hourly = data
    .filter((f) => f.dt > seconds)
    .slice(0, 5)
    .map((f) => ({
      temp: f.main.temp,
      title: formateToLocalTime(f.dt, offset, "hh:mm a"),
      // icon: iconUrl(f.weather[0].icon)
      icon: weatherimg[f.weather[0].icon],
      date: f.dt_txt,
    }));
  //daily
  const daily = data
    .filter((f) => f.dt_txt.slice(-8) === "00:00:00")
    .map((f) => ({
      temp: f.main.temp,
      title: formateToLocalTime(f.dt, offset, "ccc"),
      // icon: iconUrl(f.weather[0].icon)
      icon: weatherimg[f.weather[0].icon],
      date: f.dt_txt,
    }));

  return { hourly, daily };
};

const getFormatData = async (searchParams) => {
  try {
    const formatCurrentData = await getWeatherData(
      "weather",
      searchParams
    ).then(currentDataFormate);

    if (!formatCurrentData) {
      throw new Error("Failed to fetch or format current weather data");
    }

    const { dt, lat, lon, timeZone } = formatCurrentData;

    const formateForcasteWeather = await getWeatherData("forecast", {
      lat,
      lon,
      units: searchParams.units,
    }).then((d) => {
      if (!d || !d.list) {
        throw new Error("Failed to fetch forecast weather data");
      }
      return getformateForcasteWeather(dt, timeZone, d.list);
    });

    return { ...formatCurrentData, ...formateForcasteWeather };
  } catch (error) {
    console.error("Error in getFormatData:", error.message);
    return null;
  }
};

export default getFormatData;
