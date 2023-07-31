import React, { useContext, useState } from "react";
import Typography from "./Typography";
import { searchLocation } from "../services/searchLocation";
import { ForecastDataContext } from "../context";
import { getForecast } from "../services/getForecast";
import { getLocationDetailsUrl } from "../utils/rest";
import axios from "axios";

const debounce = (timeout = 300) => {
  let timer: number;
  return function (term, func) {
    clearTimeout(timer);
    // let context = this,
    //   args = arguments;
    timer = setTimeout(() => {
      func(term);
    }, timeout);
  };
};

const debounceSearch = debounce(300);

const SideNav = () => {
  const { forecastData, setForeCastData, setLocationDetails, navOpen, setNavOpen } =
  useContext(ForecastDataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationList, setLocationList] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await searchLocation(searchTerm);
    console.log(res.data.results, "loc");
    setLocationList(res.data.results || []);
  };

  async function search(term: string) {
    const data = await searchLocation(term);
    console.log(data, "loc");
  }

  const handleChange = (e) => {
    setSearchTerm(e.target?.value);
    // debounceSearch(e.target?.value, search);
  };
  const getLocationForecast = async (lat, long) => {
    setLocationDetails({});
    setForeCastData({});
    const res = await getForecast({ lat, long });
    const locationData = await axios.get(getLocationDetailsUrl({ lat, long }));
    setLocationDetails(locationData.data);
    setForeCastData(res.data);
    setNavOpen(false)
  };
  const handleSelectedLocation = (location) => {
    getLocationForecast(location.latitude, location.longitude)
  }
  const handleNav = () => {
    setNavOpen(false)
  }
  return (
    <div className={`absolute ${navOpen ? "translate-x-0" : "-translate-x-full"} w-full h-full bg-blue-900 z-20 transition-transform ease-in-out duration-500`}>
      <button className="absolute top-4 right-6" onClick={handleNav}>
        <i className="fa-solid text-2xl text-white fa-xmark"></i>
      </button>
      <form
        className="w-full flex justify-center items-center mt-20"
        onSubmit={handleSubmit}
      >
        <div className="relative border-solid border-2 border-white">
          <i className="fa-solid fa-magnifying-glass text-grey-300 absolute left-2 top-3 text-lg"></i>
          <input
            value={searchTerm}
            onChange={handleChange}
            placeholder="search location"
            className="w-[268px] h-12 p-3 pl-8 font-Raleway text-grey-300 bg-blue-900 "
          />
        </div>
        <button
          type="submit"
          className="bg-blue-200 text-white w-[86px] ml-2 h-12"
        >
          <Typography>Search</Typography>
        </button>
      </form>
      <ul className="w-full h-full mt-5 flex flex-col justify-start items-center">
        {locationList.map((location, i) => {
          const {name, country} = location
          return (
            <li onClick={() => handleSelectedLocation(location)} className="w-4/5 group mt-2 cursor-pointer flex justify-between items-center px-3 py-4 text-grey-300 hover:border-solid border-2 border-transparent hover:border-blue-400">
              <Typography>{name},{country}</Typography>
              <i className="fa-solid hidden group-hover:block fa-chevron-right text-blue-700"></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
