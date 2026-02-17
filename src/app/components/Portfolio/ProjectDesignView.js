import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";
import { formatSrcUrl } from "../lib/commonFunction";

const DesignBlock = ({ block }) => {
  if (!block) return null;

  const productImages = block.product_images || [];
  const [firstImage, ...otherImages] = productImages;

  return (
    <div className="container max-w-[1280px] main-section-padding-top mx-auto reveal">
      {/* Title + Description */}
      <div className="flex md:flex-row flex-col lg:gap-16 md:gap-10 gap-6 lg:mb-14 md:mb-8 mb-5">
        <div className="md:w-2/5 w-full">
          <p className="uppercase md:text-2xl text-xl mb-3">
            {block.sub_title}
          </p>

          <Heading
            className="xl:text-[56px] lg:text-5xl md:text-[42px] text-4xl !leading-tight"
            type="h2"
            text={block.title}
          />
        </div>

        <div className="md:w-3/5 w-full">
          <p className="uppercase md:text-2xl text-xl mb-3">
            {block.description_title}
          </p>
          <p className="md:text-lg text-base">{block.description}</p>
        </div>
      </div>

      {/* First Image */}
      {firstImage?.filename && (
        <Image
          className={`rounded-2xl ${
            otherImages.length > 0 ? "slg:mb-14 md:mb-8 mb-5" : ""
          }`}
          src={formatSrcUrl(firstImage.filename)}
          alt={firstImage.alt || "mockup-image"}
          width={1200}
          height={900}
        />
      )}

      {/* Other Images Grid */}
      {otherImages.length > 0 && (
        <div
          className={`grid ${
            otherImages.length > 1 ? "slg:grid-cols-2" : ""
          } grid-cols-1 gap-5`}
        >
          {otherImages.map((img, idx) => (
            <Image
              key={idx}
              className="rounded-2xl object-cover !h-full"
              src={formatSrcUrl(img.filename)}
              alt={img.alt || "mockup-image"}
              width={1200}
              height={900}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectDesignView = ({ designView }) => {
  return (
    <>
      <DesignBlock block={designView?.[0]} />
      {designView?.[1] && <DesignBlock block={designView?.[1]} />}
    </>
  );
};

export default ProjectDesignView;
