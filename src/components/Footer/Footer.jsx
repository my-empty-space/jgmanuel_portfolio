import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_mainContent}>
          <Link href="/">
            <Image
              src="/logo-vertical.svg"
              width={100}
              height={42}
              alt="Logo de marca personal"
            />
          </Link>
          <span>Hecho en 2025 por José Manuel G.</span>
        </div>

        <div className={styles.footer_rrss}>
          <h4>Redes Sociales</h4>

          <div>
            <Link href="https://github.com/my-empty-space" target="_blank">
              <Image
                src="/icons/github.svg"
                width={32}
                height={32}
                alt="Icono Github"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/jos%C3%A9-manuel-g-2717b1240/"
              target="_blank"
            >
              <Image
                src="/icons/linkedin.svg"
                width={32}
                height={32}
                alt="Icono Linkedin"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
