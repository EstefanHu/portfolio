import './globals.css';

export const metadata = {
  applicationName: 'Estefans Portfolio',
  title: 'Estefan Hu',
  description: 'Software Engineer',
  keywords: ['estefan', 'hu', 'dingus'],
  creator: 'Estefan Hu',
  authors: [{ name: 'Estefan Hu' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
