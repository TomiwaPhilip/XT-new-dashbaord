"use client";

import { ReactNode } from "react";
import Link from "next/link";
import {UserButton, useUser} from "@clerk/nextjs"

export function Nav() {

  const { user } = useUser();
  const user_firstName = user?.firstName;

  return (
    <nav>
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#00234E] flex items-center justify-between px-4 py-4">
        <div className="text-white text-left text-[28px]">Welcome, {user_firstName}</div>
        <div className="text-white text-right">
          <UserButton />
        </div>
      </div>
    </nav>
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
  onClick
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
    <Link href={link || '#'}>
      <p className="bg-white hover:bg-[#03387A] hover:text-white border-4 border-[#03387A] text-[#03387A] font-bold py-2 px-4 text-[32px] rounded-md">
        {cta}
      </p>
    </Link>
  );
}


export function Footer() {
  return (
    <footer className="mt-[60px]">
      <div className="text-center text-white w-full bg-[#545256] py-2">
        Having Issues with your assessments or payments? Send us a message here!
      </div>
    </footer>
  );
}
