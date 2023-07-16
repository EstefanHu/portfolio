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
          I love stories. Epics, tales, folklore all work together to define the world that we navigate everyday.
          Software, as I see it, is the apotheosis of storytelling, and, as such, developers are storytellers. I think
          that&apos;s why I love coding so much, I become an alchemist, weaving data, bits, and pixels, to guide people,
          users, voyagers, down a fantasy of connection and computation. The power to define reality, for the
          betterment, or the very least entertainment, of others is what excites me so much about this engineering and
          is why I just can&apos;t stop coding.
        </p>

        <p>
          So what am I working on right now? Who knows! But you can browse my <Link href='/blg'>blog</Link> to see what
          I&apos;m writing about, follow my{' '}
          <Link target='_blank' rel='noopener noreferrer' href='https://twitter.com/_estefanhu'>
            Twitter
          </Link>{' '}
          to see what I&apos;m thinking about, or check out my{' '}
          <Link target='_blank' rel='noopener noreferrer' href='https://github.com/estefanhu/'>
            Github
          </Link>{' '}
          to see what I&apos;m committing to.
        </p>

        <p>
          If you would like to reach me, you can find me on{' '}
          <Link target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/estefanhu/'>
            LinkedIn
          </Link>
          , or send me a message <Link href='/cntct'>here</Link>.
        </p>

        <p>Best of wishes, and to those who know, happy coding!</p>

        <p>- e.</p>
      </section>
    </div>
  );
}
