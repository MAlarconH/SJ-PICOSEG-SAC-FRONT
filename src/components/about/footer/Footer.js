import Logo from "@/components/Logo"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSections}>
        <div className={styles.section}>
          <div className={styles.sectionItem}>
            <Logo />
          </div>
          <div className={styles.sectionItem}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aspernatur quasi deserunt excepturi molestiae praesentium labore
              illum placeat vero, odit fugiat tempore at magnam sed! Eius,
              possimus. Cum, ut facere.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <ul>
            <label> Menú</label>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
        <div className={styles.section}>
          <ul>
            <label> Menú</label>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
        <div className={styles.section}>
          <ul>
            <label> Menú</label>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerDow}>
        <h1>alao asds</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          obcaecati cupiditate! Eaque quaerat minima quibusdam non veritatis
          laboriosam, inventore sed, tenetur ipsam voluptas, impedit veniam
          libero. Id aut recusandae rerum?
        </p>
      </div>
    </div>
  );
}

export default Footer