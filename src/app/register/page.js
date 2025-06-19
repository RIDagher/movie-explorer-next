"use client";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null); // Clear any previous error

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        // Backened may return custom message
        const message = result?.message || "Registration failed";
        setError(message);
        toast.error(message);
        return;
      }

      // Registration successful
      toast.success("Registration successful");
      router.push("/login");
    } catch (err) {
      setError("Something went wrong");
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 space-y-4 text-light">
      <h2 className="text-2xl font-bold text-light text-center">
        Create an Account
      </h2>
      <br />

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          className="w-full p-3 rounded bg-card text-light"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="w-full p-3 rounded bg-card text-light"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="w-full p-3 rounded bg-card text-light"
          required
        />

        {/* Show error message */}
        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full font-bold bg-accent hover:bg-accent-dark text-white py-2 rounded"
        >
          Register
        </button>
      </form>

      <div className="mt-6 text-center">
        <span>Already have an account? </span>
        <button
          className="text-accent hover:text-accent-dark transition"
          onClick={() => router.push("/login")}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
