'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DEFAULT_DATA = {
  password: '',
};

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [errorData, setErrorData] = useState(DEFAULT_DATA);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;
    setErrorData(DEFAULT_DATA);
    const { password } = formData;
    const errors = { password: '' };

    if (!password) errors.password = 'password is required';
    if (JSON.stringify(errors) !== JSON.stringify(DEFAULT_DATA)) return setErrorData(errors);

    setIsLoading(true);
    const { code, message } = await (
      await fetch('/api/auth', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
    ).json();
    setIsLoading(false);

    if (code !== 200) return setErrorData({ password: message });

    router.push('/dsh');
  };

  return (
    <form noValidate autoComplete='off' onSubmit={handleSignIn}>
      <fieldset>
        <input
          type='password'
          placeholder='password'
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <p>{errorData.password}</p>
      </fieldset>

      <input type='submit' className='hidden' />

      <button onClick={handleSignIn} type='submit'>
        Sign in
      </button>
    </form>
  );
}
