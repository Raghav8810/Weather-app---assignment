import React from "react";
import "./hero.css";
import CurrentDay from "../../Components/CurrentDay/CurrentDay";
import WeekDay from "../../Components/WeekDays/WeekDay";
import Highlights from "../../Components/Highlights/Highlights";

const Hero = () => {
  return (
    <div className="hero">
      <div className="column column1">
        <CurrentDay />
        <WeekDay />

      </div>
      <div className="column column2">
        <Highlights />
      </div>
    </div>
  );
};

export default Hero;
