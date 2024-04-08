"use server";

import got from "got";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import Flutterwave from "flutterwave-node-v3";

import { EmailTemplate2 } from "@/components/email-templates";
import { savePayment } from "@/lib/action/user.action";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function getPaymentLink({
  tx_ref,
  email,
}: {
  tx_ref: string;
  email: string;
}) {
  console.log("At the server", tx_ref, email);
  let response;
  try {
    response = await got
      .post("https://api.flutterwave.com/v3/payments", {
        headers: {
          Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
        },
        json: {
          tx_ref: tx_ref,
          amount: "100",
          currency: "NGN",
          redirect_url: "https://dash.xperiencedtekie.pro/verify",
          customer: {
            email: email,
          },
          customizations: {
            title: "Xperienced Tekie Payments",
          },
        },
      })
      .json();
  } catch (err) {
    console.log(err.code);
    console.log(response.status);
  } finally {
    redirect(response.data.link);
  }
}

export async function verifyPayment({
  status,
  tx_ref,
  transaction_id,
}: {
  status: string;
  tx_ref: string;
  transaction_id: number;
}) {
  console.log(status, tx_ref, transaction_id, "At the serever");
  const flw = new Flutterwave(
    process.env.FLW_PUBLIC_KEY,
    process.env.FLW_SECRET_KEY,
  );
  if (status === "successful") {
    console.log(status, tx_ref, transaction_id, "At the serever");
    const response = await flw.Transaction.verify({ id: transaction_id });
    console.log(response, "inside status");
    if (response.data.status === "successful" && response.data.amount === 100) {
      // Success! Confirm the customer's paymentresponse.data.status
      email = response.data.customer.email;
      const status = response.data.success;
      console.log(response);

      try {
        const { data, error } = await resend.emails.send({
          from: "Xperienced-Tekie <onboarding@xperiencedtekie.pro>",
          to: [email],
          subject: "Congratulations: Seat Reserved! 🎊",
          react: EmailTemplate2({ firstName: firstName }),
        });

        if (error) {
          return Response.json({ error });
        }
        return Response.json({ data });
      } catch (error) {
        return Response.json({ error });
      }

      try {
        // Save payment to the database
        await savePayment({
          email: email,
          paid: response.data.status,
        });
        console.log("Payment details saved to the database.");
      } catch (error) {
        console.error("Error savind payment details to DB", error);
      }

      return true;
    } else {
      return false;
    }
  }
}
