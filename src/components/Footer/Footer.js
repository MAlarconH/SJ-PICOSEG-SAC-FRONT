import Logo from "@/components/Logo";
import styles from "./footer.module.css";

const commonTextStyle = {
  color: "#FFF",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
};

const commonTitleStyle = {
  color: "#C7B0E2",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "19.2px",
  textTransform: "uppercase",
};

const SectionItem = ({ children }) => {
  return <li style={commonTextStyle}>{children}</li>;
};

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      {title && <h2 style={commonTitleStyle}>{title}</h2>}
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.containerContent}>
        <div className={styles.sectionLogo}>
          <div>
            <Logo scale={2} />
          </div>
          <p style={{ ...commonTextStyle, textAlign: "center" }}>
          En PICOSEG, estamos comprometidos con la excelencia en la industria de la construcción. Como empresa líder en Lima, Perú, nos enorgullece ofrecer servicios de bombeo de concreto premezclado y la venta de concreto de diseño personalizado para una amplia gama de proyectos y necesidades.
          </p>
        </div>

        <div className={styles.footerSections}>
          <div className={styles.section}>
            <div>
              <Logo scale={2} />
            </div>
            <p style={{ ...commonTextStyle, textAlign: "center" }}>
            En PICOSEG, estamos comprometidos con la excelencia en la industria de la construcción. Como empresa líder en Lima, Perú, nos enorgullece ofrecer servicios de bombeo de concreto premezclado y la venta de concreto de diseño personalizado para una amplia gama de proyectos y necesidades.
            </p>
          </div>
          {[1, 2, 3].map((item) => (
            <Section key={item} title="Menu">
              <ul>
                <SectionItem>Hi</SectionItem>
                <SectionItem>Hi</SectionItem>
                <SectionItem>Hi</SectionItem>
                <SectionItem>Hi</SectionItem>
              </ul>
            </Section>
          ))}
        </div>
      </div>

      <div className={styles.footerDow}>
        <h1
          style={{
            ...commonTextStyle,
            textAlign: "center",
          }}
        >
          alao asds
        </h1>
        <p
          style={{
            ...commonTextStyle,
            color: "rgba(255, 255, 255, 0.66)",
            fontSize: "12px",
            lineHeight: "18px",
            textAlign: "center",
          }}
        >
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