import React from "react";
import Typography from "./Typography";
import thunder from "../assets/Thunderstorm.png";

const Card = (props: { className?: string }) => {
  /*
    snow
    sunny
    huge rains with thunder
    */
  const {day, minTemp, maxTemp, image} = props;
  return (
    <div
      className={`px-5 py-5 flex w-[120px] h-[177px] flex-col justify-between items-center bg-blue-900 ${props.className ?? ""}`}
    >
      <Typography className="text-white text-sm">{day}</Typography>
      <img src={image} width={"60px"} />
      <div className="flex gap-4 justify-center mt-7">
        <Typography className="text-white text-base">
          {minTemp}<sup>o</sup>C
        </Typography>
        <Typography className="text-grey-900 text-base">
          
          {maxTemp}<sup>o</sup>C
        </Typography>
      </div>
    </div>
  );
};

export default Card;
