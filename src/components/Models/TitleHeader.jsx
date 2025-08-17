import React from "react";

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge flex items-center gap-2">
        <img
          src="/images/education.png"
          alt="Education"
          className="w-6 h-6 md:w-8 md:h-8 object-contain"
        />
        <p className="text-base md:text-lg">{sub}</p>
      </div>
      <div className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
