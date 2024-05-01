"use client";
import StoryblokClient from "storyblok-js-client";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import "./privacypolicy.scss";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const ExpenifyTermsAndConditions = () => {
  const [policyData, setPolicyData] = useState("");

  useEffect(() => {
    Storyblok.get("cdn/stories/expenify-terms-conditions", {
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    })
      .then((response) => {
        setPolicyData(response?.data?.story);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="kinderland mt-[6rem] !mb-8 md:mx-[15px] w-full flex align-middle justify-center">
      <div className="md:w-4/5 w-full md:px-0 px-4">
        <div className="pb-4">
          <h1 className="md:!text-[3rem] !text-[2rem]  font-semibold">
            Expenify Terms and Conditions
          </h1>
        </div>
        {policyData ? (
          <div>{parse(policyData?.content?.content?.content)}</div>
        ) : (
          <div className="flex align-middle justify-center p-24">
            <FetchDataSpinner />
          </div>
        )}
      </div>
    </section>
  );
};

export default ExpenifyTermsAndConditions;
