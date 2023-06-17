'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaStarOfLife } from 'react-icons/fa';

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
        <FaStarOfLife size='20px' />
      </Link>

      <Link style={selected === 'algo' ? SELECTED : {}} href='/blg/algo'>
        a<span>lgo</span>
      </Link>

      <Link style={selected === 'code' ? SELECTED : {}} href='/blg/code'>
        c<span>ode</span>
      </Link>

      <Link style={selected === 'health' ? SELECTED : {}} href='/blg/health'>
        h<span>ealth</span>
      </Link>

      <Link style={selected === 'urban' ? SELECTED : {}} href='/blg/urban'>
        u<span>rban</span>
      </Link>
    </>
  );
}
