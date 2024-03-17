import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-40 px-20">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => (
          <div key={index} className="masker ">
            <div className="w-fit flex items-center ">
              {index === 1 && (
                <div className="w-[9vw] h-[5.7vw] bg-red-500 rounded-md relative top-[0.5vw]"></div>
              )}
              <h1 className="uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-semibold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px]  border-zinc-800 mt-20 flex items-center justify-between py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start-the-project  flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
            Start The Project
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-zinc-500 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
