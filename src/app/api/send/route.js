import { EmailTemplate } from '../../../utils/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: 'PortfolioV2 <contacto@mail.myempty.space>', // Reemplaza con tu dominio verificado en Resend
      to: [process.env.MAIL], // Reemplaza con tu dirección de correo electrónico
      subject: `Formulario de contacto PortfolioV2 de ${name}`,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Correo Electrónico:</strong> ${email}</p>
             <p><strong>Mensaje:</strong> ${message}</p>`,
      react: EmailTemplate(body),
    });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: `Someone <onboarding@resend.dev>`,
//       to: [process.env.MAIL],
//       subject: 'Hello world',
//       react: EmailTemplate({ firstName: 'John' }),
//     });
//
//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }
//
//     return Response.json({ message: 'Email Enviado', data }, { status: 200 });
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
