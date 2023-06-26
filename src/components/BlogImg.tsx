import Image from 'next/image';
import styles from './BlogImg.module.scss';

export default function BlogImg({ name, primary = false }: { name: string; primary?: boolean }) {
  return <Image src={`/images/${name}.webp`} alt={name} className={styles.image} priority={primary} fill />;
}
