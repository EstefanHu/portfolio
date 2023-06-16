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
            <Link href="/b">blg</Link>
            <Link href="/rsm">rsm</Link>
            <Link href="/p">prjkts</Link>
            <Link href="https://github.com/estefanhu/">gthb</Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
