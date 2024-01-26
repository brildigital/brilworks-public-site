import React from "react";
import Login from "../components/Login/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  return <Login />;
};

export default page;
