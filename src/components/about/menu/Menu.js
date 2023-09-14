import React from "react";
import Logo from "@/components/Logo";
import styles from "./menu.module.css";
import { Button } from "@/components/ui/Buttons";
import { imgFontGrid, sectionImg } from "../../../../public";
import Image from "next/image";

const MenuItem = ({ text }) => <p className={styles.letterMenu}>{text}</p>;

const GridItem = ({ img }) => {
  return !img ? (
    <div className={styles.gridItem}>
      <button className={styles.gridButton}>
        <Button />
      </button>
      <h1
        style={{
          color: "#000",
          fontFamily: "Bebas Neue",
          fontSize: "35px",
          fontStyle: "normal",
          fontWeight: "200",
          lineHeight: "44px",
        }}
      >
        Nuestra historia
      </h1>
      <p
        style={{
          color: "#000",
          fontFamily: "Bebas Neue",
          fontSize: "22px",
          fontStyle: "normal",
          fontWeight: "105",
          lineHeight: "27px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        provident modi veniam. Maiores distinctio accusantium nobis id dolorum,
        iusto quis laboriosam natus nostrum, dolorem consequatur perspiciatis
        provident deserunt, ut aut!
      </p>
    </div>
  ) : (
    <div style={{
      padding: "4rem",
    }}>
    <Image src={imgFontGrid} style={{objectFit: "cover"}} />

    </div>
  );
};

const Menu = () => {
  return (
    <div style={{ padding: "5px" }}>
      <div className={styles.menu}>
        <div className={styles.containerMenuNav}>
          <div className={styles.logo}>
            <Logo scale={2} />
          </div>
          <div className={styles.itemContainer}>
            <p
              style={{
                color: "#101685",
                fontFamily: "Bebas Neue",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "54px",
              }}
            >
              Hello
            </p>
            <p
              style={{
                color: "#101685",
                fontFamily: "Bebas Neue",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "54px",
              }}
            >
              Hello
            </p>
            <p
              style={{
                color: "#101685",
                fontFamily: "Bebas Neue",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "54px",
              }}
            >
              Hello
            </p>
          </div>
        </div>
      </div>

      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsFilter}></div>
        <div className={styles.aboutUs}>
          <h1
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Bebas Neue",
              fontSize: "35px",
              fontStyle: "normal",
            }}
          >
            ¿Quienes somos?
          </h1>
          <h1
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Bebas Neue",
              fontSize: "25px",
              fontStyle: "normal",
            }}
          >
            Somos una empresa dedicada a la preparación y distribución de
            concreto premezclado en el Perú.
          </h1>
        </div>
      </div>    
    </div>
  );
};

export default Menu;
