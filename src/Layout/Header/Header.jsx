import React, { useContext, useState } from "react";
import "./header.css";
import { Moon, Search, Sun } from "lucide-react";
import WeatherContext from "../../context/weatherContext";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { weatherData, loading, setQuery, setLoading } =
    useContext(WeatherContext);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city !== "") setQuery({ q: city });
    if (city !== "") {
      setIsLoading(true);
      setQuery({ q: city });
    }
  };
  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <h2>WHEATHER APP</h2>
          </div>
          <div className="header-center">
            <input
              type="text"
              placeholder="Search..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              <Search className="btn" />
            </button>
          </div>
          <div className="header-right">
            <div className="mode-switch">
              <label>
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={theme === "light"}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </header>
      <div></div>
    </>
  );
};

export default Header;
