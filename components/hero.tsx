import styles from '../styles/hero.module.css';
import NavBar from './navbar';
import CornerInfo from './cornerinfo';
import CenterSection from './centersection';
// import Footer from './footer';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <NavBar />
      <CornerInfo />
      <CenterSection />
      {/* <Footer /> */}
    </div>
  );
}
