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

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', title: string, message: string }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Si el usuario escribe después de un error o éxito, limpiamos el estado
    if (status === 'error' || status === 'success') {
      setStatus('idle');
      setFeedback(null);
    }
  }

  async function sendEmail(e) {
    e.preventDefault();
    setStatus('loading');
    setFeedback(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Ocurrió un error al enviar el correo.');
      }

      setStatus('success');
      setFeedback({
        type: 'success',
        title: '¡Mensaje recibido con éxito!',
        message:
          'Muchas gracias por ponerte en contacto. Responderé a tu mensaje lo antes posible.',
      });

      // Limpiar formulario únicamente en caso de éxito
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      setStatus('error');
      setFeedback({
        type: 'error',
        title: 'No se pudo enviar el mensaje',
        message:
          error.message ||
          'Hubo un problema al procesar tu solicitud. Por favor, intenta nuevamente.',
      });
    }
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
            <Link
              href="https://www.linkedin.com/in/jos%C3%A9-manuel-g-2717b1240/"
              target="_blank"
            >
              <Image src="/icons/linkedin.svg" width={30} height={30} alt="" />
              José Manuel García
            </Link>

            <Link href="https://github.com/my-empty-space" target="_blank">
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
                disabled={status === 'loading'}
                autoComplete="name"
              />
            </label>

            <label>
              Email
              <input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'loading'}
                autoComplete="email"
              />
            </label>

            <label>
              <span className={styles.labelHeader}>
                <span>Mensaje</span>
                <span
                  className={`${styles.charCount} ${
                    formData.message.length >= 2000
                      ? styles.charCountLimit
                      : formData.message.length >= 1800
                      ? styles.charCountWarning
                      : ''
                  }`}
                  aria-live="polite"
                >
                  {formData.message.length} / 2000 caracteres
                </span>
              </span>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                rows={6}
                maxLength={2000}
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </label>


            {feedback && (
              <div
                className={`${styles.feedback} ${
                  feedback.type === 'success'
                    ? styles.feedbackSuccess
                    : styles.feedbackError
                }`}
                role={feedback.type === 'success' ? 'status' : 'alert'}
                aria-live={feedback.type === 'success' ? 'polite' : 'assertive'}
              >
                <div className={styles.feedbackIcon}>
                  {feedback.type === 'success' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  )}
                </div>

                <div className={styles.feedbackContent}>
                  <h4 className={styles.feedbackTitle}>{feedback.title}</h4>
                  <p className={styles.feedbackMessage}>{feedback.message}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setFeedback(null)}
                  className={styles.feedbackClose}
                  aria-label="Cerrar notificación"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            )}

            <button
              className={styles.send}
              type="submit"
              disabled={status === 'loading'}
              aria-busy={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <span className={styles.spinner} aria-hidden="true" />
                  <span>Enviando mensaje...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>¡Mensaje enviado!</span>
                </>
              ) : (
                <span>Enviar formulario</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

