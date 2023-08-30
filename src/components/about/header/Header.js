import styles from './header.module.css'
const Header = () => {
  return (
    <div class={styles.header}>
        <div class={styles.nav}>
            <div class={styles.containerItem}>
            <div class={styles.item}>
                <h1>hi</h1>
                <h1>hola</h1>
            </div>
            <div class={styles.item}>
                <h1>hi</h1>
                <h1>hola</h1>
            </div>
            <div class={styles.item}>
                <h1>hi</h1>
                <h1>hola</h1>
            </div>
            </div>
            <div class={styles.containerItem}>
            <div class={styles.item}>
                <h1>hi</h1>
                <h1>hola</h1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header