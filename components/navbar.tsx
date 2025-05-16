
import styles from '../styles/navbar.module.css';
import Logo from './logo';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
      <Logo />
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Pre-Launch</a></li>
        <li><a href="#">Creators</a></li>
      </ul>
    </nav>
  );
}
