import { EmailIcon, FacebookIcon, InstagramIcon, PhoneIcon, WhatsAppIcon } from '@/components/icons/SocialIcons'
import styles from './header.module.css'
const Header = () => {
  return (
    <div class={styles.header}>
      <div class={styles.nav}>
        <div class={styles.containerItem}>
          <div class={styles.item}>
            <PhoneIcon />
            <h1>Teléfono: 999999999</h1>
          </div>
          <div class={styles.item}>
            <EmailIcon />
            <h1>Correo: ejemplo@gmail.com</h1>
          </div>
        </div>
        <div class={styles.containerItem}>
          <WhatsAppIcon />
          <InstagramIcon />
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
}

export default Header