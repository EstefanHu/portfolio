// import Link from 'next/link';
import { cookies} from 'next/headers';
import LoginForm from './LoginForm';

import styles from './login.module.scss';

export default function Page() {
  const cookieStore = cookies();

  // if (cookieStore.has('portfolioAuth')) 

  return (
    <div className={styles.page}>
      <h1>Login.</h1>

      <LoginForm />

      {/* <p className={styles.request}>
        Looking for a behind the scenes access?{' '}
        <span>
          <Link href='/cntct?r=request%20%access'>Request</Link> it!
        </span>
      </p> */}
    </div>
  );
}
