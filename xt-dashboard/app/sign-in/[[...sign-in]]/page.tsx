import { SignIn } from "@clerk/nextjs";

export default function Page() {
  if ((<SignIn />)) {
    return <SignIn />;
  } else {
    return <div> Loading.... </div>;
  }
}
