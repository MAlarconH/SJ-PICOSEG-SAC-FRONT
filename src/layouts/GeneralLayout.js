import Logo from '../components/Logo';
import Header from '../components/Header/Header';
import styles from './Layout.module.css';
import Navigation from '../components/navigation';
import { useRouter } from 'next/router';

/* const Layout =({
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
}; */

export const GeneralLayout = ({ children }) => {
  const router = useRouter();

  const navigateTo = (route) => {
    router.push(route);
  };
    return (
      <div>
        <Header />
        <div className={styles.logo} >
                <Logo scale={3} />
        </div>
            
        <Navigation navigateTo={navigateTo}/>
        {children}
      </div>
    );
  };
  