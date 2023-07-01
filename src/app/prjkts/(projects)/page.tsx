import Link from 'next/link';
import styles from './projects.module.scss';

const PROTOTYPES = [
  {
    name: 'Redline',
    url: 'https://prjkt-redline.vercel.app',
    description: '',
  },
];

const IDEAS = [
  {
    name: 'Quarkify',
    url: 'https://www.quarkify.ai',
    description: '',
  },
];

export default function Prjkts() {
  return (
    <>
      <section className={styles.section}>
        <h1>Projects</h1>

        <p className={styles.description}>
          &emsp;As someone who is constantly coming up with ideas for new projects, I&apos;ve been needing a place to
          keep track and validate them. And so, here it is! For those who are curious,&nbsp;
          <Link href='/blg/how-i-track-ideas' style={{ color: '#dd2d44' }}>
            here
          </Link>
          &nbsp;is how I have constructed this personal service.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <h2>Prototype</h2>

          <p>Active, under development, projects</p>
        </div>

        {PROTOTYPES.map(({ name, url, description }) => {
          return (
            <div key={name} className={styles.idea}>
              <h3>{name}</h3>
              <iframe src={url} frameBorder={0} />
            </div>
          );
        })}
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <h2>Concepts</h2>

          <p>Early speculations and designs</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <h2>ideas</h2>

          <p>A queue of thoughts</p>
        </div>

        {IDEAS.map(({ name, url, description }) => {
          return (
            <div key={name} className={styles.idea}>
              <h3>{name}</h3>
            </div>
          );
        })}
      </section>
    </>
  );
}
