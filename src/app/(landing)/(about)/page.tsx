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
            fill
            sizes='100%'
          />
        </div>
      </section>

      <section className={styles.bio}>
        <div>
          <h3>A bit about me</h3>

          <p></p>
        </div>
      </section>
    </main>
  );
}
