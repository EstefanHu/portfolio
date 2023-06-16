import Link from 'next/link';
import styles from './landing.module.scss';

export default function Home() {
  return (
    <>
      <h1 className={styles.name}>
        J. <span>Estefan</span> Hu
      </h1>
      <p>Web Developer</p>
    </>
  );
}
