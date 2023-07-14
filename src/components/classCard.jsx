import React from "react";

const ClassCard = (props) => {
  const { title, disc, img } = props;
  return (
    <div className="h-[200px] w-[300px] md:h-[450px] md:w-[400px] md:gap-2 bg-secondary rounded-xl my-12 cursor-pointer">
      <img
        src={img}
        className="h-[100px] w-[100%] object-cover rounded-t-xl md:h-[300px]"
        alt=""
      />
      <div className="px-4 flex flex-col">
        <h1 className="py-2 font-bold text-[24px] md:text-[28px] text-primary">
          {title}
        </h1>
        <p className="font-normal text-white text-[15px] md:text-[20px]">
          {disc}
        </p>
      </div>
    </div>
  );
};

export default ClassCard;
