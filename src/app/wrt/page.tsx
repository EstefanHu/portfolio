import LauncherForm from './LauncherForm';
import styles from './page.module.scss';

export default function Page() {
  return (
    <div className={styles.pageWrapper}>
      <p className={styles.header}>
        start <span>new</span> entry
      </p>

      <LauncherForm />
    </div>
  );
}
