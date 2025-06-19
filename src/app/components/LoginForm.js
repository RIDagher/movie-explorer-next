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
      <h2 className="text-2xl font-bold text-center text-light">Sign In</h2>

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
          Login with Email
        </button>
      </form>

      {/* Divider */}
      <h3 className="text-center text-sm text-gray-500">
        Sign in with your Google account
      </h3>

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
    </div>
  );
};

export default LoginForm;
