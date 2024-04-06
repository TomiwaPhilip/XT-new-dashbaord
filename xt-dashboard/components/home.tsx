"use client";

import { Cards } from "@/components/utility";
import { saveUser } from "@/lib/action/user.action";

export default function HomePage({paymentStatus, email}:{paymentStatus: boolean, email: string}) {
    
    const handleSaveUser = () => {
        const cohortDate = new Date(2024, 4, 15);
      
        saveUser(email, cohortDate)
          .then(saveStatus => {
            if (saveStatus) {
              window.location.reload(); // Reload the page if saveStatus is true
            } else {
              alert("Error saving your progress. Please try again later."); // Alert the user if there's an error
            }
          })
          .catch(error => {
            console.error("Error saving user:", error);
            alert("Error saving your progress. Please try again later."); // Alert the user if there's an error
          });
      };
      

    return (
    <>
        <div className="mt-[115px] text-center text-[#00234E] text-[32px] px-10 font-bold">Congratulations on making it this far!
        Below are the things you need to do now to reserve your seat for the programmme:
        </div>
    <div className="mt-[20px] px-5 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
    <div className="w-full max-w-lg">
      <Cards
        heading="Assessment"
        text={
          <p>
            Take your 10 minutes Assessment by clicking the button below.
            You will be redirected to a Google Form, make sure you answer
            all the questions. Use the email address you used on
            registration. Still in doubts? {""}
            <a
              href="mailto:tomiwaphilip@xperiencedtekie.pro"
              target="_blank"
              className="text-[#03387A] underline hover:no-underline"
            >
              Send us a message{" "}
            </a>{" "}
            or{" "}
            <a
              href="https://xperiencedtekie.pro/testimonials"
              target="_blank"
              className="text-[#03387A] underline hover:no-underline"
            >
              see what our mentees are saying.{" "}
            </a>{" "}
          </p>
        }
        number={1}
        cta="Start Now"
        bgColor="#E7CCDC"
        link="https://forms.gle/SivjTBbRPEKYkNrN7/assessment"
      />
    </div>
    <div className="w-full max-w-lg">
      <Cards
        heading="Payment"
        text={
          <p>
            You are about to make a one-time payment of $6 for your
            commitment and certificate fee. The 3 months programme is free
            but we need you to be committed throughout. Click the button
            below to pay now with Flutterwave. Still in doubts? {""}
            <a
              href="mailto:tomiwaphilip@xperiencedtekie.pro"
              target="_blank"
              className="text-[#03387A] underline hover:no-underline"
            >
              Send us a message{" "}
            </a>{" "}
            or{" "}
            <a
              href="https://xperiencedtekie.pro/testimonials"
              target="_blank"
              className="text-[#03387A] underline hover:no-underline"
            >
              see what our mentees are saying.{" "}
            </a>{" "}
          </p>
        }
        number={2}
        cta="Pay Now"
        link="https://flutterwave.com/pay/sjp2hulwnv08"
        bgColor="#E8B2D2"
      />
    </div>
    <div className="w-full max-w-lg">
      <Cards
        heading="Done!"
        text={
          <p>
            Are you done with step 1 & 2? Click the done button below to
            secure your seat for the next cohort starting by April 15, 2024.
            Note: This button will disabled until you have made the
            necessary payments for your programme. Still in doubts? {""}
            <a
              href="mailto:tomiwaphilip@xperiencedtekie.pro"
              target="_blank"
              className="text-[#03387A] underline hover:no-underline"
            >
              Send us a message{" "}
            </a>{" "}
            or{" "}
            <a
              href="https://xperiencedtekie.pro/testimonials"
              target="_blank"
              className="text-[#03387A] underline hover:no-underline"
            >
              see what our mentees are saying.{" "}
            </a>{" "}
          </p>
        }
        number={3}
        cta="I'm Done"
        onClick={handleSaveUser}
        disabled={paymentStatus}
        bgColor="#EB9ECC"
      />
    </div>
  </div>
  </>
  )
}