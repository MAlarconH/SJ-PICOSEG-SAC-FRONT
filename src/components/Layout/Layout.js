import Head from 'next/head';
import Header from '../Header/Header';
import styles from './Layout.module.scss';
import Navigation from '../navigation';
import Footer from '../Footer/Footer';
import Contact from '../contact/Contact';

const Layout =({
    children,
    className, ...rest}) =>{
    return(
        
        <div className={styles.layout}>
            <Header/>
            <Navigation/>
            <main className={styles.main}>{children}</main>
            <Contact/>
            <Footer/>
        </div>
        
    );
};
export default Layout;