import Image from 'next/image';
import styles from './BlogImg.module.scss';

export default function BlogImg({ name }: { name: string }) {
  return <Image src={`/images/blgs/${name}.webp`} alt={name} className={styles.image} priority fill />;
}
