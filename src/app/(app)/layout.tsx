import styles from './app.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.appWrapper}>
      <header></header>
      <main>{children}</main>
    </div>
  );
}
