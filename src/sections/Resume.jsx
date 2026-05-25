import Image from 'next/image';
import styles from './Resume.module.css';
import Link from 'next/link';
import Button from '@/components/Button/Button';

export default function Resume() {
  return (
    <section className={`containerStrech ${styles.wraper}`}>
      <div className={styles.decorations}>
        <Image
          className={styles.deco1}
          src="/shape_charJ.svg"
          width={95}
          height={112}
          alt="background dectoration"
        />
        <Image
          className={styles.deco2}
          src="/shape_rectangle.svg"
          width={95}
          height={112}
          alt="background dectoration"
        />
        <Image
          className={styles.deco3}
          src="/shape_rectangle.svg"
          width={95}
          height={112}
          alt="background dectoration"
        />
        <Image
          className={styles.deco4}
          src="/shape_dots.svg"
          width={95}
          height={112}
          alt="background dectoration"
        />
      </div>

      <aside className={styles.profile}>
        <div className={styles.profile_container}>
          <Image
            className={styles.profile_image}
            src="/profile-picture.png"
            width={252}
            height={228}
          />

          <div className={styles.profile_name}>
            <p>José Manuel García Díaz</p>
            <h4>Full Stack Developer</h4>
          </div>

          <div className={styles.profile_info}>
            <Image src="/icons/birthday.svg" width={20} height={20} />
            <div>
              <span>Nacimiento</span>
              <span>17-12-2002</span>
            </div>
          </div>

          <div className={styles.profile_info}>
            <Image src="/icons/location.svg" width={20} height={20} alt="" />
            <div>
              <span>Location</span>
              <span>Venezuela - Zulia</span>
            </div>
          </div>

          <div className={styles.profile_rrss}>
            <Link href="https://github.com/my-empty-space" target="_blank">
              <Image src="/icons/github.svg" width={20} height={20} alt="" />
            </Link>
            <Link href="https://www.linkedin.com/in/jos%C3%A9-manuel-g-2717b1240/" target="_blank">
              <Image src="/icons/linkedin.svg" width={20} height={20} alt="" />
            </Link>
          </div>
        </div>

        {/* <div className={styles.profile_btn}>
          <Button href="/">Descargar CV</Button>
        </div> */}
      </aside>

      <main className={styles.resume}>
        <h2>Curriculum</h2>

        <div className={styles.resume_content}>
          <div className={styles.resume_section}>
            <div className={styles.resume_section_header}>
              <div className={styles.resume_section_image}>
                <Image
                  src="/icons/education.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <h3>Educación</h3>
            </div>

            <div
              className={`${styles.resume_section_content} ${styles.resume_section_content__yellow}`}
            >
              <div className={styles.resume_item}>
                <h4>Técnico Superior Universitario en Informática</h4>
                <p>Universidad Experimental Rafael Maria Baralt</p>
                <span>2020 - 2022</span>
              </div>

              <div className={styles.resume_item}>
                <h4>Ingeniero en Informática</h4>
                <p>Universidad Experimental Rafael Maria Baralt</p>
                <span>2022 - 2025</span>
              </div>
            </div>
          </div>

          <div className={styles.resume_section}>
            <div className={styles.resume_section_header}>
              <div className={styles.resume_section_image}>
                <Image
                  src="/icons/experience.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <h3>Educación</h3>
            </div>

            <div className={styles.resume_section_content}>
              <div className={styles.resume_item}>
                <h4>Universidad del Zulia</h4>
                <p>Técnico de recursos informáticos</p>
                <span>2024 - 2026</span>
              </div>

              <div className={styles.resume_item}>
                <h4>Didáctica Digital</h4>
                <p>Desarrollador Full-Stack</p>
                <span>Octubre 2023 - Mayo 2024</span>
              </div>

              <div className={styles.resume_item}>
                <h4>Kea Estudio</h4>
                <p>Desarrollador Web <br />
                  Contractor</p>
                <span>2022 - 2025</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
