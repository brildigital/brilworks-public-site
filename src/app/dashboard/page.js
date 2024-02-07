"use client";
import React from "react";
import { useSession } from "next-auth/react";
import UserDashboard from "../components/Dashboard/UserDashboard";
import InvitedUserDashboard from "../components/Dashboard/InvitedUserDashboard";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
import FetchDataSpinner from "../components/Homepage/FetchDataSpinner";
import { useRouter } from "next/navigation";

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const RoleBasedView = {
    USER: UserDashboard,
    ADMIN: AdminDashboard,
    INVITEDUSER: InvitedUserDashboard,
  };
  const SelectedView = session?.user?.role
    ? RoleBasedView[session?.user?.role]
    : router.push("/login");
  return (
    <>
      {SelectedView ? (
        <SelectedView />
      ) : (
        <div className="md:pt-[8rem] pt-[6rem] pb-8 blog-main bg-white technical-QA-page">
          <div className="container mx-auto my-0 !px-4">
            <div className="flex items-end justify-center py-28">
              <FetchDataSpinner />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Page;
