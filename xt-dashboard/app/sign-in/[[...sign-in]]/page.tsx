import { SignIn } from "@clerk/nextjs";

export default function Page() {
  if ((<SignIn />)) {
    return(
      <div className="flex justify-center items-center h-screen">
        <SignIn />
      </div>
    ) 
  } else {
    return <div className="flex justify-center items-center h-screen"> Loading.... </div>;
  }
}
