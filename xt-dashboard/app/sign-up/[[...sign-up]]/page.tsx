import { SignUp } from "@clerk/nextjs";

export default function Page() {
  if ((<SignUp />)) {
    return(
      <div className="flex justify-center items-center h-screen">
        <SignUp />
      </div>
    ) 
  } else {
    return <div className="flex justify-center items-center h-screen"> Loading.... </div>;
  }
}
