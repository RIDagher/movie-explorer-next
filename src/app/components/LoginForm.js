"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getProviders, signIn } from "next-auth/react";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);
  const [providers, setProviders] = useState({});

  useEffect(() => {
    getProviders().then(setProviders);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call NextAuth signIn with redirect disabled (manual handling)
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // No automatic redirect
    });

    // Handle success or error manually
    if (result?.error) {
      //  Credentials error returned from backend
      setError("Invalid email or password");
      toast.error("Login failed ");
    } else {
      // Successful login
      toast.success("Successfully signed in!");
      router.push("/");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 space-y-4 text-light">
      {/* <h1 className="text-4xl font-bold text-center text-light">Welcome</h1> */}
      <h2 className="text-2xl font-bold text-center text-light">
        Sign in or create an account
      </h2>

      {/* Google OAuth Button */}
      {providers &&
        Object.values(providers)
          .filter((p) => p.id !== "credentials")
          .map((provider) => (
            <button
              key={provider.name}
              className="w-full font-bold bg-accent hover:bg-accent-dark text-white py-2 rounded"
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          ))}

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-600" />
        <span className="mx-4 text-gray-400 text-sm font-medium">or</span>
        <div className="flex-grow border-t border-gray-600" />
      </div>

      {/* Credentials login form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-card text-light"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-card text-light"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full font-bold bg-accent hover:bg-accent-dark text-white py-2 rounded"
        >
          Signin with Email
        </button>
      </form>

      {/* Divider
      <h3 className="text-center font-bold text-sm text-gray-500">
        ---- or -----
      </h3> */}
      {/* {New user registration prompt} */}
      <div className="mt-6 text-center">
        <span className="mb-2">New here? </span>
        <button
          onClick={() => router.push("/register")} // This button is using Next.js's client-side navigation to send the user to the /register page without reloading the page
          className="px-2 font-bold text-accent hover:text-accent-dark hover:underline transition"
        >
          Create a New account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
