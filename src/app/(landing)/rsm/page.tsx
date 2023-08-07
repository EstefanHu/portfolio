import Link from 'next/link';
import status from './_status';
import experience from './_experience';
import technology from './_technology';
import skills from './_skills';
import education from './_education';
import styles from './resume.module.scss';

const NAV_LINKS = [
  { primary: 'status' },
  {
    primary: 'experience',
    links: ['goodway group', 'realty simple', 'muse'],
  },
  { primary: 'technology' },
  { primary: 'skills' },
  { primary: 'education' },
];

export default function Resume() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>
          j. <span>estefan</span> hu
        </h1>

        <p>
          <Link target='_blank' rel='noopener noreferrer' href='https://github.com/estefanhu/'>
            github.com/estefanhu
          </Link>
          {` - `}
          <Link target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/estefanhu/'>
            linkedin.com/in/estefanhu
          </Link>
          {` - `}
          <Link target='_blank' rel='noopener noreferrer' href='/'>
            estefanhu.com
          </Link>
        </p>
      </div>

      <div className={styles.resumeWrapper}>
        <nav>
          <h2>Contents</h2>

          {NAV_LINKS.map(({ primary, links = [] }) => (
            <div className={styles.section} key={primary}>
              <Link href={`#${primary}`}>{primary}</Link>

              {links.length > 0 ? (
                <div className={styles.subLinks}>
                  {links.map((link) => (
                    <Link key={link} href={`#${link}`}>
                      {link}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className={styles.resume}>
          <section id='status' className={styles.status}>
            <h3>
              status <span>open for hire</span>
            </h3>

            <p>
              I&apos;m unemployed! Having been affected by the recent tech layoffs I&apos;ve decided to take some time,
              build some projects and learn a few technologies that I&apos;ve had queued up for some time now.
            </p>

            {status.map(({ q, a }) => (
              <p key={q}>
                <b>{q}?</b> {a}
              </p>
            ))}
          </section>

          <section id='experience' className={styles.experience}>
            <h3>experience</h3>

            {experience.map(({ name, title, location, startDate, endDate, headliner, achievements }) => (
              <div key={name} id={`${name}`}>
                <h4>{name}</h4>

                <div className={styles.info}>
                  <span>
                    <h5>{title}</h5>
                    <p>{location}</p>
                  </span>

                  <h5>
                    {startDate} - {endDate}
                  </h5>
                </div>

                <p className={styles.headliner}>{headliner}</p>

                <ul>
                  {achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section id='technology' className={styles.technology}>
            <h3>technology</h3>

            {technology.map(({ category, items }) => (
              <p key={category}>
                <span>{category}:</span> {items.join(', ')}
              </p>
            ))}
          </section>

          <section id='skills' className={styles.skills}>
            <h3>skills</h3>

            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </section>

          <section id='education' className={styles.education}>
            <h3>education</h3>

            {education.map(({ location, certs }) => (
              <div key={location} className={styles.learn}>
                <h4>{location}</h4>

                {/* {certs.map((cert) => (
                  <p key={cert}>{cert}</p>
                ))} */}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
