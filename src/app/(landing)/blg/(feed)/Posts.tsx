'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import _posts from './_posts';

import styles from './posts.module.scss';
import BlogImg from '@/components/BlogImg';

type post = {
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
};

export default function Posts() {
  const params = useSearchParams();
  const selected = params.get('c');
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Array<post> | []>([]);

  useEffect(() => {
    setIsLoading(true);
    const filteredPosts: Array<post> = _posts.filter(({ tags }) => (selected ? tags.includes(selected) : true));
    setPosts(filteredPosts);
    setIsLoading(false);
  }, [selected]);

  return (
    <>
      {posts.map(({ title, tags, description, createdAt }) => {
        const url = title.toLowerCase().replace(/\s/g, '-');

        return (
          <Link key={title} href={`/blg/${url}`}>
            <div className={styles.post}>
              <div className={styles.post}>
                <header>
                  <span>
                    {tags.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </span>

                  <p>{createdAt}</p>
                </header>

                <div className={styles.body}>
                  <div className={styles.details}>
                    <h1>{title}</h1>

                    <p>{description}</p>
                  </div>

                  <div className={styles.imageWrapper}>
                    <BlogImg name={`${url}-small`} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}

      {isLoading ? <h1>loading...</h1> : null}
    </>
  );
}
