'use client';
import Logo from "@/components/Logo";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { RxDashboard } from 'react-icons/rx';
import { MdPersonOutline } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { FaPenFancy } from 'react-icons/fa';
import { FiInbox } from 'react-icons/fi';
import { IoIosMore } from 'react-icons/io';

import styles from './AppNav.module.scss';

export default function AppNav() {
    const pathname = usePathname()!;

    const openMenu = () => {
        console.log('open menu');
    };

    return (
        <>
            <Link href='/dshbrd' className={styles.logo}>
                <Logo />
            </Link>

            <Link href='/dshbrd' className={`${styles.link} ${pathname.startsWith('/dshbrd') ? styles.selected : ''}`}>
                <RxDashboard />
                <p>dshbrd</p>
            </Link>

            <Link href='/nbx' className={`${styles.link} ${pathname.startsWith('/nbx') ? styles.selected : ''}`}>
                <FiInbox />
                <p>nbx</p>
            </Link>

            <Link href='/prfl' className={`${styles.link} ${pathname.startsWith('/prfl') ? styles.selected : ''}`}>
                <MdPersonOutline />
                <p>prfl</p>
            </Link>
        </>
    )
}