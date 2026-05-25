import Image from 'next/image';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <main className={`container ${styles.about}`}>
      <div className={styles.about_img}>
        <Image width={580} height={740} alt="" src="/about-me.png" />
      </div>

      <div className={styles.window}>
        <div className={styles.window_frame}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={styles.window_content}>
          <p>
            <span className={styles.tag}>&#60;h1&#62;</span>Hola, soy José
            Manuel!<span className={styles.tag}>&#60;h1&#47;&#62;</span>
          </p>

          <p>
            <span className={styles.tag}>&#60;p&#62;</span> Ingeniero en
            informática y desarrollador Web Full Stack residenciado en
            Venezuela, estado Zulia.
            <span className={styles.tag}>&#60;p&#47;&#62;</span>
          </p>

          <p>
            <span className={styles.tag}>&#60;p&#62;</span> Mi experiencia
            profesional me ha permitido trabajar en proyectos diversos freelace,
            desde el diseño de interfaces intuitivas hasta la optimización del
            rendimiento de aplicaciones web. Cada proyecto ha sido una
            oportunidad para aprender, crecer y perfeccionar mi habilidad para
            crear soluciones que no solo sean funcionales, sino que también
            impacten positivamente en la experiencia del usuario.
            <span className={styles.tag}>&#60;p&#47;&#62;</span>
          </p>

          <p>
            <span className={styles.tag}>&#60;p&#62;</span> Dominio diferentes
            tecnologías web que me ha permitido desarrollar aplicaciones
            innovadoras, eficientes y escalables. Además, tengo un interés
            genuino en el diseño de interfaces y la experiencia de usuario (UX),
            lo que me impulsa a asegurar que cada proyecto no solo sea
            funcional, sino también visualmente atractivo y fácil de usar. Para
            mí, el éxito de un proyecto no se mide solo por su código, sino por
            la satisfacción de quienes lo utilizan.
            <span className={styles.tag}>&#60;p&#47;&#62;</span>
          </p>

          <p>
            <span className={styles.tag}>&#60;p&#62;</span> Me emociona la
            posibilidad de unirme a un equipo dinámico y en crecimiento, donde
            pueda seguir desarrollando mis habilidades y contribuir con
            soluciones que marquen la diferencia.
            <span className={styles.tag}>&#60;p&#47;&#62;</span>
          </p>
        </div>

        <div className={styles.vimBar}>
          <Image width={100} height={24} src="/vimbar.png" alt="" />
          <span>~/docs/about-me.html</span>
        </div>
      </div>
    </main>
  );
}
