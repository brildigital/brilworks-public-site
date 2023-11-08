"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getbloglist } from "../lib/getblog";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";

const Sitemap = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const blogData = await getbloglist(100);
        setBlogList(blogData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mt-[6rem] md:mt-[9rem] my-[15px] mx-auto md:w-1/2 w-[90%]">
      <div className="flex align-middle justify-center">
        <h1 className="text-[30px] leading-9 font-bold">Site Map</h1>
      </div>
      <div className="py-10">
        <div className="mb-4">
          <h3 className="text-2xl border-b border-b-[#c5ccd0] font-bold pb-2 mb-3">
            About Brilworks
          </h3>
          <div className="grid gap-2 md:grid-cols-3 grid-cols-2">
            <div>
              <li>
                <Link href="/" className="font-medium">
                  Home
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/contact-us/" className="font-medium">
                  Contact
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/portfolio/" className="font-medium">
                  Portfolio
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/career/" className="font-medium">
                  Career
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/blog/" className="font-medium">
                  Blog
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/our-process/" className="font-medium">
                  Our process
                </Link>
              </li>
            </div>

            <div>
              <li>
                <Link href="/about-us/" className="font-medium">
                  About
                </Link>
              </li>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl border-b border-b-[#c5ccd0] font-bold pb-2 mb-3">
            Portfolio
          </h3>

          <div className="grid gap-2 md:grid-cols-3 grid-cols-2">
            <div>
              <li>
                <Link href="/portfolio/vugo/" className="font-medium">
                  Vugo
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/portfolio/rastrack/" className="font-medium">
                  Rastrack
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/portfolio/orokii/" className="font-medium">
                  Orokii
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/portfolio/eccocar/" className="font-medium">
                  Eccocar
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/portfolio/trackimo/" className="font-medium">
                  Trackimo
                </Link>
              </li>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl border-b border-b-[#c5ccd0] font-bold pb-2 mb-3">
            Solutions
          </h3>
          <div className="grid gap-2 md:grid-cols-3 grid-cols-1">
            <div>
              <li>
                <Link
                  href="/industry/fintech-software-development/"
                  className="font-medium"
                >
                  Fintech
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link
                  href="/industry/fleet-management-software-development/"
                  className="font-medium"
                >
                  Fleet Management + GPS
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link
                  href="/industry/media-entertainment-software-development/"
                  className="font-medium"
                >
                  Media & Entertainment
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link
                  href="/industry/healthcare-software-development/"
                  className="font-medium"
                >
                  Healthcare
                </Link>
              </li>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl border-b border-b-[#c5ccd0] font-bold pb-2 mb-3">
            Technologies
          </h3>

          <div className="grid gap-2 md:grid-cols-3 grid-cols-1">
            <div>
              <li>
                <Link href="/hire-reactjs-developer/" className="font-medium">
                  ReactJS
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link
                  href="/hire-react-native-developer/"
                  className="font-medium"
                >
                  React Native
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link
                  href="/hire-blockchain-developer/"
                  className="font-medium"
                >
                  Blockchain Development
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/hire-java-developer/" className="font-medium">
                  Java
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/hire-aws-developer/" className="font-medium">
                  AWS Development
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/hire-ui-ux-designer/" className="font-medium">
                  UI/UX Development
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/hire-nodejs-developer/" className="font-medium">
                  NodeJS
                </Link>
              </li>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl border-b border-b-[#c5ccd0] font-bold pb-2 mb-3">
            Blogs
          </h3>

          <div className="grid gap-[10px] grid-cols-1">
            {blogList.length ? (
              blogList.map(({ slug, name }, index) => {
                return (
                  <div key={index}>
                    <li>
                      <Link
                        as={`/blog/${slug}`}
                        href={`/blog/[slug]`}
                        className="font-medium"
                      >
                        {name}
                      </Link>
                    </li>
                  </div>
                );
              })
            ) : (
              <div className="flex align-middle justify-center">
                <FetchDataSpinner />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
