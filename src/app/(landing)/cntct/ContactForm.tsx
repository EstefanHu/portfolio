'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { validateEmailAddress } from '@/lib/validateEmailAddress';
import styles from './contact.module.scss';

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
    const { name, email, reason, message } = formData;
    const errors = { ...DEFAULT_FIELDS };

    // if (!name) errors.name = 'name is required';
    // if (!email) errors.email = 'email address is required';
    // if (!validateEmailAddress(email)) errors.email = 'invalid email address';
    // if (!reason) errors.reason = 'reason is required';
    // if (!message) errors.message = 'message is required';
    // if (JSON.stringify(errors) !== JSON.stringify(DEFAULT_FIELDS)) return setErrorData(errors);

    setIsLoading(true);

    setIsLoading(false);

    router.push('/cntct?s=success');
  };

  if (isLoading) return;

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
        <p>{errorData.message}</p>
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

    <p>
      Your contact form has been submitted successfully. I&apos;ve been notified and will get back to you in a day or
      two. In the meantime, check this guy out.
    </p>

    <div className={styles.imageWrapper}>
      <Image src='/gifs/contact_success.gif' alt='duck' fill />
    </div>

    <Link href='/'>leave him behind</Link>
  </div>
);
