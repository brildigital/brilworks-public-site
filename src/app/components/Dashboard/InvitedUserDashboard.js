"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Card, CardBody } from "@material-tailwind/react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { getRoleBasedUserContent } from "../lib/getRoleBasedUserContent";

const InvitedUserDashboard = () => {
  const router = useRouter();
  const session = useSession();
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });
  const ITEMS_PER_PAGE = isTablet ? 8 : 9;
  const [contentData, setContentData] = useState([]);
  const [totalContentData, setTotalContentData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  if (session?.status === "unauthenticated") {
    router.push("/login/");
  }

  useEffect(() => {
    const fetchUserContent = async () => {
      try {
        const allowedUserData = await getRoleBasedUserContent(
          currentPage,
          ITEMS_PER_PAGE
        );
        setContentData(allowedUserData.storyData);
        setTotalContentData(allowedUserData.totalData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserContent();
  }, []);

  return (
    <section className="portfolio mt-[6rem]">
      <div className="service_width relative flex items-left justify-center">
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
                        session?.data?.user?.image || "/images/reliant-img.png"
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
            <div className="mt-4">
              <button
                className="btn_flex ease-in-out !rounded-[7px] !text-lg text-white font-bold !py-2 !w-full hover:text-black hover:border hover:border-[#00b6cf]"
                onClick={() => {
                  signOut({ callbackUrl: "/login" });
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto service_width md:py-[6rem] py-[4rem]">
        <div
          className={`grid ${
            !contentData?.length
              ? "grid-cols-1"
              : "xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
          } gap-[2rem]`}
        >
          {contentData?.length ? (
            contentData.map(({ name, slug, content }, index) => (
              <>
                {content?.RoleAccessible?.includes("INVITEDUSER") ? (
                  <Link href="#" key={index}>
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
                ) : (
                  ""
                )}
              </>
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
                  currentPage === 1 ? "opacity-50 !cursor-not-allowed" : ""
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
                  currentPage === Math.ceil(totalContentData / ITEMS_PER_PAGE)
                    ? "!opacity-50 !cursor-not-allowed"
                    : ""
                }`}
                onClick={() => {
                  if (
                    currentPage < Math.ceil(totalContentData / ITEMS_PER_PAGE)
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
    </section>
  );
};

export default InvitedUserDashboard;
