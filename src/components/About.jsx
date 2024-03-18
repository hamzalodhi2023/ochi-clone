import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[4vw] font-semibold leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="flex gap-5 w-full border-t-[1px] pt-20 mt-20 border-[#859743]">
        <div className="w-1/2 ">
          <h1 className="text-7xl ">Our approach:</h1>
          <button className=" flex gap-10 items-center px-10  py-6 bg-zinc-900 rounded-full text-white mt-10">
            READ MORE
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-red-700 overflow-hidden">
          <img
            src="src/assets/Homepage-Photo-663x469.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
