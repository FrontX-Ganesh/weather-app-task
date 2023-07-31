import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import OpacityIcon from "@mui/icons-material/Opacity";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import React, { useEffect, useState } from "react";
import "../css/Details.css";

const ShowDetails = ({ data }) => {
  const [icon, setIcon] = useState(<WbSunnyIcon />);

  const weatherIcon = data.data.weather[0].icon;
  useEffect(() => {
    switch (weatherIcon) {
      case "01d":
        setIcon(<WbSunnyIcon />);
        break;
      case "02d":
      case "03d":
      case "04d":
        setIcon(<CloudIcon />);
        break;
      case "09d":
      case "10d":
        setIcon(<OpacityIcon />);
        break;
      case "11d":
        setIcon(<ThunderstormIcon />);
        break;
      case "13d":
        setIcon(<SevereColdIcon />);
        break;
      case "50d":
        setIcon(<FormatAlignCenterIcon />);
        break;
      default:
        setIcon(<WbSunnyIcon />);
    }
  }, [weatherIcon]);

  return (
    <div className="details">
      <h2 style={{ marginBottom: 0 }}>{data.data.name}</h2>
      <h2 style={{ marginBottom: 0 }}>{data.data.main.temp}°C</h2>
      <div className="min_max_temp">
        Min {data.data.main.temp_min}°C | Max {data.data.main.temp_min}°C
      </div>
      <div className="weather_description">
        <h4 style={{ marginRight: "10px" }}>
          <span className="description_span">Description: </span>
          {data.data.weather[0].description}
        </h4>
        {icon}
      </div>
      <div className="wind_speed">
        <label style={{ marginRight: "10px" }}>
          <span className="description_span">Wind Speed : </span>
          {data.data.wind.speed}
        </label>
      </div>
      <div className="humidity">
        <label style={{ marginRight: "10px" }}>
          <span className="description_span">Humidity : </span>
          {data.data.main.humidity}
        </label>
      </div>
    </div>
  );
};

export default ShowDetails;
