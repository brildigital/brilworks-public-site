"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const DashboardPage = () => {
  const { data: session } = useSession();
  const handleLogOut = (provider) => {
    signOut(provider);
  };

  return (
    <div className="container mx-auto mt-32 p-8 bg-green-300 rounded-lg shadow-lg">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <button className="bg-red-600" onClick={() => handleLogOut("google")}>
          Sign out
        </button>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome to the Dashboard!
        </h1>
        <div>
          {session ? (
            <>
              <p className="text-lg text-gray-800">
                Hello, {session?.user?.name}
              </p>
              <p className="text-md text-gray-600">
                Email: {session?.user?.email}
              </p>
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-green-300">
                <Image
                  src={session?.user?.image}
                  height={30}
                  width={30}
                  className="object-cover"
                />
              </div>
            </>
          ) : (
            <p className="text-md text-gray-600">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
