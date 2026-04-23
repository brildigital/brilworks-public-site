import React from "react";
import LoginWrapper from "./LoginWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-white">
        <LoginWrapper />
    </div>
  );
};

export default page;
