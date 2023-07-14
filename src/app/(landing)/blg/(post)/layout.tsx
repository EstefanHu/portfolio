import Link from 'next/link';
import styles from './post.module.scss';
import BlogImg from '@/components/BlogImg';

const POSTS = [
  {
    title: 'Stay Mean, Stay Lean',
    url: '/stay-mean-stay-lean',
    imgName: 'do-something',
  },
  {
    title: 'To Make Or Not To Make',
    url: '/to-make-or-not-to-make',
    imgName: 'yellow',
  },
  {
    title: 'How I track Ideas',
    url: '/how-i-track-ideas',
    imgName: 'ideas',
  },
  {
    title: 'What the C.R.U.D.',
    url: '/what-the-crud',
    imgName: 'containers',
  },
];

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className={styles.wrapper}>
      <div className={styles.blog}>{children}</div>

      <div className={styles.appendix}></div>

      {/* <div className={styles.more}>
        <div>
          {POSTS.map(({ title, url, imgName }) => {
            return (
              <Link key={title} href={`/blg/${url}`}>
                <div className={styles.post}>
                  <BlogImg name={imgName} />
                  <p className={styles.title}>{title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div> */}
    </article>
  );
}
