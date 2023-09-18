import React from "react";

const CardQuantity = ({ text }) => {
  return (
    <div className="rounded-[5px] relative flex items-center bg-[#012F5B] py-[160px]">
      <div className="absolute top-0 rounded-t-[5px] bg-[#0B76F2] h-[10px] w-full"></div>
      <p
        className="px-[50px] text-[44px] text-white leading-[52.8px] tracking-[2.1px] text-center font-bebasNeue"
      >
        {text}
      </p>
    </div>
  );
};

export default CardQuantity;
