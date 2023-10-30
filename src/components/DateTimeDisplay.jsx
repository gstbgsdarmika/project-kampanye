import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div
      className={
        isDanger
          ? " text-[#E28409] text-center md:text-7xl text-2xl font-bold"
          : " text-[#C73027] text-center md:text-7xl text-2xl font-bold"
      }
    >
      <p>{value}</p>
      <span className="text-sm font-bold text-center text-black  md:text-4xl">
        {type}
      </span>
    </div>
  );
};

export default DateTimeDisplay;
