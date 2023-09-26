import React from "react";

const TabsLogo = () => {
  return (
    <div className={`w-full lg:max-w-[1120px] my-5 m-auto px-3`}>
      <div className="flex justify-center">
        <img src="/assets/concretos/LogoCompany.png" alt="empresa-logo" width={294} />
      </div>
      <div className="flex justify-between text-[36px] text-[#101685] mt-[85px] font-bebasNeue font-medium">
        <p>INICIO</p>
        <p>SERVICIOS</p>
        <p>NOSOTROS</p>
        <p>CONTACTO</p>
      </div>
    </div>
  );
};

export default TabsLogo;
