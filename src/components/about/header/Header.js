import React from 'react';
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  WhatsAppIcon,
} from '@/components/icons/SocialIcons';
import styles from './header.module.css';

const HeaderItem = ({ icon, text }) => (
  <div className={styles.item}>
    {icon}
    <h1>{text}</h1>
  </div>
);

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.containerItem}>
          <HeaderItem icon={<PhoneIcon />} text="Teléfono: 999999999" />
          <HeaderItem icon={<EmailIcon />} text="Correo: ejemplo@gmail.com" />
        </div>
        <div className={styles.containerItem}>
          <WhatsAppIcon />
          <InstagramIcon />
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
