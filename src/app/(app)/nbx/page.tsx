import prisma from '@/lib/prisma';
import styles from './inbox.module.scss';

export default async function Page() {
  const contacts = await prisma.contact.findMany();

  return (
    <div className={styles.main}>
      <h1>Inbox</h1>
      {contacts.map(({ id, name, email, message, reason, origin, status, createdAt }) => {
        return (
          <div key={id}>
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
}
