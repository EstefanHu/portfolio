import Link from 'next/link';

import styles from './post.module.scss';

export default function Post({
  title,
  tags,
  description,
  createdAt,
}: {
  title: string;
  tags: Array<string>;
  createdAt: string;
  description: string;
}) {
  const url = title.toLowerCase().replace(/\s/g, '-');

  return (
    <Link href={`/blg/${url}`}>
      <div className={styles.post}>
        <header>
          <span>
            {tags.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </span>

          <p>{createdAt}</p>
        </header>

        <h1>{title}</h1>

        <p>{description}</p>

        <footer></footer>
      </div>
    </Link>
  );
}
