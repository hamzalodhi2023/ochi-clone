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
  ];
  const card_2_Data = [
    {
      imageSource:
        "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
      text: "VISE",
    },
  ];

  const cardsArr = [card_1_Data];

  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-6xl tracking-tight ">Featured projects</h1>
      </div>
      <div className="w-full cards flex justify-evenly flex-wrap py-20 ">
        {cardsArr.map((card, i) => (
          <>
            {card.map((item, index) => (
              <Card_Left key={index} card_1_Data={item} />
            ))}
            {card.map((item, index) => (
              <Card_Right key={index} card_2_Data={item} />
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

export default Featured;
