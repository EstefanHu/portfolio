import ContactForm from './ContactForm';

import styles from './contact.module.scss';

export default function Page() {
  return (
    <div className={styles.main}>
      <h1>Contact</h1>

      <ContactForm />
    </div>
  );
}
