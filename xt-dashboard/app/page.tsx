import { currentUser } from "@clerk/nextjs";

import Onboard from "@/components/onboard";
import DaysPass from "@/components/dayspassed";
import HomePage from "@/components/home";
import { payment, onboardStatus, check90DaysPassed } from "@/lib/action/user.action";


export default async function Home() {

  const user = await currentUser();

  if (!user) return null

  const newemail = user.emailAddresses[0];
  
  const email = newemail?.toString() ?? "";
  
  const onboard = await onboardStatus(email)

  const DaysPassed = await check90DaysPassed(email)

  const paymentStatus = await payment({ email })


  if (onboard && paymentStatus) {
    return (
      <Onboard />
    );
  }

  if (DaysPassed) {
    return (
      <DaysPass />
    )
  }

  return (
    <main>
      <HomePage paymentStatus={paymentStatus} email={email}  />
    </main>
  );
}
