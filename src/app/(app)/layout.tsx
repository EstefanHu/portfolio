import Link from 'next/link';
import Logo from '@/components/Logo';

import styles from './app.module.scss';
import AppNav from './AppNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.appWrapper}>
      <nav>
        <AppNav />
      </nav>

      <div className={styles.mainWrapper}>
        <header></header>

        <main>{children}</main>
      </div>
    </div>
  );
}
