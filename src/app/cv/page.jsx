import Experience from '@/sections/Experience';
import styles from './page.module.css';
import Contact from '@/sections/Contact';
import Resume from '@/sections/Resume';

export default function Home() {
  return (
    <>
      <Experience />
      <Resume />
      <Contact />
    </>
  );
}
