'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DEFAULT_FIELDS = {
  name: '',
  email: '',
  reason: 'contact',
  message: '',
  origin: 'cntct',
};

export default function ContactForm() {
  const router = useRouter();
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

    router.push('/cntct/sccss');
  };

  return (
    <form noValidate autoComplete='on' onSubmit={handleSubmit}>
      <fieldset>
        <input
          type='text'
          placeholder='Name'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type='email'
          placeholder='Email Address'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </fieldset>

      <input type='submit' className='hidden' />

      <button onClick={handleSubmit} type='submit'>
        Submit
      </button>
    </form>
  );
}
