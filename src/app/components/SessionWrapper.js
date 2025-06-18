// This is a wrapper component that provides a session context to its children components.
"use client";

import { SessionProvider } from "next-auth/react";

export default function SessionWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
