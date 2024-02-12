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

const AdminDashboard = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });
  const session = useSession();
  const router = useRouter();
  const ITEMS_PER_PAGE = isTablet ? 8 : 9;
  const [open, setOpen] = useState(false);
  const [isResourceData, setIsResourceData] = useState(false);
  const [userData, setUserData] = useState(null);
  const [contentData, setContentData] = useState([]);
  const [totalContentData, setTotalContentData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

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
  }, [isResourceData]);

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
            <div className="flex">
              <h2
                className={`${
                  isResourceData
                    ? "no-underline hover:!underline"
                    : "!underline"
                } font-bold lg:text-3xl md:text-2xl text-xl p-4 break-words`}
                onClick={() => setIsResourceData(false)}
              >
                Invited user
              </h2>
              <h2
                className={`${
                  isResourceData
                    ? "!underline"
                    : "no-underline hover:!underline"
                } font-bold lg:text-3xl md:text-2xl text-xl p-4 break-words`}
                onClick={() => setIsResourceData(true)}
              >
                All content
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
          {isResourceData ? (
            <div className="">
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
                      length: Math.ceil(totalContentData / ITEMS_PER_PAGE),
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
            </div>
          ) : (
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
                      userData.map(({ email, role, isVerified }, index) => (
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
      <InviteModal open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </>
  );
};

export default AdminDashboard;
