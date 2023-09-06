import Logo from "@/components/Logo";
import styles from "./footer.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSections}>
        <Section>
          <div>
            <Logo scale={2} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            aspernatur quasi deserunt excepturi molestiae praesentium labore
            illum placeat vero, odit fugiat tempore at magnam sed! Eius,
            possimus. Cum, ut facere.
          </p>
        </Section>
        <Section title="Menu">
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </Section>
        <Section title="Menu">
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </Section>
        <Section title="Menu">
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </Section>
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
};

export default Footer;
