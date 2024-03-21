import React from "react";
import Card_Left from "./Card_Left";

function Featured() {
  const card_1_Data = [
    {
      imageSource:
        "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
      text: "FYDE",
    },
  ];
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-6xl tracking-tight ">Featured projects</h1>
      </div>
      <div className="cards flex gap-10 px-20 py-20 ">
        {card_1_Data.map((item, index) => (
          <Card_Left card_1_Data={item} />
        ))}
      </div>
    </div>
  );
}

export default Featured;
