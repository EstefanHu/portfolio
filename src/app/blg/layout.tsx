import styles from './layout.module.scss';
import BlogNavigation from './BlogNavigation';

export default function BlgLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.wrapper}>
      <nav>
        <BlogNavigation />
      </nav>

      <div className={styles.feed}>{children}</div>
    </main>
  );
}
