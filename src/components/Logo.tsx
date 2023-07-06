'use client';
import { usePathname } from 'next/navigation';

export default function Logo() {
  const pathname = usePathname();
  const selected = pathname.split('/')[1];

  return (
    <h1
      style={{
        color: selected === '' ? '#940a0a' : '',
      }}
    >
      E
    </h1>
  );
}
