import { EmailTemplate } from '../../../utils/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: `Portfolio <${process.env.SENDER_CONTACT_MAIL}>`,
      to: [process.env.RECIPIENT_CONTACT_MAIL],
      subject: `Contacto desde el Portfolio de ${name}`,
      template: {
        id: "portfolio-contact-email",
        variables: {
          name: name,
          email: email,
          message: message
        }
      },
      // react: EmailTemplate(body),
    });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}