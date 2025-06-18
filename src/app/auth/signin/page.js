"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const Page = () => {
  const [providers, setProviders] = useState({});

  useEffect(() => {
    // getProviders().then(console.log);
    getProviders().then(setProviders);
  }, []);

  console.log("OAuth providers:", providers);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-6"></h1>
      {providers ? (
        Object.values(providers).map((provider) => (
          <button
            key={provider.name}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        ))
      ) : (
        <p>Loading providers...</p>
      )}
    </div>
  );
};

export default Page;
