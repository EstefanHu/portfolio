import Link from 'next/link';
import Logo from '@/components/Logo';

import styles from './app.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.appWrapper}>
      <nav>
        <Link href='/dshbrd'>
          <Logo />
        </Link>
      </nav>

      <div className={styles.appWrapper}>
        <header></header>

        <main>{children}</main>
      </div>
    </div>
  );
}
