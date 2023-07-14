import React from "react";

const ReviewCard = (props) => {
  const { name, disc, img } = props;
  return (
    <div
      className={`"max-h-[50px] w-[300px]  bg-secondary rounded-xl  cursor-pointer`}
    >
      <div className={`flex rounded-xl]`}>
        <img
          className="w-[60px] h-[60px] rounded-full object-cover mx-8 my-2"
          src={img}
          alt=""
        />
        <h1 className="self-center mx-7 font-semibold text-primary text-[20px]">
          {name}
        </h1>
      </div>
      <p className="flex mx-6 my-2 text-center text-white">{disc}</p>
    </div>
  );
};

export default ReviewCard;
