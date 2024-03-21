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
    await User.create({
      email: email,
      onboarded: true,
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
