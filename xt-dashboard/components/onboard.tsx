export default function Onboard() {
  return (
    <div className="mt-[120px]">
      <div className="text-center text-[#00234E] text-[32px] px-10 font-bold">
        Congratulations! You have been selected for the 3 months Software
        Development Mentorship Programme.
      </div>
      <div className="flex flex-col items-center justify-center h-full mt-[80px]">
        <div className="rounded-md text-[#131216] bg-[#4BA3C5] px-5 py-8">
          <p className="text-[18px] font-bold text-center mb-4">
            Below is what you need to do now!
          </p>
          <ol className="list-decimal px-5 font-semibold">
            <li className="mb-2">
              Join our WhatsApp community by clicking{" "}
              <a
                href="https://chat.whatsapp.com/KOoaMK8bCtcKjGisxTq0dl"
                className="text-red-500"
              >
                {" "}
                here{" "}
              </a>
              . This is your virtual community space for the mentorship
              programme.
            </li>
            <li className="mb-2">
              Wait till your programme starts by April 22, 2024. (An email will
              be sent to you before then).
            </li>
            <li className="mb-2">
              Start Preparing by setting up your dev tools!
            </li>
            <li>
              Do a shoutout to us on X
              <a
                href="https://twitter.com/XTekie43088"
                className="text-red-500"
              >
                {" "}
                here.{" "}
              </a>{" "}
              Tag us and we will comment on your post!
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
