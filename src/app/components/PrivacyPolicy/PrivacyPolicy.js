"use client";
import parse from "html-react-parser";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";

const PrivacyPolicy = ({ data, title = "", subTitle = "Privacy Policy" }) => {
  return (
    <section className="kinderland healthvault mt-[4rem] !mb-8 md:mx-[15px] w-full flex align-middle justify-center">
      <div className="container max-w-[1280px] main-section-padding !py-8 md:px-10 px-6 mx-auto w-full">
        <div className="pb-4">
          <h1 className="md:!text-[3rem] !text-[2rem]  font-semibold">
            {title} {subTitle}
          </h1>
        </div>
        {data ? (
          <div>{parse(data?.content?.content?.content)}</div>
        ) : (
          <div className="flex align-middle justify-center p-24">
            <FetchDataSpinner />
          </div>
        )}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
