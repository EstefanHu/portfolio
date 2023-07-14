'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BreadCrumbs() {
  const path = usePathname();
  const crumbs = path.split('/');
  const lastIndex = crumbs.length - 1;

  return (
    <>
      {crumbs.map((c, idx) => {
        if (c === '' || idx === lastIndex) return;

        return (
          <>
            <Link key={idx} href={`/${c}`}>
              {c}
            </Link>
            <p key={`${idx}>`}>&gt;</p>
          </>
        );
      })}
      <p>{crumbs[lastIndex].replace(/\-/g, ' ')}</p>
    </>
  );
}
