import BlogNavigation from './BlogNavigation';
import styles from './feed.module.scss';

export default function Posts() {
  return (
    <div className={styles.wrapper}>
      <nav>
        <BlogNavigation />
      </nav>

      <div className={styles.feed}></div>
    </div>
  );
}
