import Image from 'next/image';
import styles from './landing.module.scss';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div>
          <h1>
            J. <span>Estefan</span> Hu
          </h1>
          <h2>Web Developer</h2>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src='/images/me.webp'
            alt='me'
            priority
            objectFit='cover'
            fill
          />
        </div>
      </section>

      <section>
        <h3>To make, or not to make</h3>
      </section>
    </main>
  );
}
