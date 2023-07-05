import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
