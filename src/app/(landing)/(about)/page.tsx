import styles from './landing.module.scss';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <h1>
        J. <span>Estefan</span> Hu
      </h1>
      <h2>Web Developer</h2>

      <section>
        <h3>To make, or not to make</h3>
      </section>
    </main>
  );
}
