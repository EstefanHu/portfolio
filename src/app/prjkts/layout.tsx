import styles from './layout.module.scss';

export default function BlgLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.wrapper}>
      {children}
    </main>
  );
}
