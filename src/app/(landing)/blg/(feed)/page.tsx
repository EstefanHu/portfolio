import BlogNavigation from './BlogNavigation';
import Post from './Post';
import posts from './_posts';
import styles from './feed.module.scss';

export default function Posts() {
  return (
    <div className={styles.wrapper}>
      <nav>
        <BlogNavigation />
      </nav>

      <div className={styles.feed}>
        {posts.map((post: any) => (
          <Post key={post.title} {...post} />
        ))}
      </div>
    </div>
  );
}
