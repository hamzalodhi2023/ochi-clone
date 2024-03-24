import { motion } from "framer-motion";
import React, { useState } from "react";

function Card_Left({ card_1_Data }) {
  const [isHovering, setHovering] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative my-10 card w-[95%] h-[70vh] rounded-2xl  "
    >
      <h1 className="absolute overflow-hidden flex z-[99] top-1/2 -translate-y-1/2 text-8xl left-full -translate-x-1/2 font-semibold text-[#065248]">
        {card_1_Data.text.split("").map((item, index) => (
          <motion.span
            initial={{ y: "100%" }}
            animate={
              isHovering
                ? { y: "0%", zIndex: "0" }
                : { y: "100%", zIndex: "99" }
            }
            transition={{ ease: [0.87, 0, 0.13, 1], delay: index * 0.06 }}
            className="inline-block "
          >
            {item}
          </motion.span>
        ))}
      </h1>
      <div className="w-full h-full overflow-hidden rounded-2xl hover:scale-[0.9] transition-all">
        <img
          className="w-full h-full object-cover"
          src={card_1_Data.imageSource}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card_Left;
