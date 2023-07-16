import ContactForm from './ContactForm';

import styles from './contact.module.scss';

export default function Page() {
  return (
    <div className={styles.main}>
      <ContactForm />
    </div>
  );
}
