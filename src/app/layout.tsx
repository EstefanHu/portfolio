import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Estefan Hu',
  description: 'Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/">
            <h1>E</h1>
          </Link>

          <nav>
            <Link href="/stry">stry</Link>
            <Link href="/blg">blg</Link>
            <Link href="/prjkts">prjkts</Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/estefanhu/"
            >
              lnkdn
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/estefanhu/"
            >
              gthb
            </Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
