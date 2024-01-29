"use client";
import React from "react";
import { useSession } from "next-auth/react";
import GuestDashboard from "../components/Dashboard/GuestDashboard";
import InvitedUserDashboard from "../components/Dashboard/InvitedUserDashboard";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
import FetchDataSpinner from "../components/Homepage/FetchDataSpinner";

const Page = () => {
  const { data: session } = useSession();

  const RoleBasedView = {
    GUEST: GuestDashboard,
    ADMIN: AdminDashboard,
    INVITEDUSER: InvitedUserDashboard,
  };
  const SelectedView = RoleBasedView[session?.user?.role] || null;
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
