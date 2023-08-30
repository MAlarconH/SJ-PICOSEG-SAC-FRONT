import styles from './menu.module.css'

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.containerMenuNav}>
          <div className={styles.logo}></div>
          <div className={styles.itemContainer}>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
          </div>
        </div>
      </div>

      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUs}>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </div>

      <div className={styles.grid}>
        <div class={styles.item}>Item 1</div>
        <div class={styles.item}>Item 2</div>
        <div class={styles.item}>Item 3</div>
        <div class={styles.item}>Item 4</div>
        <div class={styles.item}>Item 5</div>
        <div class={styles.item}>Item 6</div>
      </div>
    </>
  );
}

export default Menu