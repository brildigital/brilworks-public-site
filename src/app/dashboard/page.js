"use client";
import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Dashboard role={session?.user?.role} />
    </div>
  );
};

export default Page;
