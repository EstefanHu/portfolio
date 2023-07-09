'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const STYLES = {
    fontWeight: '700',
    textTransform: 'capitalize' as 'capitalize',
}

const NameMap = new Map(Object.entries({
    dsh: 'dashboard',
    nbx: 'inbox',
    prfl: 'profile',
}))

export default function PageName() {
    const pathname = usePathname();
    const page = pathname.split('/')[1];

    return (
        <Link href={`/${page}`} style={STYLES}>
            <h1>{`${NameMap.get(page)}`}</h1>
        </Link>
    )
}