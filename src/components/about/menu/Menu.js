import React from 'react';
import Logo from '@/components/Logo';
import styles from './menu.module.css';

const MenuItem = ({ text }) => (
  <p className={styles.letterMenu}>{text}</p>
);

const GridItem = () => (
  <div className={styles.gridItem}>
    <button className={styles.gridButton}>Hey</button>
    <h1>Nuestra historia</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident
      modi veniam. Maiores distinctio accusantium nobis id dolorum, iusto quis
      laboriosam natus nostrum, dolorem consequatur perspiciatis provident
      deserunt, ut aut!
    </p>
  </div>
);

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.containerMenuNav}>
          <div className={styles.logo}>
            <Logo className={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.itemContainer}>
            <MenuItem text="Hello" />
            <MenuItem text="Hello" />
            <MenuItem text="Hello" />
          </div>
        </div>
      </div>

      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUs}>
          <h1>¿Quienes somos?</h1>
          <h1>
            Somos una empresa dedicada a la preparación y distribución de
            concreto premezclado en el Perú.
          </h1>
        </div>
      </div>

      <div className={styles.grid}>
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
    </>
  );
};

export default Menu;
