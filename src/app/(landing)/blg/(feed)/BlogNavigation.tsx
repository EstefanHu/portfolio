'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaStarOfLife } from 'react-icons/fa';

const SELECTED = {
  color: '#940a0a',
  textDecorationColor: '#940a0a',
};

export default function BlogNavigation() {
  const pathname = usePathname();
  const selected = pathname.split('c=')[1];

  return (
    <>
      <Link style={!selected ? SELECTED : {}} href='/blg'>
        <FaStarOfLife size='20px' />
      </Link>

      <Link style={selected === 'algo' ? SELECTED : {}} href='/blg?c=algo'>
        a<span>lgo</span>
      </Link>

      <Link style={selected === 'code' ? SELECTED : {}} href='/blg?c=code'>
        c<span>ode</span>
      </Link>

      <Link style={selected === 'health' ? SELECTED : {}} href='/blg?c=health'>
        h<span>ealth</span>
      </Link>

      <Link style={selected === 'urban' ? SELECTED : {}} href='/blg?c=urban'>
        u<span>rban</span>
      </Link>
    </>
  );
}
