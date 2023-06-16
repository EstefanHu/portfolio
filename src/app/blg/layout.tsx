import Link from 'next/link';
import styles from './layout.module.scss';

export default function BlgLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.wrapper}>
      <nav>
        <Link href="/blg">
          b<span>log</span>
        </Link>
        <Link href="/blg/software">
          s<span>oftware</span>
        </Link>
        <Link href="/blg/algorithm">
          a<span>lgorithm</span>
        </Link>
        <Link href="/blg/health">
          h<span>ealth</span>
        </Link>
      </nav>

      <div className={styles.feed}>{children}</div>
    </main>
  );
}
