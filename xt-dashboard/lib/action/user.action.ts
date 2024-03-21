"use server";

import connectToDB from "../database/database";
import PaymentStatus from "../model/paymentstatus";
import User from "../model/user";

export async function payment({ email }: { email: string }): Promise<boolean> {
  try {
    await connectToDB();
    const user = await PaymentStatus.findOne({ email });
    return !!user?.paid; // Return false if user is null or paid is false, true otherwise
  } catch (error) {
    console.error("Error retrieving payment status:", error);
    throw new Error("Failed to retrieve payment status");
  }
}

export async function savePayment({ email, paid }: { email: string, paid: boolean }): Promise<boolean> {
  try {
    await connectToDB();
    const user = await PaymentStatus.create({ 
      email: email,
      paid: paid,
    });
    return true; // Return false if user is null or paid is false, true otherwise
  } catch (error) {
    console.error("Error saving payment status:", error);
    throw new Error("Failed to save payment status");
  }
}

export async function saveUser(email: string): Promise<boolean> {
  try {
    await connectToDB();
    const currentDate = new Date();
    await User.create({
      email: email,
      onboarded: true,
      signupDate: currentDate, // Save the current date as signup date
    });
    return true;
  } catch (error) {
    console.error("Error saving user:", error);
    throw new Error("Failed to save user");
  }
}

export async function onboardStatus(email: string): Promise<boolean> {
  try {
    await connectToDB();
    const user = await User.findOne({ email });
    return !!user?.onboarded;
  } catch (error) {
    console.error("Error retrieving onboarding status:", error);
    throw new Error("Failed to retrieve onboarding status");
  }
}


// Function to check if 90 days have passed since signup
export async function check90DaysPassed(email: string): Promise<boolean> {
  try {
    await connectToDB();
    
    // Retrieve the user from the database
    const user = await User.findOne({ email });
    
    // If user or signup date is missing, return false
    if (!user || !user.signupDate) {
      throw new Error("User not found or signup date missing");
    }
    
    // Calculate the date 90 days after signup
    const ninetyDaysAfterSignup = new Date(user.signupDate);
    ninetyDaysAfterSignup.setDate(ninetyDaysAfterSignup.getDate() + 90);
    
    // Get the current date
    const currentDate = new Date();
    
    // Return true if current date is greater than or equal to 90 days after signup date
    return currentDate >= ninetyDaysAfterSignup;
  } catch (error) {
    console.error("Error checking 90 days:", error);
    // Handle any errors and return false
    return false;
  }
}
