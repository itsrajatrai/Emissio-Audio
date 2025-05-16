'use client';

import { Play } from 'lucide-react';
import styles from '../styles/watchtrailer.module.css';

export default function WatchTrailer() {
  return (
    <div className={styles.trailer}>
      <div className={styles.playIcon}>
        <Play size={24} strokeWidth={2.5} />
      </div>
      <span className={styles.text}>Listen 
        <div className={styles.trailerText}>
            Trailer
        </div>
        </span>
    </div>
  );
}
