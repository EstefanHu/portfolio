import Link from 'next/link';
import styles from './landing.module.scss';

const READS = [
  {
    title: 'Who am I',
    url: '/blg/p/who-am-i',
    createdAt: 'Jan 07 1996',
  },
  {
    title: 'A Meta Modern Maker',
    url: '/blg/p/a-meta-modern-maker',
    createdAt: 'Jun 20 2023',
  },
];

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.name}>
        J. <span>Estefan</span> Hu
      </h1>
      <p className={styles.headliner}>Web Developer</p>

      <section>
        <h2>Reads</h2>

        {READS.map(({ title, url }) => (
          <Link key={title} href={url}>
            <article>
              <h3>{title}</h3>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
