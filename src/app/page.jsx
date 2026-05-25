import styles from './page.module.css';

import Hero from '@/sections/Hero';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import AboutMe from '@/sections/AboutMe';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </>
  );
}
