"use client";
import React, { useEffect, useState } from "react";
import InviteModal from "./InviteModal";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";

const AdminDashboard = () => {
  const session = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  if (session?.status === "unauthenticated") {
    router.push("/login/");
  }
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const fetchAllUserData = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUserData(data.users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchAllUserData();
  }, []);

  return (
    <>
      <div className="md:pt-[8rem] pt-[6rem] pb-8 blog-main bg-white technical-QA-page">
        <div className="container mx-auto my-0 !px-4">
          <div className="bg-green-300 rounded-lg shadow-lg">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                Welcome to the Dashboard!
              </h1>
              <div className="flex flex-row gap-4">
                {session?.data ? (
                  <>
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-green-300">
                      <Image
                        src={
                          session?.data?.user?.image ||
                          "/images/reliant-img.png"
                        }
                        height={30}
                        width={30}
                      />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800">
                        Hello, {session?.data?.user?.name} (
                        {session?.data?.user?.role})
                      </p>
                      <p className="text-md text-gray-600">
                        Email: {session?.data?.user?.email}
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="text-md text-gray-600">Loading...</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold lg:text-3xl md:text-2xl text-xl p-4 break-words">
                Invited user
              </h2>
            </div>
            <div className="inline-flex items-end justify-between gap-3">
              <button
                className="btn_flex ease-in-out !rounded-[7px] !text-lg text-white font-bold !py-2 !w-full hover:text-black hover:border hover:border-[#00b6cf]"
                onClick={handleOpen}
              >
                Invite
              </button>
              <button
                className="btn_flex ease-in-out !rounded-[7px] !text-lg text-white font-bold !py-2 !w-full hover:text-black hover:border hover:border-[#00b6cf]"
                onClick={() => signOut({ callbackUrl: "/login" })}
              >
                Logout
              </button>
            </div>
          </div>
          <div className=" w-full">
            <div className="relative overflow-x-auto border sm:rounded-md border-gray-300">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {userData?.length ? (
                      <>
                        <th scope="col" className="px-6 py-3">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Verified
                        </th>
                      </>
                    ) : (
                      ""
                    )}
                  </tr>
                </thead>
                <tbody>
                  {userData?.length ? (
                    userData?.map(({ email, role, isVerified }, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {email}
                        </th>
                        <td className="px-6 py-4">{role}</td>
                        <td className="px-6 py-4">
                          {!!isVerified ? "Verified" : "Not Verified"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div className="flex items-end justify-center py-10">
                      <FetchDataSpinner />
                    </div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <InviteModal open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </>
  );
};

export default AdminDashboard;
