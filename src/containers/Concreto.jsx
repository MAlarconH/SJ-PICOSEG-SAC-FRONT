import React from "react";
import CardQuantity from "../components/Concreto/CardQuantity";
import Button from "@/components/shared/Button";
import styles from "./Concreto.module.css";

const ConcretoContainer = () => {
  return (
    <section>
      <div
        className={`flex justify-center items-center h-[284px] ${styles.concretoWorking}`}
      >
        <p className="text-[70px] text-white font-bebasNeue uppercase">
          concretos
        </p>
      </div>
      <div className="relative">
        <img
          src="/assets/concretos/ConcretoOverlay.png"
          alt=""
          className="w-full h-full absolute object-cover top-0 left-0 z-0"
        />
        <div className="flex justify-between gap-[50px] max-lg:flex-col max-w-[1120px] m-auto py-[45px] lg:py-[90px] px-5 relative z-10">
          <div className="flex flex-col items-center max-w-[450px]">
            <div>
              <p className="uppercase text-[50px] font-bebasNeue">Productos</p>
              <p className="mt-5 text-gray">
                Contamos con concretos premezclado,{" "}
                <strong>
                  de todo tipo de resistencia, también tenemos ladrillo de
                  concreto cachaco, taquitos, plaquetas, caja de agua y desagüe.
                </strong>
              </p>
              <p className="text-gray mt-4">
                También, tenemos{" "}
                <strong>
                  gran variedad de productos que te ayudarán en tu proyecto de
                  construcción,
                </strong>
                obras, veredas, placas, losas, sardineles, techos, disponible
                distrito de Ancón, santa rosa, puente piedra, pachacutec,
                ventanilla, todo cono norte, (Huaral, chancay).
              </p>
            </div>
            <Button className="mt-[60px]">Realiza tu cotización</Button>
          </div>
          <img
            src="/assets/concretos/ConcretoMachineIron.png"
            alt=""
            className="w-full lg:w-[570px] h-auto"
          />
        </div>
      </div>
      <div className="bg-blueDark flex max-lg:flex-wrap">
        <img
          src="/assets/concretos/concretoImage.png"
          alt=""
          className="w-full lg:w-[60%] object-cover"
        />
        <div className="flex flex-col items-center text-white px-[40px] pt-[60px] pb-[50px] lg:pt-[120px] lg:pb-[95px]">
          <div>
            <div className="text-[47px] font-bebasNeue">
              Concreto Premezclado
            </div>
            <div className="flex flex-col gap-[15px] max-w-[485px] mt-[20px] text-grayLight">
              <p className="">
                En la actualidad, el concreto premezclado es un gran aliado en
                la industria de la construcción; este material se prepara desde
                la planta para aplicarse directamente en la obra, los materiales
                que se usan para hacer concreto son cemento, agua, arena, grava,
                aditivos y fibras.
              </p>
              <p className="">
                La manera en que cada elemento se calibra  y agrega en la
                producción  de concreto dependerá de las necesidades de
                resistencia, durabilidad y textura,   según el tipo de
                estructura, en la que trabaje.
              </p>
              <p className="">
                Hay máquinas especiales que controlan de manera homogénea todo
                el proceso de la mezcla.
              </p>
              <p className="">
                Sin embargo, es importante decir que esto, por sí mismo, no
                garantiza  la calidad general de la estructura, pues además de
                que el producto debe cumplir con su cualidad de ser un elemento
                de colocación fresca en obra, también es necesario que se cumpla
                con las prácticas correctas de colocación, compactación,
                protección y curado del concreto.
              </p>
              <p>
                CONCRETOS JMR, te garantiza un servicio completo de principio a
                fin, para asegurar la calidad del producto y su integración en
                la obra. Si quieres saber más sobre este proceso, ponte en
                contacto con nosotros.
              </p>
            </div>
          </div>
          <Button className="mt-[60px]">Realiza tu cotización</Button>
        </div>
      </div>
      <div className="relative">
        <img
          src="/assets/concretos/ConcretoOverlay2.png"
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="max-w-[1120px] m-auto py-[55px] lg:py-[110px] px-[5%]">
          <div className="relative z-10">
            <p className="text-[49px] max-w-[525px] leading-[60px] font-bebasNeue">
              LA SOSTENIBILIDAD DE CONCRETO COMO BENEFICIO PARA LA SOCIEDAD
            </p>
            <div className="flex flex-col gap-[15px] max-w-[450px] mt-4">
              <p className="text-gray">
                El uso del concreto juega un papel muy importante aunque casi
                siempre pase desapercibido. El concreto es el material fabricado
                por el hombre más utilizado en el mundo y contribuye beneficios
                a la sociedad, tan importantes que, sin él muchas de las cosas
                que vemos cotidianamente, no existirían. Como por ejemplo, los
                colegios, hospitales, edificios, iglesia.
              </p>
              <strong className="text-gray">
                Características del Concreto Resistencia y Durabilidad 
              </strong>
              <p className="text-gray">
                Por su resistencia, se utiliza en la mayoría de los edificios,
                puentes, túneles, sistema de alcantarillado, aceras, pavimentos,
                casas,departamentos. Gana resistencia con el tiempo y no se
                debilita por la humedad, el moho o plagas.
              </p>
              <p className="text-gray">
                Las estructuras de concreto pueden soportar desastres naturales
                tales como: terremotos. Un ejemplo claro son los edificios
                romanos con más de 1.500 años de antigüedad como El Coliseo, qué
                aún continúa de pie a pesar de los años gracias a la resistencia
                y durabilidad del concreto.
              </p>
            </div>
            <Button className="mt-[60px]">Realiza tu cotización</Button>
          </div>
        </div>
      </div>
      <div className="bg-blueDark flex max-lg:flex-wrap">
        <img
          src="/assets/concretos/concretoImage.png"
          alt=""
          className="w-full lg:w-[50%] object-cover"
        />
        <div className="flex flex-col items-center justify-center text-white px-[40px] pt-[60px] pb-[50px] lg:pt-[120px] lg:pb-[95px]">
          <div>
            <div className="text-[47px] font-bebasNeue">
              BLOQUES DE CONCRETO
            </div>
            <div className="text-grayLight">
              <p className="max-w-[490px] mt-[20px]">
                El block de concreto es un elemento que se ha venido utilizando
                como sustitución de otros materiales como el ladrillo.
                Actualmente su uso se ha vuelto muy popular debido a todas las
                ventajas que tiene, así como el bajo costo que maneja. 
              </p>
              <p className="mt-[15px] max-w-[487px]">
                Está diseñado para la albañilería confinada y armada; su base de
                cemento, arena y agregados, son de una gran resistencia
                estructural. También, es utilizado como sistema
                constructivo, debido a que es un producto muy versátil.
              </p>
            </div>
          </div>
          <Button className="mt-[60px]">Realiza tu cotización</Button>
        </div>
      </div>
      <div className="relative">
        <img
          src="/assets/concretos/ConcretoOverlay2.png"
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="flex max-lg:flex-col justify-between gap-10 lg:gap-[50px] max-w-[1180px] m-auto relative z-10 pt-[53px] pb-[60px] lg:pt-[106px] lg:pb-[120px] px-5">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <p className="text-[50px] leading-[60px] uppercase font-bebasNeue">
                Tipos de Concretos
              </p>
              <p className="mt-5 text-gray max-w-[450px]">
                Te ofrecemos <strong>diversos tipo de concretos</strong> con
                diferentes resistencias, dependiendo del proyectos que deseas
                realizar.
              </p>
            </div>
            <div className="flex max-lg:flex-wrap max-lg:justify-center gap-[30px] mt-[70px]">
              <CardQuantity text="Fc”100 kg/cm2" />
              <CardQuantity text="Fc”140 kg/cm2" />
            </div>
            <Button className="mt-[60px]">Realiza tu cotización</Button>
          </div>
          <img
            src="/assets/concretos/ConcretoFloor.png"
            alt=""
            className="w-full lg:max-w-[535px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ConcretoContainer;
