"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import React, { useCallback, useState } from "react";
import Loader from "../Homepage/Loader";
import Link from "next/link";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearMessage = () => {
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  };

  if (session?.status === "authenticated" && session?.data?.user?.email) {
    router.push("/dashboard/");
  }

  const login = useCallback(async () => {
    setIsLoading(true);
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      }).then((res) => {
        if (res?.error) {
          setIsLoading(false);
          setErrorMessage(res?.error);
          clearMessage();
        } else {
          router.push("/dashboard/");
        }
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [email, password]);

  return (
    <div className="container pt-[8rem] pb-8 xl:px-32 md:px-16 px-8 mx-auto login-page">
      <div className="flex flex-wrap justify-between">
        <div className="lg:w-1/3 w-full mt-7">
          <div className="bg-white border border-[#00b6cf] rounded-[7px] xl:p-10 lg:p-7 p-5">
            <form
              className="flex flex-col items-center justify-center"
              onSubmit={(e) => e.preventDefault}
            >
              <h2 className="font-bold text-2xl mb-4">Sign in</h2>
              <div className="relative w-full h-10 mb-6">
                <input
                  className="peer w-full h-full border-t-0 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-blue-gray-200 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  id="email"
                  type="email"
                  name="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                  htmlFor="email"
                >
                  Email*
                </label>
              </div>
              <div className="relative w-full h-10 mb-2">
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

              <div className="w-full flex justify-end mb-2">
                <div className="form-group font-semibold text-sm pr-1 cursor-pointer">
                  <Link href="/forget-password/" className="hover:!underline">
                    Forget Password?
                  </Link>
                </div>
              </div>

              <div className="w-full">
                <button
                  className="c-button c-btn-primary !rounded-[7px] !text-lg font-bold !py-[6px] !w-full hover:text-black"
                  type="button"
                  onClick={login}
                >
                  {isLoading ? (
                    <div className="py-[4px] px-[30px]">
                      <FetchDataSpinner size={"la-sm"} />
                    </div>
                  ) : (
                    <p>Login</p>
                  )}
                </button>
                <span className="text-red-600 text-xs font-semibold">
                  {errorMessage}
                </span>
              </div>
            </form>
            <div>
              <div>
                <div className="py-4 gap-4">
                  <p className="text-center font-normal text-gray-500 text-sm">
                    Sign up with:
                  </p>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap items-center justify-center lg:gap-4 gap-2">
                    <div
                      className="border border-gray-300 lg:p-4 p-2 rounded-[7px] cursor-pointer shadow-none hover:shadow-lg hover:shadow-[#00b6cf]-500/50"
                      onClick={() => signIn("google")}
                    >
                      <Image
                        src="/images/Google_icon.svg"
                        width="43"
                        height="43"
                        alt="Google login"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-3/5 w-full">
          <Image
            src="/images/login-banner.webp"
            className=""
            width="1440"
            height="1000"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
