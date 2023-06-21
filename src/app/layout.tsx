import Link from 'next/link';
import './globals.css';

import Logo from '@/components/Logo';
import PageLinks from '@/components/PageLinks';

export const metadata = {
  title: 'Estefan Hu',
  description: 'Software Engineer',
  keywords: ['estefan', 'hu', 'dingus'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
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
      </body>
    </html>
  );
}
