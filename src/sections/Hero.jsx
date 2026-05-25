import styles from './Hero.module.css';

import Button from '@/components/Button/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.hero_text}>
        <h1>José Manuel García Díaz</h1>
        <h2>desarrollador web</h2>
        <p>
          Con disposición para siempre aprender cosas nuevas y el valor
          suficiente para ponerlas en práctica.
        </p>
        <Button href="/contact">¡Contacta conmigo ahora!</Button>
      </div>

      <div className={styles.hero_image}>
        <Image src="/hero.png" width={576} height={659} alt="hero image" />
        <p className={styles.hero_image_status}>
          Actualmente trabajando en <span>Portafolio</span>
        </p>
      </div>
    </section>
  );
}
