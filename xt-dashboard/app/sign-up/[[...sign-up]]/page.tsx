import { SignUp } from "@clerk/nextjs";

export default function Page() {
  if ((<SignUp />)) {
    return <SignUp />;
  } else {
    return <div> Loading.... </div>;
  }
}
