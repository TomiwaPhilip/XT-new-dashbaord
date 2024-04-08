"use server";

import got from "got";
import { redirect } from "next/navigation";
import { Resend } from "resend";
const Flutterwave = require("flutterwave-node-v3");

import { EmailTemplate2 } from "@/components/email-templates";
import { savePayment } from "@/lib/action/user.action";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function getPaymentLink({
  tx_ref,
  email,
  currency,
  amount,
}: {
  tx_ref: string;
  email: string;
  currency: string;
  amount: string;
}) {
  let response: any;
  try {
    response = await got
      .post("https://api.flutterwave.com/v3/payments", {
        headers: {
          Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
        },
        json: {
          tx_ref: tx_ref,
          amount: amount,
          currency: currency,
          redirect_url: "https://f59lq3-3000.csb.app/verify",
          customer: {
            email: email,
          },
          customizations: {
            title: "Xperienced Tekie Payments",
          },
        },
      })
      .json();
  } catch (err: any) {
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
  if (status === "successful" || status === "completed") {
    console.log(status, tx_ref, transaction_id, "At the server");
    const response = await flw.Transaction.verify({ id: transaction_id });
    console.log(response);

    if (
      response.data.status === "successful" ||
      response.data.status === "completed"
    ) {
      // Success! Confirm the customer's paymentresponse.data.status
      const email = response.data.customer.email;
      const status = response.status;

      try {
        await resend.emails.send({
          from: "Xperienced-Tekie<onboarding@xperiencedtekie.pro>",
          to: [email],
          subject: "Congratulations: Seat Reserved! 🎊",
          react: EmailTemplate2(),
        });
      } catch (error) {
        return false;
      }

      try {
        // Save payment to the database
        await savePayment({
          email: email,
          paid: true,
        });
        console.log("Payment details saved to the database.");
      } catch (error) {
        console.error("Error savind payment details to DB", error);
        return false;
      }

      return true;
    } else {
      return false;
    }
  }
}
