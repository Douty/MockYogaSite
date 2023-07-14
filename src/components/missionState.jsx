import React, { useEffect, useRef, useState } from "react";

const MissionState = () => {
  return (
    <div className="my-12 flex flex-col items-center mx-auto">
      <h1 className="font-bold text-3xl text-secondary py-6 ">Our Mission</h1>
      <p className="text-white text-center text-normal mx-6 my-12 leading-loose text-xl md:w-2/5 md:text-2xl md:leading-loose ">
        At our studio, we are driven by a profound mission to empower
        individuals on their journey towards holistic wellness. Through the
        transformative practice of yoga, we aim to provide a nurturing
        environment that fosters physical, mental, and spiritual growth.
      </p>

      <img
        src="src/assets/mission.jpg"
        className="py-12 md:w-2/5 h-1/2"
        alt=""
      />
    </div>
  );
};

export default MissionState;
