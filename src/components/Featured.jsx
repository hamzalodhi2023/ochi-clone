import React from "react";
import Card_Left from "./Card_Left";
import Card_Right from "./Card_Right";

function Featured() {
  const card_1_Data = [
    {
      imageSource:
        "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
      text: "FYDE",
    },
    {
      imageSource:
        "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
      text: "TRAWA",
    },
  ];
  const card_2_Data = [
    {
      imageSource:
        "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
      text: "VISE",
    },
    {
      imageSource:
        "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
      text: "PREMIUM\xa0BLEND",
    },
  ];

  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-6xl tracking-tight ">Featured projects</h1>
      </div>
      <div className="w-full cards flex justify-evenly ">
        <div className="left w-1/2 py-20 flex items-center justify-start flex-col">
          {card_1_Data.map((item, index) => (
            <Card_Left card_1_Data={item} />
          ))}
        </div>
        <div className="right w-1/2 py-20 flex items-center justify-start flex-col">
          {card_2_Data.map((item, index) => (
            <Card_Right card_2_Data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
