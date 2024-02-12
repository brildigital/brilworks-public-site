"use client";
import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Dashboard role={session?.data?.role} />
    </div>
  );
};

export default Page;
