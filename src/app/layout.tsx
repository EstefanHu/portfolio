import Link from 'next/link';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import styles from './layout.module.scss';
import './globals.css';

import Logo from '@/components/Logo';
import PageLinks from '@/components/PageLinks';

export const metadata = {
  applicationName: 'Estefans Portfolio',
  title: 'Estefan Hu',
  description: 'Software Engineer',
  keywords: ['estefan', 'hu', 'dingus'],
  creator: 'Estefan Hu',
  author: 'Estefan Hu',
  locale: 'en_US',
  type: 'website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <header className={styles.header}>
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

        <div className={styles.footerWrapper}>
          <footer>
            <div className={styles.footerTop}>
              <div className={styles.branding}>
                <Link href='/'>
                  <p className={styles.name}>estefan</p>
                </Link>
                <p>Software Developer</p>
                <p>Seattle, Washington</p>
              </div>

              <nav>
                <Link href='/blg/a-bit-about-me'>about</Link>
                <Link href='/blg'>blog</Link>
                <Link href='/prjkts'>projects</Link>
                <Link href='/contact'>contact</Link>
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
          </footer>
        </div>
      </body>
    </html>
  );
}
