"use client";

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


export function Footer() {
  return (
    <footer className="mt-[60px]">
      <div className="text-center text-white w-full bg-[#545256] py-2">
        Having Issues with your assessments or payments? Send us a message here!
      </div>
    </footer>
  );
}