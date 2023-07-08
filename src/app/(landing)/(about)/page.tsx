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
        <p>Greetings! I&apos;m <Link target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/estefanhu/'>Estefan</Link> and this is my site.</p>

        <p>
          I&apos;ve been making for as long as I can remember. From board games, to stories, to physics theories, and
          now to software, creating has led my life especially through the hard times. There is something just so
          fulfilling to see people's lives bettered by the things that I made, knowing that what I have done has made
          the world just a little bit brighter. I think that&apos;s why I love software so much; empowered to build
          things that can touch hundreds, or thousands, and maybe one day millions of peoples lives really just
          motivates me to keep on building.
        </p>

        <p>
          While I have the heart of an inventor, I also have the mind of one. So to say there is ever just one thing
          I&apos;m working on would be aspirational at best, so, if you are interested you can check out my{' '}
          <Link href='/blg'>blog</Link> to see whatever has captured my attention currently.
        </p>

        <p>
          If you have something to say, or just want to say hi, please contact me{' '}
          <Link href='/contact?r=bio'>here</Link>.
        </p>

        <p>Best of wishes, and to those who know. Happy coding!</p>

        <p>- e.</p>
      </section>
    </main>
  );
}
