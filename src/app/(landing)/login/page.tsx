import LoginForm from './LoginForm';
import Link from 'next/link';

import styles from './login.module.scss';

export default function Page() {
  return (
    <main className={styles.page}>
      <h1>Login.</h1>

      <LoginForm />

      <p className={styles.request}>
        Looking for a behind the scenes access?{' '}
        <span>
          <Link href='/contact?r=request%20%access'>Request</Link> it!
        </span>
      </p>
    </main>
  );
}
