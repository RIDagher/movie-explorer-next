// import { redirect } from "next/navigation";
// <<<<<<< HEAD

// const Page = () => {
//   redirect("/auth/signin");
// };

// export default Page;
// =======
import { auth } from "../lib/auth.config";

import LoginForm from "../components/LoginForm";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect("/"); // // Already logged in? Redirect to homepage
  }
  return (
    <main className="min-h-screen space-y-12">
      <LoginForm />
    </main>
  );
}
// >>>>>>> 5641da19e29abd0a8a07a37eb9a061c08847c846
