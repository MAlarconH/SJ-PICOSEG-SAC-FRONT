import React from "react";
import IconPhone from "./icons/IconPhone";
import IconFacebook from "./icons/IconFacebook";
import IconWhatssap from "./icons/IconWhatssap";
import IconInstagram from "./icons/IconInstagram";
import IconEmail from "./icons/IconEmail";

const BarHead = () => {
  return (
    <div className={`bg-[#101685] flex justify-center py-5 lg:py-[10px]`}>
      <div className="flex flex-wrap items-center justify-center sm:justify-between w-full lg:max-w-[1120px] px-3 gap-4">
        <div className="flex max-sm:flex-col lg:items-center text-white text-[14px] gap-2">
          <div className="flex items-center">
            <IconEmail />
            <div className="lg:flex ml-2 mr-6">
              <p>Teléfono:</p>
              <p className="lg:ml-1">992657 950</p>
            </div>
          </div>
          <div className="flex items-center">
            <IconPhone />
            <div className="lg:flex ml-2">
              <p>Correo: </p>
              <p className="lg:ml-1">ventas@concretosjmr.com.pe</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full r w-[30px] h-[30px] lg:w-[24px] lg:h-[24px] bg-[#3B5998] flex items-center justify-center">
            <IconFacebook />
          </div>
          <div className="rounded-full r w-[30px] h-[30px] lg:w-[24px] lg:h-[24px] bg-[#25D366] flex items-center justify-center">
            <IconWhatssap />
          </div>
          <div className="rounded-full r w-[30px] h-[30px] lg:w-[24px] lg:h-[24px] bg-[#E1306C] flex items-center justify-center">
            <IconInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarHead;
