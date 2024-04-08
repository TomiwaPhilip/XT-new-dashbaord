"use client";

import PDFGenerator from "@/components/handlepdf";

export default function DaysPass() {
  return (
    <div className="mt-[120px] text-center">
      <div className="text-center text-[#00234E] text-[32px] px-10 font-bold">
        Congratulations! You have completed your 3 months Software Development
        Mentorship Programme.
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center border-4 border-[#00234E] bg-[#F2E9EB] p-10 rounded-md w-[35%] mt-[80px]">
          <p className="text-[#00234E] text-[32px] pb-10 text-center font-bold">
            Download Certificate
          </p>
          <PDFGenerator />
        </div>
      </div>
    </div>
  );
}
