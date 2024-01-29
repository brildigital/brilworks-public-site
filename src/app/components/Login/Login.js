"use client";
import "./Loginstyle.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getSession, signIn, useSession } from "next-auth/react";
import React, { useCallback, useState } from "react";
import Loader from "../Homepage/Loader";
import Link from "next/link";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setEmail("");
    setPassword("");
    setName("");
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const clearMessage = () => {
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  };

  const handleSignIn = async (provider) => {
    const result = await signIn(provider, { callbackUrl: "/dashboard" });
    if (result?.url) {
      router.push(result.url);
    }
  };
  if (session?.status === "authenticated" && session?.data?.user?.email) {
    router.push("/dashboard/");
  }
  if (session?.status === "unauthenticated") {
    router.push("/login/");
  }

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      }).then((res) => {
        if (res?.error) {
          setErrorMessage(res?.error);
          clearMessage();
        } else {
          router.push("/dashboard/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await fetch(`/api/register`, {
        method: "POST",
        body: JSON.stringify({ email, name, password }),
      }).then((res) => {
        res?.ok ? setVariant(login) : "";
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password]);

  return (
    <div className="bg-white pt-[8rem] pb-8 xl:px-32 md:px-16 px-8 mx-auto login-page">
      <div className="flex flex-wrap">
        <div className="lg:w-2/5 w-full">
          <div className="border border-[#00b6cf] rounded-[7px] xl:p-10 lg:p-7 p-5">
            <form
              className="flex flex-col items-center justify-center"
              onSubmit={(e) => e.preventDefault}
            >
              <h2 className="font-bold text-2xl mb-4">
                {" "}
                {variant === "login" ? "Sign in" : "Register"}
              </h2>
              {variant === "register" && (
                <div className="relative w-full h-10 mb-4">
                  <input
                    className="peer w-full h-full border-t-0 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-blue-gray-200 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    id="name"
                    type="text"
                    name="name"
                    placeholder=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label
                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                    htmlFor="name"
                  >
                    Full Name*
                  </label>
                </div>
              )}
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
              <div
                className={`relative w-full h-10 ${
                  variant === "login" ? "mb-2" : "mb-4"
                }`}
              >
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
              {variant === "login" && (
                <div className="w-full flex justify-between mb-5">
                  <div className="form-group font-medium text-sm pl-1">
                    <input type="checkbox" id="terms-and-condition" />
                    <label
                      htmlFor="terms-and-condition"
                      className="select-none relative cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="form-group font-medium text-sm pr-1 cursor-pointer">
                    <Link href="/forget-password/">Forget Password?</Link>
                  </div>
                </div>
              )}
              <div className="w-full">
                <button
                  className="btn_flex ease-in-out !rounded-[7px] !text-lg text-white font-bold !py-[6px] !w-full hover:text-black hover:border hover:border-[#00b6cf]"
                  type="button"
                  onClick={variant === "login" ? login : register}
                >
                  {false ? (
                    <div className="py-[4px] px-[30px]">
                      <Loader />
                    </div>
                  ) : (
                    <p>{variant === "login" ? "Login" : "Sign up"}</p>
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
                    {variant === "login"
                      ? "Not account yet?"
                      : "Already have an account?"}{" "}
                    <span
                      className="font-medium text-sm text-black underline cursor-pointer"
                      onClick={toggleVariant}
                    >
                      {variant === "login" ? "Register" : "Login"}
                    </span>
                  </p>
                  <br />

                  <p className="text-center font-normal text-gray-500 text-sm">
                    Sign up with:
                  </p>
                </div>

                <div className="lg:!mt-7 mt-4">
                  <div className="flex flex-wrap items-center justify-center lg:gap-4 gap-2">
                    <div
                      className="border border-gray-300 lg:p-4 p-2 rounded-[7px] cursor-pointer shadow-none hover:shadow-lg hover:shadow-[#00b6cf]-500/50"
                      onClick={() => handleSignIn("facebook")}
                    >
                      <Image
                        src="/images/fb-share.svg"
                        width="43"
                        height="43"
                        alt="Facebook login"
                      />
                    </div>
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
                    <div
                      className="border border-gray-300 lg:p-4 p-2 rounded-[7px] cursor-pointer shadow-none hover:shadow-lg hover:shadow-[#00b6cf]-500/50"
                      onClick={() => handleSignIn("linkedin")}
                    >
                      <Image
                        src="/images/linkedin-share.svg"
                        width="43"
                        height="43"
                        alt="LinkedIn login"
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
