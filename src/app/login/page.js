import { redirect } from "next/navigation";

import { auth } from "../lib/auth.config";

import LoginForm from "../components/LoginForm";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect("/"); // on success redirect to homepage
  }
  return (
    <main className="min-h-screen space-y-12">
      <LoginForm />
    </main>
  );
}
