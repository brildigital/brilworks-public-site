"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const VerifyEmail = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const verificationtoken = pathname.split("/").reverse()[1];

  const handleSetPassword = async () => {
    const formData = {
      password: confirmPassword,
      token: verificationtoken,
    };
    try {
      const response = await fetch(`/api/set-password`, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (response?.ok) {
        setMessage("Password set successfully");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="md:pt-[8rem] pt-[6rem] pb-8 blog-main bg-white technical-QA-page">
      <div className="container mx-auto my-10 w-1/3 border border-gray-600 shadow-xl p-8 rounded-lg">
        <h4 className="mb-8 text-3xl text-center font-bold">Set Password</h4>
        <div className="relative w-full h-10 mb-4">
          <input
            className="peer w-full h-full border-t-0 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-blue-gray-200 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            id="password"
            type="password"
            name="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label
            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
            htmlFor="password"
          >
            Password*
          </label>
        </div>
        <div className="relative w-full h-10 mb-4">
          <input
            className="peer w-full h-full border-t-0 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-blue-gray-200 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            id="cpassword"
            type="password"
            name="cpassword"
            placeholder=""
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label
            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
            htmlFor="cpassword"
          >
            Confirm Password*
          </label>
        </div>
        <p className="text-xs text-red-600 !mb-4">
          {password.length &&
          confirmPassword.length &&
          password !== confirmPassword
            ? "Password and confirm password is not same"
            : ""}
        </p>
        <button
          type="submit"
          className="btn_flex ease-in-out !rounded-[7px] !text-lg text-white font-bold !py-2 !w-full hover:text-black hover:border hover:border-[#00b6cf]"
          onClick={handleSetPassword}
          disabled={!verificationtoken || password !== confirmPassword}
        >
          Send
        </button>

        <p className="text-xl font-semibold text-green-600 py-2">{message}</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
