import React from "react";

const CardWrapper = (props) => {
  return (
    <div
      className={`py-9 text-white flex flex-col justify-start items-center bg-blue-900 ${props.className ?? ""}`}
    >
      {" "}
      {props.children}
    </div>
  );
};

export default CardWrapper;
