import Image from 'next/image';
import Link from 'next/link';
import styles from './how-i-tack-ideas.module.scss';

export const metadata = {
  title: 'How I track ideas',
  description: 'A technical breakdown of my idea tracking process',
  keywords: ['idea', 'web', 'architecture'],
};

export default function Page() {
  return (
    <article className={styles.wrapper}>
      <h1>How I track ideas</h1>
      <h2>A technical breakdown of my idea tracking process</h2>

      <Image src='/images/blgs/ideas.webp' alt='cork board' className={styles.image} priority fill />

      <p>
        A fair warning, this is a technical breakdown of how I track my ideas more than a philosophical or
        methodological. I intend this to be the first of many{' '}
        <Link href='/prjkts/logs' style={{ color: '#dd2d44' }}>
          architectural logs
        </Link>{' '}
        of projects that I build, to both demonstrate and track my progress as an engineer.
      </p>

      {/* <div className={styles.heroImage}>
        <Image src='/svgs/jericho.v1.svg' alt='jericho v1' fill />
      </div> */}
    </article>
  );
}
