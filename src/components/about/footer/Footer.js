import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerSections}>
            <div className={styles.section}></div>
            <div className={styles.section}>
                <div className={styles.sectionItem}>

                </div>
                <div className={styles.sectionItem}>

                </div>
            </div>
            <div className={styles.section}></div>
        </div>
        <div className={styles.footerDow}>
            <h1>alao asds</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, obcaecati cupiditate! Eaque quaerat minima quibusdam non veritatis laboriosam, inventore sed, tenetur ipsam voluptas, impedit veniam libero. Id aut recusandae rerum?</p>
        </div>
    </div>
  )
}

export default Footer