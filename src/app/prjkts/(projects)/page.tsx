import Link from 'next/link';
import styles from './projects.module.scss';

export default function Prjkts() {
  return (
    <div className={styles.wrapper}>
      <section>
        <h2>Things Im working on</h2>
      </section>

      <section>
        <h2>elephant graveyard</h2>
      </section>
    </div>
  );
}
