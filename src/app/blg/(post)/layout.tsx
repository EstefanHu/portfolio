import styles from './post.module.scss';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <article className={styles.wrapper}>{children}</article>;
}
