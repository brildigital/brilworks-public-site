"use client";
import React from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import dynamic from "next/dynamic";

const UserDashboard = dynamic(() => import("./UserDashboard"));
const AdminDashboard = dynamic(() => import("./AdminDashboard"));
const InvitedUserDashboard = dynamic(() => import("./InvitedUserDashboard"));

const Dashboard = ({ role }) => {
  if (role === "USER") {
    return <UserDashboard />;
  }
  if (role === "ADMIN") {
    return <AdminDashboard />;
  }
  if (role === "INVITEDUSER") {
    return <InvitedUserDashboard />;
  }
  return (
    <div className="md:pt-[8rem] pt-[6rem] pb-8 blog-main bg-white technical-QA-Page">
      <div className="container mx-auto my-0 !px-4">
        <div className="flex items-end justify-center py-28">
          <FetchDataSpinner />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
