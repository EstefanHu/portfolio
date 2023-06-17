'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SELECTED = {
  color: '#dd2d44',
  textDecorationColor: '#dd2d44',
};

export default function BlogNavigation() {
  const pathname = usePathname();
  const selected = pathname.split('/')[2];

  return (
    <>
      <Link style={!selected ? SELECTED : {}} href='/blg'>
        b<span>log</span>
      </Link>
      <Link style={selected === 'urban' ? SELECTED : {}} href='/blg/urban'>
        u<span>rban</span>
      </Link>
      <Link style={selected === 'software' ? SELECTED : {}} href='/blg/software'>
        s<span>oftware</span>
      </Link>
      <Link style={selected === 'algorithm' ? SELECTED : {}} href='/blg/algorithm'>
        a<span>lgorithm</span>
      </Link>
      <Link style={selected === 'health' ? SELECTED : {}} href='/blg/health'>
        h<span>ealth</span>
      </Link>
    </>
  );
}
