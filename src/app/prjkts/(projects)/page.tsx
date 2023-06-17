import styles from './projects.module.scss';

const PROJECTS = [
  {
    name: 'Quarkify',
    url: 'https://www.quarkify.ai',
    description: '',
  },
];

const IDEAS = [
  {
    name: 'Redline',
    url: 'https://www.quarkify.ai',
    description: '',
  },
];

export default function Prjkts() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <h2>active projects</h2>
          <p>Things Im actively working on</p>
        </div>

        {PROJECTS.map(({ name, url, description }) => {
          return (
            <div key={name} className='card'>
              <h3>{name}</h3>
            </div>
          );
        })}
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <h2>suspended ideas</h2>
          <p>A queue of ideas</p>
        </div>

        {IDEAS.map(({ name, url, description }) => {
          return (
            <div key={name} className='card'>
              <h3>{name}</h3>
            </div>
          );
        })}
      </section>
    </>
  );
}
