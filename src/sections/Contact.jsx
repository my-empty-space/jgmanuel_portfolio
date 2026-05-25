// TODO: Validar los inputs del formulario en el backend.
// TODO: Deshabilitar visialmente el botón mientras se envía el correo.
// TODO: Deshabilitar la funcionalidad del botón mientras se envía el correo.
// TODO: Animar el envío de formulario.
// TODO: Agregar animación feedback al borrar los datos del formulario.
'use client';
import { useState } from 'react';

import Image from 'next/image';
import styles from './Contact.module.css';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function sendEmail(e) {
    e.preventDefault();
    try {
      await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error(error);
    }

    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <section className={`container ${styles.main_wraper}`}>
      <div className={styles.decorations}>
        <Image
          className={styles.deco1}
          src="/shape_dots.svg"
          width={95}
          height={112}
          alt="backgroud dectoration"
        />
        <Image
          className={styles.deco2}
          src="/shape_charJ.svg"
          width={95}
          height={112}
          alt="backgroud dectoration"
        />
      </div>

      <div className={styles.contact}>
        <div className={styles.info}>
          <div className={styles.info_titles}>
            <h2>Contáctame</h2>
            <p>
              ¿Tienes una idea, un proyecto o una oportunidad que quieras
              discutir?¡Escríbeme y creemos algo <span>increíble</span> juntos!
            </p>
          </div>

          <div className={styles.rrss}>
            <Link href="https://www.linkedin.com/in/jos%C3%A9-manuel-g-2717b1240/" target='_blank'>
              <Image src="/icons/linkedin.svg" width={30} height={30} alt="" />
              José Manuel García
            </Link>

            <Link href="https://github.com/my-empty-space" target='_blank'>
              <Image src="/icons/github.svg" width={30} height={30} alt="" />
              my-empty-space
            </Link>

            <span>
              <Image src="/icons/mail.svg" width={30} height={30} alt="" />
              <Image src="/text-mail.png" width={190} height={19} alt="" />
            </span>
          </div>
        </div>

        <div className={styles.formWraper}>
          <div className={styles.formWraper_titles}>
            <h3>¡Enviame un mensaje!</h3>
            <p>
              Llena el formulario y envíame un mensaje directo a mi correo.
              Prometo responderte <span>lo antes posible</span>.
            </p>
          </div>

          <form onSubmit={sendEmail} className={styles.form}>
            <label>
              Nombre Completo
              <input
                required
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Email
              <input
                required
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Mensaje
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </label>

            <input
              className={styles.send}
              type="submit"
              value="Enviar formulario"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
