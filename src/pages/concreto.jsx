import React from "react";
import ConcretoContainer from "@/containers/Concreto";
import BarHead from "@/components/BarHead";
import TabsLogo from "@/components/TabsLogo";

const ConcretoPage = () => {
  return (
    <section>
      <BarHead />
      <TabsLogo />
      <ConcretoContainer />
    </section>
  );
};

export default ConcretoPage;
