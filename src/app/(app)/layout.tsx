import styles from './app.module.scss';
import AppNav from './AppNav';
import PageName from './PageName';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.appWrapper}>
      <nav>
        <AppNav />
      </nav>

      <div className={styles.mainWrapper}>
        <header>
          <PageName />
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}
