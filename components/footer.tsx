import styles from '../styles/footer.module.css';

import { Icon } from '@iconify/react';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>© 2025 Emissio Audio</p>
        {/* <p className={styles.cryptic}>The silence speaks what words never could.</p> */}
      </div>
      <div className={styles.right}>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/rajat_rajput_/" target="_blank" rel="noopener noreferrer">
            <Icon icon="akar-icons:instagram-fill" className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/rajat-rajput-/" target="_blank" rel="noopener noreferrer">
            <Icon icon="akar-icons:linkedin-fill" className={styles.icon} />
          </a>
          <a href="https://youtube.com/@rajatrajput" target="_blank" rel="noopener noreferrer">
            <Icon icon="akar-icons:youtube-fill" className={styles.icon} />
          </a>
          <a href="https:X.com/rajat_rajput_/" target="_blank" rel="noopener noreferrer">
            <Icon icon="akar-icons:x-twitter-fill" className={styles.icon} />
          </a>
        </div>
        {/* <p className={styles.madeBy}>Made by Rajat</p> */}
      </div>
    </footer>
  );
}


