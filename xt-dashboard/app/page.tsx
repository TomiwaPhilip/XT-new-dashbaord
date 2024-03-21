import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Button, Cards } from "@/components/shared";
import { payment, saveUser, onboardStatus, check90DaysPassed } from "@/lib/action/user.action";

export default function Home() {

  const [onboard, setOnboard] = useState(false);
  const [DaysPassed, setDaysPassed] = useState(false);
  const [paymentStatus, setPaymentstatus] = useState(false)

  const email = "tomiwa@gmail.com";

  useEffect(() => {
    onboardStatus(email).then((status) => {
      setOnboard(status);
    });
  }, []);

  useEffect(() => {
    check90DaysPassed(email).then((status) => {
      setDaysPassed(status);
    });
  }, []);

  payment({ email }).then((status) => {
    setPaymentstatus(status)
  });

  const handleSaveUser = async () => {
    try {
      const saveStatus = await saveUser(email);
      if (saveStatus) {
        window.location.reload(); // Reload the page if saveStatus is true
      } else {
        alert("Error saving your progress. Please try again later."); // Alert the user if there's an error
      }
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Error saving your progress. Please try again later."); // Alert the user if there's an error
    }
  }; 

  if (onboard) {
    return (
      <div className="mt-[120px]">
        <div className="text-center text-[#00234E] text-[32px] px-10">Congratulations! You have been selected for the 
            3 months Software Engineering Mentorship Programme.
        </div>
        <div className="flex flex-col items-center justify-center h-full mt-[80px]">
          <div className="rounded-md text-[#131216] bg-[#4BA3C5] px-5 py-8">
            <p className="text-[18px] font-bold text-center mb-4">Below is what you need to do now!</p>
            <ol className="list-decimal">
              <li className="mb-2">
                Join our discord community by clicking <a href=""> here </a>. This is your virtual workingspace for the mentorship programme.
              </li>
              <li className="mb-2">
                Wait till your programme starts by April 15, 2024. (An email will be sent to you before then).
              </li>
              <li className="mb-2">
                Start Preparing by setting up your dev tools!
              </li>
              <li>
                Send us a message <a href="mailto:tomiwaphilip@xperiencedtekie.pro"> here </a> telling us how happy you are!
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  if (DaysPassed) {
    return (
      <div className="mt-[120px]">
      <div className="text-center text-[#00234E] text-[32px] px-10">Congratulations! You have been selected for the 
          3 months Software Engineering Mentorship Programme.
      </div>
      <div className="flex flex-col items-center justify-center h-full mt-[80px]">
        <p className="text-[#00234E] text-[32px] pb-10 text-center">Download Certificate</p>
        <Button cta={"Download"} onClick={handleDownload}/>
      </div>
      </div>
    )
  }

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
            onClick={handleSaveUser}
            disabled={paymentStatus}
            bgColor="#EB9ECC"
          />
        </div>
      </div>
    </main>
  );
}
