'use client';
import Logo from '@/components/Logo';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { RxDashboard } from 'react-icons/rx';
import { MdPersonOutline } from 'react-icons/md';
import { FiInbox } from 'react-icons/fi';
import { IoIosMore } from 'react-icons/io';

import styles from './AppNav.module.scss';

export default function AppNav() {
  const router = useRouter();
  const pathname = usePathname()!;

  const openMenu = () => {
    console.log('open menu');
  };

  return (
    <>
      <Link href='/dsh' className={styles.logo}>
        <Logo />
      </Link>

      <Link href='/dsh' className={`${styles.link} ${pathname.startsWith('/dsh') ? styles.selected : ''}`}>
        <RxDashboard />
        <p>dsh</p>
      </Link>

      <Link href='/nbx' className={`${styles.link} ${pathname.startsWith('/nbx') ? styles.selected : ''}`}>
        <FiInbox />
        <p>nbx</p>
      </Link>

      <Link href='/prfl' className={`${styles.link} ${pathname.startsWith('/prfl') ? styles.selected : ''}`}>
        <MdPersonOutline />
        <p>prfl</p>
      </Link>

      <button type='button' onClick={openMenu} className={styles.more}>
        <IoIosMore />
      </button>

      <button type='button' onClick={() => router.push('/wrt')} className={styles.write}>
        <p>write entry</p>
      </button>
    </>
  );
}
