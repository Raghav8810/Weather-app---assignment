import { useContext } from "react";
import "./App.css";
import LoadingBar from "./Components/CurrentDay/LoadingBar";
import Header from "./Layout/Header/Header";
import Hero from "./Layout/Hero/Hero";
import Sidebar from "./Layout/Sidebar/Sidebar";
import WeatherContext from "./context/weatherContext";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { weatherData, loading } = useContext(WeatherContext);
  if (loading) {
    return <LoadingBar></LoadingBar>;
  }
  if (!weatherData) {
    return <div className="errorpage">No weather data available</div>;
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <Sidebar />
      </main>
    </>
  );
}

export default App;
