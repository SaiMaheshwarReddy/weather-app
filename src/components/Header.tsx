import React, { useContext, useEffect } from "react";
import { FORECAST, getLocationDetailsUrl } from "../utils/rest";
import { getForecast } from "../services/getForecast";
import { ForecastDataContext } from "../context";
import axios from "axios";
import { getCurrentTemperature } from "../utils/temperatureDataMapping";

const Header = () => {
  const { forecastData, setForeCastData, setLocationDetails, setNavOpen } =
    useContext(ForecastDataContext);

  useEffect(() => {
    getCurrentLocationCoords(getLocationForecast);
  }, []);

  const getCurrentLocationCoords = (func) => {
    navigator.geolocation.getCurrentPosition(
      async (data) => {
        const {
          coords: { latitude: lat, longitude: long },
        } = data;
        func(lat, long);
      },
      (err) => console.log("err", err)
    );
  };
  const getLocationForecast = async (lat, long) => {
    setLocationDetails({});
    setForeCastData({});
    const res = await getForecast({ lat, long });
    const locationData = await axios.get(getLocationDetailsUrl({ lat, long }));
    setLocationDetails(locationData.data);
    setForeCastData(res.data);
  };
  // const getCurrentLocationForecast = () => {
  //   setLocationDetails({})
  //      setForeCastData({})
  //   navigator.geolocation.getCurrentPosition(
  //     async (data) => {
  //       const {coords:{latitude:lat, longitude:long}} = data
  //      const res = await getForecast({lat, long })
  //      const locationData = await axios.get(getLocationDetailsUrl({lat, long}))
  //      setLocationDetails(locationData.data)
  //      setForeCastData(res.data)
  //     },
  //     (err) => console.log("err", err)
  //   );
  // };
  const handleNav = () => {
    setNavOpen(true)
  }
  return (
    <div className="flex w-full justify-between items-center mt-4 px-3">
      <button className="text-white bg-grey-600 px-5 py-1" onClick={handleNav}>
        Search places
      </button>
      <button
        className="w-10 h-10 bg-grey-600 rounded-full flex justify-center items-center"
        onClick={() => getCurrentLocationCoords(getLocationForecast)}
      >
        <i className="fa-solid text-white text-xl fa-location-crosshairs"></i>
      </button>
    </div>
  );
};

export default Header;
