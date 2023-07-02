import Link from 'next/link';
import styles from './projects.module.scss';

const PROTOTYPES = [
  {
    name: 'redline',
    status: 'inactive',
    description: 'A simple, collaborative CMS for writers',
  },
  {
    name: 'jericho',
    status: 'active',
    description: 'A full life cycle idea tracker',
  },
];

const CONCEPTS = [
  {
    name: 'quarkify',
    description: '',
  },
];

const IDEAS = [
  {
    name: 'meta muse',
    description: 'A localized mesh network api',
  },
  {
    name: 'identity generator',
    description:
      'Given a growing set of events, I want to construct 1. A distilled accumulation of all my events into one entry and 2. have a timeline of all my events',
  },
];

export default function Prjkts() {
  return (
    <div className={styles.page}>
      <section>
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

      <section>
        <div className={styles.header}>
          <h2>Prototype</h2>

          <p>Active, under development, projects</p>
        </div>

        {PROTOTYPES.map(({ name, status, description }) => {
          return (
            <Link key={name} href={`/prjkts/prototypes?name=${name}`}>
              <div className={styles.card}>
                <p className={styles.status}>{status}</p>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </Link>
          );
        })}
      </section>

      <section>
        <div className={styles.header}>
          <h2>Concepts</h2>

          <p>Early speculations and designs</p>
        </div>

        {CONCEPTS.map(({ name, description }) => {
          return (
            <Link key={name} href={`/prjkts/concepts?name=${name}`}>
              <div className={styles.card}>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </Link>
          );
        })}
      </section>

      <section>
        <div className={styles.header}>
          <h2>ideas</h2>

          <p>A queue of thoughts</p>
        </div>

        {IDEAS.map(({ name, description }) => {
          return (
            <div key={name} className={styles.card}>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
