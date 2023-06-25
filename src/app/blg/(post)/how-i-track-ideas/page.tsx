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

      <h3>1. Flexibility</h3>

      <p>
        I want the ability to connect what I create to several different outlets, each of which will have their own
        protocols and interactions that is simply too difficult to do traditionally.
      </p>

      <h3>2. Cust</h3>

      <h3>3. Replication</h3>

      <p>
        I&apos;ve worked on a handful of side projects and, without exception, each of them could have benefitted from a
        note to concept pipeline. As such, I think it would be a great tool to have a single replicatable or even
        productized service that could generally satisfy this need.
      </p>

      {/* <div className={styles.heroImage}>
        <Image src='/svgs/jericho.v1.svg' alt='jericho v1' fill />
      </div> */}
    </>
  );
}
