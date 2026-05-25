import styles from './Experience.module.css';

import Image from 'next/image';
import Terminal from '@/components/Terminal/Terminal';
import Button from '@/components/Button/Button';

export default function Experience() {
  if (true) return <></>

  return (
    <section className={`container ${styles.experience}`}>
      <div>
        <Image
          className={styles.deco1}
          src="/shape_charJ.svg"
          width={184}
          height={129}
          alt="backgroud dectoration"
        />
        <Image
          className={styles.deco2}
          src="/shape_rectangle.svg"
          width={80}
          height={85}
          alt="backgroud dectoration"
        />
        <Image
          className={styles.deco3}
          src="/shape_rectangle.svg"
          width={95}
          height={112}
          alt="backgroud dectoration"
        />
      </div>

      <div className="titles">
        <h2>Experiencia destacada</h2>
        <h3>
          Echa un vistazo a algunos de los trabajos qué más le han sumado a mi
          desarrollo profesional
        </h3>
      </div>

      <Terminal />

      <div className={styles.experience_btn}>
        <Button href="/cv">Ver Curriculum</Button>
      </div>
    </section>
  );
}
