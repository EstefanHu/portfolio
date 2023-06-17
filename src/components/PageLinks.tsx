'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SELECTED = {
  color: '#dd2d44',
};

export default function PageLinks() {
  const pathname = usePathname();
  const selected = pathname.split('/')[1];

  return (
    <>
      <Link style={selected === 'blg' ? SELECTED : {}} href='/blg'>
        blg
      </Link>
      <Link style={selected === 'prjkts' ? SELECTED : {}} href='/prjkts'>
        prjkts
      </Link>
    </>
  );
}
