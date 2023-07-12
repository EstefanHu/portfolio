import Link from 'next/link';
import styles from './write.module.scss';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.write}>
      <header>
        <Link href='/dsh'>E</Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
