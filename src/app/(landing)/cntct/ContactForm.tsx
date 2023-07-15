'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './contact.module.scss';
import Link from 'next/link';

const DEFAULT_FIELDS = {
  name: '',
  email: '',
  reason: '',
  message: '',
};

export default function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_FIELDS);
  const [errorData, setErrorData] = useState(DEFAULT_FIELDS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;
    setErrorData(DEFAULT_FIELDS);
    const { name, email, message } = formData;

    setIsLoading(true);

    setIsLoading(false);

    router.push('/cntct?s=success');
  };

  if (searchParams.get('s') === 'success') return <SuccessView />;

  return (
    <form noValidate autoComplete='on' onSubmit={handleSubmit}>
      <h1>Contact.</h1>

      <fieldset>
        <input
          type='text'
          placeholder='Name'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <p>{errorData.name}</p>

        <input
          type='email'
          placeholder='Email Address'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <p>{errorData.email}</p>

        <input
          type='text'
          placeholder='Reason for Contact'
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
        />
        <p>{errorData.reason}</p>

        <textarea
          placeholder='Message'
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </fieldset>

      <input type='submit' className='hidden' />

      <button onClick={handleSubmit} type='submit'>
        Submit
      </button>
    </form>
  );
}

const SuccessView = () => (
  <div className={styles.success}>
    <h1>Success.</h1>
    <Link href='/'>Back to site</Link>
  </div>
);
