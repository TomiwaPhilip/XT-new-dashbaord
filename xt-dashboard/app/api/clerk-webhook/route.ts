import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { EmailTemplate } from '@/components/email-templates';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
 
export async function POST(req: Request) {
 
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
 
  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }
 
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");
 
  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400
    })
  }
 
  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);
 
  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);
 
  let evt: WebhookEvent
 
  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', {
      status: 400
    })
  }

  const { first_name, last_name, email_addresses } = payload.data;
  const firstName = first_name;
  const lastName = last_name;
  const emailAddress = email_addresses[0].email_address;
 
  console.log(`Sending email to ${firstName} at ${emailAddress}`);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Tomiwa-Philip <onboarding@xperiencedtekie.pro>',
      to: [emailAddress],
      subject: "Welcome to Xperienced Tekie, ",
      react: EmailTemplate({ firstName: firstName }) as React.ReactElement,
    });

    resend.contacts.create({
      email: emailAddress,
      firstName: firstName,
      lastName: lastName,
      unsubscribed: false,
      audienceId: 'cce369aa-abda-4095-9b43-c9694e53a27d',
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
