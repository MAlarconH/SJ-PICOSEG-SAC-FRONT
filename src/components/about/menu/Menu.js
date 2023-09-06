import Logo from '@/components/Logo';
import styles from './menu.module.css'

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.containerMenuNav}>
          <div className={styles.logo}>
            <Logo className={{ objectFit: "cover" }} />
          </div>
          <div className={styles.itemContainer}>
            <p className={styles.letterMenu}>Hello</p>
            <p className={styles.letterMenu}>Hello</p>
            <p className={styles.letterMenu}>Hello</p>
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
        <div class={styles.item}>
          <button className={styles.gridButton}>Hey</button>
          <div
            className={styles.gridItem}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "300px",
              width: "90%",
              backgroundColor: "red",
            }}
          >
            <h1>Nuestra historia</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              provident modi veniam. Maiores distinctio accusantium nobis id
              dolorum, iusto quis laboriosam natus nostrum, dolorem consequatur
              perspiciatis provident deserunt, ut aut!
            </p>
          </div>
        </div>
        <div class={styles.item}>
          <button className={styles.gridButton}>Hey</button>
          <div
            className={styles.gridItem}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "300px",
              width: "90%",
              backgroundColor: "red",
            }}
          >
            <h1>Nuestra historia</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              provident modi veniam. Maiores distinctio accusantium nobis id
              dolorum, iusto quis laboriosam natus nostrum, dolorem consequatur
              perspiciatis provident deserunt, ut aut!
            </p>
          </div>
        </div>
        <div class={styles.item}>
          <button className={styles.gridButton}>Hey</button>
          <div
            className={styles.gridItem}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "300px",
              width: "90%",
              backgroundColor: "red",
            }}
          >
            <h1>Nuestra historia</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              provident modi veniam. Maiores distinctio accusantium nobis id
              dolorum, iusto quis laboriosam natus nostrum, dolorem consequatur
              perspiciatis provident deserunt, ut aut!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;