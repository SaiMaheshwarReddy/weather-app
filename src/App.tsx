import { useState } from "react";
import reactLogo from "./assets/react.svg";

import TemperatureDetails from "./components/TemperatureDetails";
import WeeklyWeatherDetails from "./components/WeeklyWeatherDetails";
import TodayHighlight from "./components/TodayHighlight";
import Header from "./components/Header";
import { ForecastProvider } from "./context";
import SideNav from "./components/SideNav";
function App() {
  return (
    <ForecastProvider>
      <div className="overflow-hidden w-full h-screen bg-blue-900 pb-0 flex flex-col lg:flex-row lg:items-start justify-start items-center">
        <div className="w-full relative lg:w-[30%] flex flex-col justify-start items-center">
          <Header />
          <SideNav />
          <TemperatureDetails />
        </div>
        <div className="overflow-y-scroll flex lg:w-[70%] pl-36 bg-black h-screen flex-col justify-start items-center">
          <WeeklyWeatherDetails />
          <TodayHighlight />
        </div>
      </div>
    </ForecastProvider>
  );
}

export default App;
