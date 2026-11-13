import React from "react";
import Login from "../components/Login/Login";

export const metadata = {
  robots: { index: false, follow: false },
};

const page = () => {
  return (
    <div className="bg-white">
      <Login />
    </div>
  );
};

export default page;