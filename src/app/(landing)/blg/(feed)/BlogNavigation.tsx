'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaStarOfLife } from 'react-icons/fa';

const SELECTED = {
  color: '#940a0a',
  textDecorationColor: '#940a0a',
};

export default function BlogNavigation() {
  const params = useSearchParams();
  const selected = params.get('c');

  return (
    <>
      <Link style={!selected ? SELECTED : {}} href='/blg'>
        <FaStarOfLife size='20px' />
      </Link>

      <Link style={selected === 'tech' ? SELECTED : {}} href='/blg?c=tech'>
        t<span>ech</span>
      </Link>

      <Link style={selected === 'code' ? SELECTED : {}} href='/blg?c=code'>
        c<span>ode</span>
      </Link>

      <Link style={selected === 'misc' ? SELECTED : {}} href='/blg?c=misc'>
        m<span>isc</span>
      </Link>
    </>
  );
}
