import Image from 'next/image';
import Link from 'next/link';
import styles from '../components.module.scss';
import MetaSection from '@/components/MetaSection';

export const metadata = {
  title: 'How I Track Ideas',
  description: 'A technical breakdown of my idea tracking process',
  keywords: ['idea', 'web', 'architecture'],
};

export default function Page() {
  return (
    <>
      <h1>How I Track Ideas</h1>
      <h2>A technical breakdown of my idea tracking process</h2>

      <Image src='/images/blgs/ideas.webp' alt='cork board' className={styles.image} priority fill />

      <MetaSection>
        <p>
          A fair warning, this is a technical breakdown of how I track my ideas rather than a philosophical or
          methodological. I intend this to be the first of many <Link href='/prjkts/logs'>architectural logs</Link> of
          projects that I build, to both demonstrate and track my progress as an engineer.
        </p>
      </MetaSection>

      <h3>First off, the why</h3>

      <p>
        Why build yet another notes app when there are plenty of excellent options out there to choose from? Why build a
        public repository of ideas when twitter already has all the features I would need for free? Why spend the time
        rebuilding an easily reproduced widget?
      </p>

      <p>The answer I have is threefold:</p>

      <h4>1. Flexibility</h4>

      <p>
        I want the ability to connect what I create to several different outlets, each of which will have their own
        protocols and interactions that is simply too difficult to do with the already established tools and platforms.
        Having the ability to connect to specific steps and trigger events will empower my creative process and,
        ultimately, promote a stronger digital identity.
      </p>

      <h4>2. Replication</h4>

      <p>
        I&apos;ve worked on a handful of side projects and, without exception, each of them could have benefitted from a
        note to concept pipeline. As such, As such, having a single, replicable, or even productized service that could
        be applies generally would be a great tool in my developer toolbelt.
      </p>

      <h4>3. Because I wanna</h4>

      <p>
        I mean how cool would it be to have your own, custom idea manager that you made yourself? I&apos;ve always
        wanted my own personal assistant to manage my ideas but I can&apos;t afford that. So, I figured I could just
        build one!
      </p>
      {/* <div className={styles.heroImage}>
        <Image src='/svgs/jericho.v1.svg' alt='jericho v1' fill />
      </div> */}
    </>
  );
}
