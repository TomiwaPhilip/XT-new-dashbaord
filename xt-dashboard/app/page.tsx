import { currentUser } from "@clerk/nextjs";

import Onboard from "@/components/onboard";
import DaysPass from "@/components/dayspassed";
import HomePage from "@/components/home";
import { payment, saveUser, onboardStatus, check90DaysPassed } from "@/lib/action/user.action";


export default async function Home() {

  const user = await currentUser();

  if (!user) return null

  const newemail = user.emailAddresses[0];
  
  const email = newemail?.toString() ?? "";
  
  const onboard = await onboardStatus(email)

  const DaysPassed = await check90DaysPassed(email)

  const paymentStatus = await payment({ email })


  const handleSaveUser = async () => {
    try {
      const cohortDate: Date = new Date(2024, 4, 15);      
      const saveStatus = await saveUser(email, cohortDate);
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
      <HomePage paymentStatus={paymentStatus} handleSaveUser={handleSaveUser} />
    </main>
  );
}
