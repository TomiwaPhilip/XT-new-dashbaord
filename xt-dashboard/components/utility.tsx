"use client";

import { ReactNode } from "react";
import Link from "next/link";

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
  
  
