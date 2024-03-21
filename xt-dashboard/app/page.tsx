import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

import { Cards } from "@/components/shared";

export default function Home() {
  return (
    <main>
      <div className="mt-[120px] px-5 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
        <div className="w-full max-w-lg">
          <Cards
            heading="Assessment"
            text={
              <p>
                Take your 20 minutes Assessment by clicking the button below.
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
            link="/assessment"
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
            link="/payment"
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
            link="/done"
            disabled={true}
            bgColor="#EB9ECC"
          />
        </div>
      </div>
    </main>
  );
}
