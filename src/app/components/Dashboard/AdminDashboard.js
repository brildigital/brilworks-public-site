"use client";
import React, { useEffect, useState } from "react";
import InviteModal from "./InviteModal";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { getRoleBasedUserContent } from "../lib/getRoleBasedUserContent";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { Card, CardBody } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });
  const session = useSession();
  const router = useRouter();
  const ITEMS_PER_PAGE = isTablet ? 8 : 9;
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [contentData, setContentData] = useState([]);
  const [totalContentData, setTotalContentData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [openTab, setOpenTab] = useState("dashboard");

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
  }, [open]);

  useEffect(() => {
    const fetchUserContent = async () => {
      try {
        const allowedUserData = await getRoleBasedUserContent(
          currentPage,
          ITEMS_PER_PAGE
        );
        setContentData(allowedUserData?.storyData);
        setTotalContentData(allowedUserData?.totalData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserContent();
  }, [open]);

  return (
    <>
      <div className="bg-white pt-[5rem]">
        <div className="relative flex h-[calc(100vh_-_80px)] w-full overflow-hidden">
          <div className="flex-shrink-0 overflow-x-hidden w-[260px]">
            <div className="h-full w-[260px]">
              <div className="flex h-full min-h-0 flex-col">
                <div className="flex h-full min-h-0 flex-col transition-opacity opacity-100">
                  <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-r border-black">
                    <nav className="flex h-full w-full flex-col px-3 pb-3.5">
                      <div className="flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto h-full">
                        <div className="flex flex-col gap-2 pb-2 text-token-text-primary text-sm">
                          <div>
                            <span>
                              <div className="relative mt-5 h-auto">
                                {" "}
                                <ul>
                                  <li
                                    className={`${
                                      openTab === "dashboard"
                                        ? "bg-[#c6fff0]"
                                        : ""
                                    } flex items-center gap-2 hover:bg-[#c6fff0] rounded-md p-2 mb-2`}
                                    onClick={() => setOpenTab("dashboard")}
                                  >
                                    <div className="group flex items-center justify-center lg:text-sm lg:leading-6 font-semibold select-none">
                                      Dashboard
                                    </div>
                                  </li>
                                  <li
                                    className={`${
                                      openTab === "users" ? "bg-[#c6fff0]" : ""
                                    } flex items-center gap-2 hover:bg-[#c6fff0] rounded-md p-2 mb-2`}
                                    onClick={() => setOpenTab("users")}
                                  >
                                    <div className="group flex items-center justify-center lg:text-sm lg:leading-6 font-semibold select-none">
                                      Users
                                    </div>
                                  </li>
                                  <li
                                    className={`${
                                      openTab === "content"
                                        ? "bg-[#c6fff0]"
                                        : ""
                                    } flex items-center gap-2 hover:bg-[#c6fff0] rounded-md p-2 mb-2`}
                                    onClick={() => setOpenTab("content")}
                                  >
                                    <div className="group flex items-center justify-center lg:text-sm lg:leading-6 font-semibold select-none">
                                      Content
                                    </div>
                                  </li>
                                  <li
                                    className="flex items-center gap-2 hover:bg-[#c6fff0] rounded-md p-2 mb-2"
                                    onClick={handleOpen}
                                  >
                                    <div className="group flex items-center justify-center lg:text-sm lg:leading-6 font-semibold select-none">
                                      Invite
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col pt-2 empty:hidden dark:border-white/20">
                        <div className="flex w-full items-center">
                          <div className="grow">
                            <div className="group relative">
                              <button
                                className="flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-token-sidebar-surface-secondary group-ui-open:bg-token-sidebar-surface-secondary"
                                type="button"
                              >
                                <div className="flex-shrink-0">
                                  <div className="flex items-center justify-center overflow-hidden rounded-full">
                                    <div className="relative flex">
                                      <Image
                                        alt="User"
                                        width="32"
                                        height="32"
                                        className="rounded-sm"
                                        src={
                                          session?.data?.user?.image ||
                                          "/images/reliant-img.png"
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="relative -top-px grow -space-y-px overflow-hidden text-ellipsis whitespace-nowrap text-left text-token-text-primary">
                                  <div>
                                    {" "}
                                    {session?.data?.user?.name} (
                                    {session?.data?.user?.role})
                                    <br />
                                    <small>
                                      {session?.data?.user?.email}
                                    </small>{" "}
                                  </div>
                                </div>
                                <div
                                  className="scale-125"
                                  title="Log out"
                                  onClick={() =>
                                    signOut({ callbackUrl: "/login" })
                                  }
                                >
                                  <FontAwesomeIcon icon={faSignOut} />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex h-full max-w-full flex-1 flex-row overflow-hidden">
            <div className="relative h-full w-full flex-1 overflow-auto transition-width">
              <div className="flex h-full flex-col p-6">
                <div className="flex flex-col pb-9 text-sm">
                  {openTab === "dashboard" && (
                    <div className="flex items-center flex-col justify-center">
                      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800 pt-[20%]">
                        Welcome to the Dashboard!
                      </h1>
                    </div>
                  )}
                  {openTab === "content" && (
                    <>
                      <div
                        className={`grid ${
                          !contentData?.length
                            ? "grid-cols-1"
                            : "xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
                        } gap-[2rem]`}
                      >
                        {contentData?.length ? (
                          contentData.map(({ name, slug, content }, index) => (
                            <Link
                              as={`/dashboard/${slug}`}
                              href={`/dashboard/[slug]`}
                              key={index}
                            >
                              <Card className="shadow-lg shadow-[#00b6cf]-500/50 border border-gray-300 hover:border-[#00b6cf]">
                                <div className="sec9_img1">
                                  <Image
                                    decoding="async"
                                    loading="lazy"
                                    className="rounded-t-[12px]"
                                    src={content?.Image?.filename || ""}
                                    alt={content?.Image?.alt || "Banner image"}
                                    width="450"
                                    height="230"
                                  />
                                </div>
                                <CardBody>
                                  <h2 className="text-xl why_text font-bold mb-7 pl-2">
                                    {name}
                                  </h2>
                                  <div className="inline-flex gap-4 !cursor-pointer why_text font-bold pl-2">
                                    <p className="!text-[#00b6cf]">Read More</p>
                                    <div className="aerrow relative">
                                      <img
                                        decoding="async"
                                        loading="lazy"
                                        className="black_aerrow alignnone wp-image-28 size-full"
                                        src="/images/black_aerrow-1.png"
                                        alt="arrow"
                                        width="46"
                                        height="18"
                                      />
                                    </div>
                                  </div>
                                </CardBody>
                              </Card>
                            </Link>
                          ))
                        ) : (
                          <div className="flex align-middle justify-center p-28">
                            <FetchDataSpinner />
                          </div>
                        )}
                      </div>

                      {contentData?.length ? (
                        <div className="flex justify-center mt-[5rem]">
                          <ul className="list-none flex flex-wrap">
                            <li
                              className={`h-[40px] w-fit rounded-[50%] font-[700] mr-[1rem] mb-[0.5rem] flex items-center justify-center cursor-pointer ${
                                currentPage === 1
                                  ? "opacity-50 !cursor-not-allowed"
                                  : ""
                              }`}
                              onClick={() => {
                                if (currentPage > 1) {
                                  setCurrentPage(currentPage - 1);
                                }
                              }}
                            >
                              {"< PREV"}
                            </li>

                            {Array.from({
                              length: Math.ceil(
                                totalContentData / ITEMS_PER_PAGE
                              ),
                            }).map((_, index) => (
                              <li
                                key={index}
                                className={`h-[40px] w-[40px] rounded-[20%]  font-[700] mr-[1rem] mb-[0.5rem] flex items-center justify-center cursor-pointer ${
                                  currentPage === index + 1
                                    ? " bg-[#1a1a1a] text-[#ffffff]"
                                    : ""
                                }`}
                                onClick={() => setCurrentPage(index + 1)}
                              >
                                {index + 1}
                              </li>
                            ))}
                            <li
                              className={`h-[40px] w-fit rounded-[50%] font-[700] mr-[1rem] mb-[0.5rem] flex items-center justify-center cursor-pointer ${
                                currentPage ===
                                Math.ceil(totalContentData / ITEMS_PER_PAGE)
                                  ? "!opacity-50 !cursor-not-allowed"
                                  : ""
                              }`}
                              onClick={() => {
                                if (
                                  currentPage <
                                  Math.ceil(totalContentData / ITEMS_PER_PAGE)
                                ) {
                                  setCurrentPage(currentPage + 1);
                                }
                              }}
                            >
                              {"NEXT >"}
                            </li>
                          </ul>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  )}

                  {openTab === "users" && (
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
                            {userData === null || userData === undefined ? (
                              <div className="flex items-center justify-center py-10">
                                <FetchDataSpinner />
                              </div>
                            ) : userData.length ? (
                              userData.map(
                                ({ email, role, isVerified }, index) => (
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
                                      {!!isVerified
                                        ? "Verified"
                                        : "Not Verified"}
                                    </td>
                                  </tr>
                                )
                              )
                            ) : (
                              <tr>
                                <td
                                  colSpan="3"
                                  className="px-6 py-4 text-center font-medium text-black"
                                >
                                  No User found
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InviteModal open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </>
  );
};

export default AdminDashboard;
