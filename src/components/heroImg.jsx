import React from "react";

const HeroImg = () => {
  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center md:rounded-3xl">
      <img
        className="py-12 rounded-2xl md:w-[100%] md:max-w-[1000px]  md:mx-auto md:pr-48 "
        src="src/assets/hero.jpg"
        alt="Lady meditating with dog"
      />
    </div>
  );
};

export default HeroImg;
