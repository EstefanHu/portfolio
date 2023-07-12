'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LauncherForm.module.scss';

const DEFAULT_DATA = {
  title: '',
  details: '',
};

export default function LaunchEntryForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [errorData, setErrorData] = useState(DEFAULT_DATA);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;
    setErrorData(DEFAULT_DATA);
    const { title, details } = formData;
    const errors = {
      title: '',
      details: '',
    };

    if (!title) errors.title = 'title is required';
    if (!details) errors.details = 'must provide a breif description';
    if (JSON.stringify(errors) !== JSON.stringify(DEFAULT_DATA)) return setErrorData(errors);

    setIsLoading(true);
    const { code, data } = await (
      await fetch('/api/post', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
    ).json();
    setIsLoading(false);

    if (code !== 201)
      return setErrorData({
        title: data.title,
        details: data.details,
      });

    router.push(`/write/${data.slug}`);
  };

  return (
    <form noValidate onSubmit={handleSubmit} className={styles.launchEntryForm}>
      <fieldset>
        <label>title</label>
        <input
          type='text'
          placeholder='Add a title'
          maxLength={200}
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <p className={styles.error}>{errorData.title}</p>

        <label>details</label>
        <input
          type='text'
          placeholder='A breif description'
          maxLength={200}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
        />
        <p className={styles.error}>{errorData.details}</p>

        {/* <label>genre</label>
        <span>
          {GENRES.map((genre: string) => (
            <button
              key={genre}
              className={genre === formData.genre ? styles.selected : ''}
              onClick={(e) => {
                e.preventDefault();
                setFormData({ ...formData, genre });
              }}
            >
              {genre}
            </button>
          ))}
        </span>
        <p className={styles.error}>{errorData.genre}</p> */}
      </fieldset>

      <button type='submit' onClick={handleSubmit}>
        create
      </button>
    </form>
  );
}
