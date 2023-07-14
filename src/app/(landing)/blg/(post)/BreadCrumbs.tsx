'use client';
import { Fragment } from 'react';
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
          <Fragment key={idx}>
            <Link href={`/${c}`}>{c}</Link>
            <p>&gt;</p>
          </Fragment>
        );
      })}
      <p>{crumbs[lastIndex].replace(/\-/g, ' ')}</p>
    </>
  );
}
