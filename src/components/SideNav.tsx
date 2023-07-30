import React, { useState } from "react";
import Typography from "./Typography";

const debounce =  (func, timeout = 300) => {
    let timer;
    return function() {
      clearTimeout(timer);
      let context = this, args = arguments
      timer = setTimeout(() => { 
          func(...args); 
    }, timeout);
    };
  }


  const debounceSearch = debounce((a,b) => {
      console.log(a,b, "search") 
  }, 300)
const SideNav = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        debounceSearch(e.target.value)
    }
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-blue-900 z-20">
        <button className="absolute top-4 right-6"><i className="fa-solid text-2xl text-white fa-xmark"></i></button>
      <form className="w-full flex justify-center items-center mt-20" onSubmit={handleSubmit}>
        <div className="relative border-solid border-2 border-white">
        <i className="fa-solid fa-magnifying-glass text-grey-300 absolute left-2 top-3 text-lg"></i>
          <input
          value={searchTerm}
          onChange={handleChange}
            placeholder="search location"
            className="w-[268px] h-12 p-3 pl-8 font-Raleway text-grey-300 bg-blue-900 "
          />
        </div>
        <button type="submit" className="bg-blue-200 text-white w-[86px] ml-2 h-12">
          <Typography>Search</Typography>
        </button>
      </form>
      <ul className="w-full h-full mt-5 flex flex-col justify-start items-center">
        <li className="w-4/5 group mt-2 cursor-pointer flex justify-between items-center px-3 py-4 text-grey-300 hover:border-solid border-2 border-transparent hover:border-blue-400">
            <Typography>London</Typography>
            <i className="fa-solid hidden group-hover:block fa-chevron-right text-blue-700"></i>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
