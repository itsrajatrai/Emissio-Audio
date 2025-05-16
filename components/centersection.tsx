import styles from '../styles/centersection.module.css';
import Logo from './logo';
import WatchTrailer from './watchtrailer';
import PreBook from './prebook';

export default function CenterSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>The Call of</h1>
        <h1>Tejashila</h1>
      </div>
      <p className={styles.description}>
      In a dystopian Kashi, where the Kaliyuga fuels corruption and mechanical dominance, "The Call of Tejashila" unveils a world of religious persecution and societal decay. A hidden force rises to restore righteousness amidst a city overrun by malevolent machines and fractured devotion.
      </p>
      <div className={styles.gridRow}>
        <div className={styles.item}>
          <p>Premiere on</p>
          <h3>December 2025</h3>
        </div>
        <div className={styles.item}>
          <PreBook />
        </div>
        <div className={styles.item}>
          <WatchTrailer />
        </div>
        <div className={styles.item}>
          <p>Available On</p>
          <Logo />
        </div>
      </div>
    </div>
  );
}
