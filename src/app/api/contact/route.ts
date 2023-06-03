import { NextResponse } from 'next/server';
import { sendEmail } from '@/services/nodemailer';
import { Message } from '@/types/Message';

/**
 * Send an email to me from the contact form
 */
const POST = async (req: Request) => {
  const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
  const EMAIL_PASSWORD = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

  if (!EMAIL_ADDRESS || !EMAIL_PASSWORD) {
    throw new Error('Check the provided email and password combination');
  }

  const data = await req.json();

  const { name, email, message } = data;

  const msg: Message = {
    from: name,
    to: EMAIL_ADDRESS,
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  await sendEmail(EMAIL_ADDRESS, EMAIL_PASSWORD, msg);

  return NextResponse.json(
    {
      message: 'Message sent successfully',
    },
    { status: 200 }
  );
};

export { POST };
