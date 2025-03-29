import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendEmail(payload: EmailPayload) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'eyuelnigussie@example.com',
      subject: `New Contact Form Submission from ${payload.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}