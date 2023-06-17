import Link from 'next/link';
import './globals.css';

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
            <h1>E</h1>
          </Link>

          <nav></nav>
        </header>

        {children}
      </body>
    </html>
  );
}
