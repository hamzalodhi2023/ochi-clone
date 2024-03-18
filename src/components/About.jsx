import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[4vw] font-semibold leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] mt-20 border-[#859743]">
        <div className="w-1/2 ">
          <h1 className="text-6xl ">Our approach:</h1>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default About;
