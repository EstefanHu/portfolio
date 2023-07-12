import Link from 'next/link';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import Logo from '@/components/Logo';
import PageLinks from './PageLinks';

import styles from './layout.module.scss';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <header>
        <Link href='/'>
          <Logo />
        </Link>

        <nav>
          <PageLinks />

          <Link target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/estefanhu/'>
            lnkdn
          </Link>

          <Link target='_blank' rel='noopener noreferrer' href='https://github.com/estefanhu/'>
            gthb
          </Link>
        </nav>
      </header>

      {children}

      <footer>
        <div className={styles.footerWrapper}>
          <div className={styles.footerTop}>
            <div className={styles.branding}>
              <Link href='/'>
                <p className={styles.name}>j. estefan hu</p>
              </Link>
              <p>Software Developer</p>
              <p>Seattle, Washington</p>
            </div>

            <nav>
              <span>
                <h4>me</h4>
                <Link href='/'>about</Link>
                <Link href='/rsm'>resume</Link>
                <Link href='/lgn'>login</Link>
              </span>

              <span>
                <h4>blog</h4>
                <Link href='/blg'>blog</Link>
              </span>

              <span>
                <h4>projects</h4>
                <Link href='/prjkts'>projects</Link>
              </span>
            </nav>
          </div>

          <div className={styles.legal}>
            <span>
              <Link target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/estefanhu/'>
                <FaLinkedin />
              </Link>

              <Link target='_blank' rel='noopener noreferrer' href='https://github.com/estefanhu/'>
                <FaGithubSquare />
              </Link>
            </span>

            <p>&copy; 2023 Justin Estefan Hu - all rights reserved</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
