import Image from 'next/image';
import Link from 'next/link';
import styles from './landing.module.scss';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div>
          <h1>
            J. <span>Estefan</span> Hu
          </h1>
          <h2>Developer. Creator. Dreamer.</h2>
        </div>

        <div className={styles.imageWrapper}>
          <Image src='/images/me.webp' alt='me' priority fill sizes='(max-width: 1px) 100vw' />
        </div>
      </section>

      <section className={styles.bio}>
        <p>Howdy! My name is <Link target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/estefanhu/'>Estefan</Link> and I am a software developer @ <Link href='/rsm'>[insert company]</Link>.</p>

        <p>
          If you have something to say, or just want to say hi, please contact me{' '}
          <Link href='/contact?r=bio'>here</Link>.
        </p>

        <p>Best of wishes, and to those who know, happy coding!</p>

        <p>- e.</p>
      </section>
    </main>
  );
}
