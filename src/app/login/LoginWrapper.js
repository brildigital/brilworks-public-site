"use client";
import { SessionProvider } from "next-auth/react";
import Login from "../components/Login/Login";

export default function LoginWrapper() {
  return (
    <SessionProvider>
      <Login />
    </SessionProvider>
  );
}
