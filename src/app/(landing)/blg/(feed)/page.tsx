import BlogNavigation from './BlogNavigation';
import Posts from './Posts';
import styles from './feed.module.scss';

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <nav>
        <BlogNavigation />
      </nav>

      <div className={styles.feed}>
        <Posts />
      </div>
    </div>
  );
}
