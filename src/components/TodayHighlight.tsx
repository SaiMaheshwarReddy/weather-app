import React, { useContext } from "react";
import Typography from "./Typography";
import Card from "./Card";
import CardWrapper from "./CardWrapper";
import { ForecastDataContext } from "../context";

const TodayHighlight = () => {
  const { forecastData = {}, setForeCastData, locationDetails = {} } = useContext(ForecastDataContext);

  const {windspeed } = forecastData?.current_weather || {}
  const {visibility} = forecastData?.hourly || {}
  const todayVisibility = visibility?.slice(0,24)?.reduce((acc,el) => acc + el) / 24
  return (
    <div className="bg-black w-full px-8">
      <Typography className="text-white text-2xl font-bold mb-8">
        Today's Highlights
      </Typography>
      <div className="flex justify-start items-start flex-wrap gap-x-14 gap-y-6 pb-3">
        <CardWrapper className="w-full lg:w-[328px] mb-2">
          <Typography className="text-grey-300 text-base font-medium">
            Wind status
          </Typography>
          <Typography className="text-2xl pt-2 text-grey-300">
            <span className="text-7xl font-bold">{windspeed}</span>mph
          </Typography>
          <div className="pt-8 flex justify-center items-center">
            <div className="flex justify-center items-center w-6 h-6 bg-blue-700 rounded-full">
              <i className="fa-solid fa-location-arrow rotate-170 text-white text-sm"></i>
            </div>
            <Typography className="font-medium text-sm ml-2">WSW</Typography>
          </div>
        </CardWrapper>
        <CardWrapper className="w-full lg:w-[328px] mb-2 pb-11">
          <Typography className="text-grey-300 text-base font-medium">
            Humidity
          </Typography>
          <Typography className="text-4xl pt-2 text-grey-300">
            <span className="text-7xl font-bold">84</span>%
          </Typography>
          <div className="w-full flex justify-center items-center mt-10">
            <div className="relative h-2 w-3/4 bg-grey-300 rounded">
              <div className="absolute w-[84%] h-2 left-0 top-0 rounded bg-yellow-500"></div>
              <Typography className="absolute left-0 -top-4 font-bold text-xs text-grey-900">
                0
              </Typography>
              <Typography className="absolute inset-1/2 -top-4 font-bold text-xs  text-grey-900">
                50
              </Typography>
              <Typography className="absolute -bottom-7 -top-4 font-bold text-xs right-0 text-grey-900">
                100
              </Typography>
              <Typography className="absolute -bottom-5 right-0 font-bold text-xs text-grey-900">
                %
              </Typography>
            </div>
          </div>
        </CardWrapper>
        <CardWrapper className="w-full lg:w-[328px]  mb-2">
          <Typography className="text-grey-300 text-base font-medium">
            Visibility
          </Typography>
          <Typography className="text-2xl pt-2 text-grey-300">
            <span className="text-7xl font-bold mr-2">{(todayVisibility / 1609).toFixed(1)}</span>miles
          </Typography>
        </CardWrapper>
        <CardWrapper className="w-full lg:w-[328px]  mb-4">
          <Typography className="text-grey-300 text-base font-medium">
            Air Pressure
          </Typography>
          <Typography className="text-2xl pt-2 text-grey-300">
            <span className="text-7xl font-bold mr-2">998</span>mb
          </Typography>
        </CardWrapper>
      </div>
    </div>
  );
};

export default TodayHighlight;
