'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <Link href='/stry'>stry</Link>
      <Link href='/blg'>blg</Link>
      <Link href='/prjkts'>prjkts</Link>
      <Link target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/estefanhu/'>
        lnkdn
      </Link>
      <Link target='_blank' rel='noopener noreferrer' href='https://github.com/estefanhu/'>
        gthb
      </Link>
    </>
  );
}
