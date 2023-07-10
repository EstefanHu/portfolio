import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.scss';

export default function Home() {
  return (
    <div className={styles.wrapper}>
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
        <p>
          Howdy! My name is{' '}
          <Link target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/estefanhu/'>
            Estefan
          </Link>{' '}
          and I am a software developer @ <Link href='/rsm'>[insert company]</Link>.
        </p>

        <p>
          If you would like to reach me, you can find me on{' '}
          <Link target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/estefanhu/'>
            LinkedIn
          </Link>.
        </p>

        <p>Best of wishes, and to those who know, happy coding!</p>

        <p>- e.</p>
      </section>
    </div>
  );
}
