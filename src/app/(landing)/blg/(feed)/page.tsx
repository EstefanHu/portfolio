import BlogNavigation from './BlogNavigation';
import Post from './Post';
import styles from './feed.module.scss';

export default function Posts() {
  const posts = [];

  return (
    <div className={styles.wrapper}>
      <nav>
        <BlogNavigation />
      </nav>

      <div className={styles.feed}>
        {posts.map((post) => <Post {...post} />)}
      </div>
    </div>
  );
}
