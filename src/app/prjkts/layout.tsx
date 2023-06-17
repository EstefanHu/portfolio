import Link from 'next/link';
import styles from './layout.module.scss';

const PROJECTS = [
  {
    name: 'Quarkify',
    url: 'https://www.quarkify.ai',
    description: '',
  },
];

export default function BlgLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.wrapper}>
      <div>
        <h1>projects</h1>
      </div>

      {children}
    </main>
  );
}
