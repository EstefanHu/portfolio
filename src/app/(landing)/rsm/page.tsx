import Link from 'next/link';
import experience from './experience';
import styles from './resume.module.scss';

const NAV_LINKS = [
  {
    primary: 'status',
  },
  {
    primary: 'experience',
    links: ['goodway group', 'realty simple', 'muse'],
  },
  {
    primary: 'skills',
    links: ['languages', 'tooling', 'devops'],
  },
  {
    primary: 'education',
  },
];

export default function Resume() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>
          j. <span>estefan</span> hu
        </h1>
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
          <section id='status'>
            <h3>status</h3>

            <p></p>
          </section>

          <section id='experience'>
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

          <section id='skills'>
            <h3>skills</h3>
          </section>

          <section id='education'></section>
        </div>
      </div>
    </div>
  );
}
