import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";
import { formatSrcUrl } from "../lib/commonFunction";

const ProjectDesignView = ({ designView }) => {
  const productImages = designView?.[0]?.product_images || [];
  const [firstImage, ...otherImages] = productImages;

  const productImagesTwo = designView?.[1]?.product_images || [];
  const [firstImageTwo, ...otherImagesTwo] = productImagesTwo;

  return (
    <>
      <div className="container max-w-[1280px] main-section-padding-top mx-auto reveal">
        <div className="flex md:flex-row flex-col lg:gap-16 md:gap-10 gap-6 lg:mb-14 md:mb-8 mb-5">
          <div className="md:w-2/5 w-full">
            <p className="uppercase md:text-2xl text-xl mb-3">
              {designView?.[0]?.sub_title}
            </p>
            <Heading
              className="xl:text-[56px] lg:text-5xl md:text-[42px] text-4xl !leading-tight"
              type="h2"
              text={designView?.[0]?.title}
            />
          </div>
          <div className="md:w-3/5 w-full">
            <p className="uppercase md:text-2xl text-xl mb-3">
              {designView?.[0]?.description_title}
            </p>
            <p className="md:text-lg text-base">
              {designView?.[0]?.description}
            </p>
          </div>
        </div>
        {firstImage?.filename && (
          <Image
            className="rounded-2xl slg:mb-14 md:mb-8 mb-5"
            src={formatSrcUrl(firstImage?.filename)}
            alt={firstImage?.alt || "mockup-1"}
            width="1200"
            height="900"
          />
        )}
        {otherImages.length > 1 && (
          <div className="grid slg:grid-cols-2 grid-cols-1 gap-5">
            {otherImages.map((img, idx) => {
              return (
                <Image
                  key={idx}
                  className="rounded-2xl object-cover !h-full"
                  src={img?.filename}
                  alt={img?.alt || "mockup-1"}
                  width="1200"
                  height="900"
                />
              );
            })}
          </div>
        )}
      </div>
      {designView?.[1]?.title && (
        <div className="container max-w-[1280px] main-section-padding-top mx-auto reveal">
          <div className="flex md:flex-row flex-col lg:gap-16 md:gap-10 gap-6 lg:mb-14 md:mb-8 mb-5">
            <div className="md:w-2/5 w-full">
              <p className="uppercase md:text-2xl text-xl mb-3">
                {designView?.[1]?.sub_title}
              </p>
              <Heading
                className="xl:text-[56px] lg:text-5xl md:text-[42px] text-4xl !leading-tight"
                type="h2"
                text={designView?.[1]?.title}
              />
            </div>
            <div className="md:w-3/5 w-full">
              <p className="uppercase md:text-2xl text-xl mb-3">
                {designView?.[1]?.description_title}
              </p>
              <p className="md:text-lg text-base">
                {designView?.[1]?.description}
              </p>
            </div>
          </div>
          {firstImageTwo?.filename && (
            <Image
              className="rounded-2xl slg:mb-14 md:mb-8 mb-5"
              src={formatSrcUrl(firstImageTwo?.filename)}
              alt={firstImageTwo?.alt || "mockup-2"}
              width="1200"
              height="900"
            />
          )}
          {otherImagesTwo.length > 1 && (
            <div className="grid slg:grid-cols-2 grid-cols-1 gap-5">
              {otherImagesTwo.map((img, idx) => {
                return (
                  <Image
                    key={idx}
                    className="rounded-2xl object-cover !h-full"
                    src={img?.filename}
                    alt={img?.alt || "mockup-1"}
                    width="1200"
                    height="900"
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectDesignView;
