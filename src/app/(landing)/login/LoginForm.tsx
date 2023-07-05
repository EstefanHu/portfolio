'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ValidateEmailAddress } from '@/lib/validate';

const DEFAULT_DATA = {
  emailAddress: '',
  password: '',
};

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [errorData, setErrorData] = useState(DEFAULT_DATA);

  const handleSignIn = async (e) => {
    console.log({ isLoading });
    e.preventDefault();

    if (isLoading) return;
    setErrorData(DEFAULT_DATA);
    const { emailAddress, password } = formData;
    const errors = {
      emailAddress: '',
      password: '',
    };

    if (!emailAddress) errors.emailAddress = 'email is required';
    if (emailAddress && !ValidateEmailAddress(emailAddress)) errors.emailAddress = 'invalid email';
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

    if (code !== 200) return setErrorData({ emailAddress: message, password: message });

    router.push('/home');
  };

  return <form></form>;
}
