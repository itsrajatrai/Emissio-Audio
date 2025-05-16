// components/Logo.tsx
import styles from '../styles/logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.emissio}>Emissio</div>
      <div className={styles.audio}>Audio</div>
    </div>
  );
}
