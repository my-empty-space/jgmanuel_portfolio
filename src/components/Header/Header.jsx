'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <Link href="/">
            <Image
              src="/logo-horizontal.svg"
              alt="logo"
              width={150}
              height={30}
            />
          </Link>

          <input className={styles.input} type="checkbox" id="a" />
          <label htmlFor="a" className={styles.mobileBtn}></label>

          <nav className={styles.navbar}>
            <Link
              href="/"
              className={pathname === '/' ? styles.linkActive : ''}
            >
              <span>#</span>Inicio
            </Link>
            <Link
              href="/cv"
              className={pathname === '/cv' ? styles.linkActive : ''}
            >
              <span>#</span>Curriculim
            </Link>
            <Link
              href="/projects"
              className={pathname === '/projects' ? styles.linkActive : ''}
            >
              <span>#</span>Proyectos
            </Link>
            <Link
              href="/contact"
              className={pathname === '/contact' ? styles.linkActive : ''}
            >
              <span>#</span>Contacto
            </Link>
          </nav>
        </div>
      </header>
      <div className={styles.space}></div>
    </>
  );
}
