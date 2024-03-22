"use client";

import { Button } from "./utility";
import { handlePDF } from "@/lib/util"

export default function DaysPass() {
    return (
        <div className="mt-[120px]">
        <div className="text-center text-[#00234E] text-[32px] px-10">Congratulations! You have been selected for the 
            3 months Software Engineering Mentorship Programme.
        </div>
        <div className="flex flex-col items-center justify-center h-full mt-[80px]">
          <p className="text-[#00234E] text-[32px] pb-10 text-center">Download Certificate</p>
          <Button cta={"Download"} onClick={handlePDF} />
        </div>
        </div>
    )
}