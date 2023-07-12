import Link from 'next/link';
import AppNav from './AppNav';
import PageName from './PageName';

import styles from './app.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.appWrapper}>
      <nav>
        <AppNav />
      </nav>

      <div className={styles.mainWrapper}>
        <header>
          <PageName />

          <span>
            <Link href='/'>lndng</Link>

            <Link href='/wrt' className={styles.write}>
              write
            </Link>
          </span>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}
