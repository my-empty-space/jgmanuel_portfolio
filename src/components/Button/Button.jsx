import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ href, children }) {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}

export function Button2({ href, children }) {
  return (
    <Link href={href} className={styles.button2}>
      {children}
    </Link>
  );
}
