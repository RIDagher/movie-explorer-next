"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getProviders, signIn } from "next-auth/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);
  const [providers, setProviders] = useState({});

  useEffect(() => {
    // getProviders().then(console.log);
    getProviders().then(setProviders);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/"); // redirect to home
    } else {
      setError("Invalid email or password");
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
          className="w-full bg-accent hover:bg-accent-dark text-white py-2 rounded"
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
              className="w-full bg-accent hover:bg-accent-dark text-white py-2 rounded"
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          ))}
    </div>
  );
};

export default LoginForm;
