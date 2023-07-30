import React from "react";
import Typography from "./Typography";

const Temperature = ({temperature} : {temperature: number}) => {
  return (
    <>
      <div className="text-center">
        <div className="flex items-center justify-center">
          <Typography className="text-[144px] text-grey-300 font-medium text-center">
            {temperature}
          </Typography>
          <Typography className="mt-8 text-3xl font-semibold text-grey-900">
            o
          </Typography>
          <Typography className="mt-16 text-6xl font-normal text-grey-900">
            C
          </Typography>
          {/* <Typography className='absolute text-white text-3xl font-semibold -right-7 bottom-0 top-1/2 text-grey-900'>o</Typography>
    <Typography className='absolute text-white text-6xl font-normal -right-[4.4rem] bottom-0 top-1/2 text-grey-900'>C</Typography> */}
        </div>
      </div>
    </>
  );
};

export default Temperature;
