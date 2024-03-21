"use server";

import connectToDB from "../database/database";
import PaymentStatus from "../model/paymentstatus";

export async function payment({ email }: { email: string }): Promise<boolean> {
    await connectToDB();
  
    const user = await PaymentStatus.findOne({ email });
  
    return !!user?.paid; // Return false if user is null or paid is false, true otherwise
  }
