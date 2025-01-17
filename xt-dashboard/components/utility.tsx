"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { randomBytes } from "crypto";

import { getPaymentLink } from "@/lib/action/payment.action";

export function Button({
  cta,
  link,
  disabled,
  onClick,
}: {
  cta: string;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  if (disabled) {
    return (
      <button
        className="bg-gray-300 text-gray-600 cursor-not-allowed border-4 border-[#03387A] font-bold py-2 px-4 text-[32px] rounded-md"
        disabled
      >
        {cta}
      </button>
    );
  }

  if (onClick) {
    return (
      <button
        className="bg-white hover:bg-[#03387A] hover:text-white border-4 border-[#03387A] text-[#03387A] font-bold py-2 px-4 text-[32px] rounded-md"
        onClick={onClick}
      >
        {cta}
      </button>
    );
  }

  return (
    <Link href={link || "#"}>
      <p className="bg-white hover:bg-[#03387A] hover:text-white border-4 border-[#03387A] text-[#03387A] font-bold py-2 px-4 text-[32px] rounded-md">
        {cta}
      </p>
    </Link>
  );
}

interface Props {
  heading: string;
  text: ReactNode;
  number: number;
  cta: string;
  bgColor: string;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function Cards({
  heading,
  text,
  number,
  cta,
  link,
  bgColor,
  disabled,
  onClick,
}: Props) {
  return (
    <div
      className="text-[#1D1C20] p-5 rounded-md"
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-[40px] text-center font-bold pb-5">{number}</div>
      <div className="text-[32px] text-center font-bold pb-5">{heading}</div>
      <div className="text-[18px] font-semibold pb-5">{text}</div>
      <div className="text-center pt-5">
        <Button cta={cta} link={link} disabled={disabled} onClick={onClick} />
      </div>
    </div>
  );
}

export const Modal = ({
  visible,
  onClose,
  email,
}: {
  visible: any;
  onClose: any;
  email: any;
}) => {
  function generateRandomHexString(): string {
    // Generate 32 random bytes
    const randomBytesBuffer = randomBytes(32);

    // Convert the buffer to a hexadecimal string
    const randomHexString = randomBytesBuffer.toString("hex");

    return randomHexString;
  }
  const tx_ref = generateRandomHexString();

  return (
    <div
      className={`fixed inset-0 ${visible ? "" : "hidden"} flex items-center justify-center z-50`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg p-8 z-10">
        <span
          className="absolute top-0 right-0 cursor-pointer text-xl p-3 text-grey-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </span>
        <p className="text-center text-xl font-bold">Choose your currency:</p>
        <div className="flex-col items-center justify-center mt-10 gap-5">
          <Button
            cta="Pay in NGN"
            onClick={() =>
              getPaymentLink({
                tx_ref,
                email,
                currency: "NGN",
                amount: "7860.82",
              })
            }
          />
          <br />
          <Button
            cta="Pay in USD"
            onClick={() =>
              getPaymentLink({ tx_ref, email, currency: "USD", amount: "6.3" })
            }
          />
        </div>
      </div>
    </div>
  );
};
