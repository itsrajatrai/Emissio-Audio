// components/CornerInfo.tsx
import styles from '../styles/cornerinfo.module.css';

export default function CornerInfo() {
    return (
      <div className={styles.gridWrapper}>
        <div className={styles.topLeft}>
          <p>Time Spent</p>
          <h2>3 Years</h2>
        </div>
        <div className={styles.topRight}>
          <p>Genre</p>
          <h2>Adventure</h2>
        </div>
        <div className={styles.bottomLeft}>
            <p>Director</p>
            <h2>Rajat Rai</h2>
        </div>
        <div className={styles.bottomRight}>
            <p>Production</p>
            <h2>Emissio Originals</h2>    
        </div>
      </div>
    );
  }