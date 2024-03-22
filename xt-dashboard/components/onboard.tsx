export default function Onboard() {
    return (
        <div className="mt-[120px]">
        <div className="text-center text-[#00234E] text-[32px] px-10">Congratulations! You have been selected for the 
            3 months Software Engineering Mentorship Programme.
        </div>
        <div className="flex flex-col items-center justify-center h-full mt-[80px]">
          <div className="rounded-md text-[#131216] bg-[#4BA3C5] px-5 py-8">
            <p className="text-[18px] font-bold text-center mb-4">Below is what you need to do now!</p>
            <ol className="list-decimal">
              <li className="mb-2">
                Join our discord community by clicking <a href=""> here </a>. This is your virtual workingspace for the mentorship programme.
              </li>
              <li className="mb-2">
                Wait till your programme starts by April 15, 2024. (An email will be sent to you before then).
              </li>
              <li className="mb-2">
                Start Preparing by setting up your dev tools!
              </li>
              <li>
                Send us a message <a href="mailto:tomiwaphilip@xperiencedtekie.pro"> here </a> telling us how happy you are!
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
}