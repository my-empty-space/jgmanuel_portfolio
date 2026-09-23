import { EmailTemplate } from '../../../utils/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validación de campos requeridos
    if (
      !name ||
      !name.trim() ||
      !email ||
      !email.trim() ||
      !message ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: 'Por favor, completa todos los campos requeridos.' },
        { status: 400 }
      );
    }

    // Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'El formato del correo electrónico no es válido.' },
        { status: 400 }
      );
    }

    // Validación de longitud máxima de mensaje
    if (message.trim().length > 2000) {
      return NextResponse.json(
        { error: 'El mensaje no puede exceder los 2000 caracteres.' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn(
        'RESEND_API_KEY no está configurada en las variables de entorno.'
      );
      return NextResponse.json(
        { error: 'El servicio de correo no está configurado en el servidor.' },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Portfolio <${process.env.SENDER_CONTACT_MAIL || 'onboarding@resend.dev'}>`,
      to: [process.env.RECIPIENT_CONTACT_MAIL],
      subject: `Contacto desde el Portfolio de ${name.trim()}`,
      template: {
        id: 'portfolio-contact-email',
        variables: {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        },
      },
      replyTo: email.trim(),
      // react: EmailTemplate(body),
    });

    if (error) {
      console.error('Error reportado por Resend:', error);
      return NextResponse.json(
        { error: error.message || 'Error al procesar el envío del correo.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: '¡Mensaje recibido con éxito!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en POST /api/send:', error);
    return NextResponse.json(
      {
        error:
          error.message || 'Ocurrió un error inesperado al enviar el mensaje.',
      },
      { status: 500 }
    );
  }
}
