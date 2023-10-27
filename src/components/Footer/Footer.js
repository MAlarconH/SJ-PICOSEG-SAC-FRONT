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
          
            <Section title="Menú">
              <ul>
                <SectionItem>Servicio de bomba</SectionItem>
                <SectionItem>Concretos</SectionItem>
                <SectionItem>Nosotros</SectionItem>
                <SectionItem>Contacto</SectionItem>
              </ul>
            </Section>
            <Section title="Legal">
                <ul>
                  <SectionItem>-</SectionItem>
                  <SectionItem>-</SectionItem>
                  <SectionItem>-</SectionItem>
                  <SectionItem>-</SectionItem>
                </ul>
              </Section>
              <Section  title="Encuéntranos">
              <ul>
                <SectionItem>Servicio de bomba</SectionItem>
                <SectionItem>Concretos</SectionItem>
                <SectionItem>Nosotros</SectionItem>
                <SectionItem>Contacto</SectionItem>
              </ul>
            </Section>
        </div>
      </div>

      <div className={styles.footerDow}>
      <div className={styles.section18}>
                <div className={styles.div32}>
                  <div className={styles.div33}>
                    <p className="elementconcretos"> 2023 Concretos JMR is Proudly Powered</p>
                    <img className="elementsvg" alt="Element svg" src="26a1-svg.svg" />
                    <div className="anddeveloped"> and Developed by</div>
                    <div className="linkstrong">
                      <div className="textwrapper28">Marketing Lab</div>
                    </div>
                  </div>
                  <div className="div27">
                    <p className="textwrapper29">
                      Reservados todos los derechos. No se permite la reproduccion total o parcial de este sitio web en
                      cualquier forma o por cualquier medio sin auntorizacion previa y por escrito.
                    </p>
                  </div>
                </div>
              </div>
      </div>
    </div>
  );
};

export default Footer;