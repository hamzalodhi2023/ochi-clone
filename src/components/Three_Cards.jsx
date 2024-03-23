import React from "react";
import data from "../data.json";

function Three_Cards() {
  const Three_Cards_Data = data.Three_Card;
  return (
    <>
      {Three_Cards_Data.map((item, index) => (
        <div
          key={index}
          className={` ${
            index === 0 && "w-[50vw] bg-[#095249]"
          } card relative w-[25vw]  h-[65vh] rounded-[10px] bg-[#212121] flex items-center justify-center`}
        >
          <img src={item.imageSource} alt="" className="w-[10rem] " />
          <button className="absolute bottom-3 text-sm  left-3 py-1 px-4 border-[1px] rounded-3xl">
            {item.buttonText}
          </button>
        </div>
      ))}
    </>
  );
}

export default Three_Cards;
