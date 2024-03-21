import React from "react";

function Card_Right({ card_2_Data }) {
  return (
    <div className="relative my-10 card w-[95%] h-[70vh] rounded-2xl  ">
      <h1 className="absolute z-[99] top-1/2 -translate-y-1/2 text-8xl right-full translate-x-1/2 font-semibold text-[#CDEA68]">
        {card_2_Data.text.split("").map((item, index) => (
          <span>{item}</span>
        ))}
      </h1>
      <div className="w-full h-full overflow-hidden rounded-2xl hover:scale-[0.9] transition-all">
        <img
          className="w-full h-full object-cover"
          src={card_2_Data.imageSource}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card_Right;
