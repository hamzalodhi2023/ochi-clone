import React, { useEffect } from "react";
import data from "../data.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";

function Three_Cards() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  });

  const Three_Cards_Data = data.Three_Card;
  return (
    <>
      {Three_Cards_Data.map((item, index) => (
        <div
          key={index}
          data-aos="fade-left"
          className={` ${index === 0 && "w-[50vw]"} 
          ${index === 1 && "bg-[#212121]"}
          ${index === 2 && "bg-[#212121]"}

           card relative w-[25vw]  h-[65vh] rounded-[10px] bg-[#004D43] flex items-center justify-center`}
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
