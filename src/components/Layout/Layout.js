import Head from 'next/head';
import Logo from '../Logo';
import Header from '../Header/Header';
import styles from './Layout.module.css';
import Navigation from '../navigation';
import Footer from '../Footer/Footer';
import Contact from '../contact/Contact';

const Layout =({
    children,
    className, ...rest}) =>{
    return(
        
        <div className={styles.layout}>
            <Header/>
            <div className={styles.logo} >
                <Logo scale={3} />
            </div>
            
            <Navigation/>
            <main className={styles.main}>{children}</main>
            <Contact/>
            <Footer/>
        </div>
        
    );
};
export default Layout;