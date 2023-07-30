import React, { useContext } from "react";
import Temperature from "./Temperature";
import Typography from "./Typography";
import Shower from "../assets/Shower.png";
import cloud from "../assets/Cloud-background.png";
import { ForecastDataContext } from "../context";
import { getCurrentTemperature } from "../utils/temperatureDataMapping";
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date();
const dayName = d.toLocaleString('default', { weekday: 'short' });
const date = d.getDate()
const month = d.toLocaleString('default', { month: 'short' });
const TemperatureDetails = () => {
  const { forecastData, setForeCastData, locationDetails = {} } = useContext(ForecastDataContext);
  const { current_weather: { temperature = 0 } = {} } = forecastData || {};
  const temperatureName = getCurrentTemperature(Number(temperature))[0]?.name
  return (
    <div className="text-grey-900 pb-24 flex flex-col justify-center">
      <div className="flex justify-center items-center bg-blue-900 h-72 relative">
        {/* <img src={cloud} className="w-full bg-blend-overlay" /> */}
        <img
          src={Shower}
          className="absolute top-1/2 left-1/4 translate-x-1/5 -translate-y-1/2 z-10"
          width="150"
          height="174"
        />
      </div>
      <Temperature temperature={temperature} />
      <Typography className="text-4xl mt-6 font-medium text-center">
        {temperatureName}
      </Typography>
      <div className="flex justify-center gap-4 items-center mt-12 text-lg">
        <Typography>Today</Typography>
        <div className="w-1 h-1 bg-grey-900 rounded"></div>
        <Typography>{dayName}, {date} {month}</Typography>
      </div>
      <Typography className="text-center text-xl mt-8">
        <i className="fa-sharp fa-solid fa-location-dot mr-2 "></i>{locationDetails?.city}
      </Typography>
    </div>
  );
};

export default TemperatureDetails;
