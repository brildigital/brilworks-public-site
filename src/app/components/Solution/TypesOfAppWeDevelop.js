import Image from "next/image";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";

const TypesOfAppWeDevelop = ({ bgClass = "", data }) => {
  return (
    <div className={bgClass}>
      <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
        <div className="flex md:flex-row flex-col lg:gap-16 md:gap-10 gap-6">
          <div className="md:w-1/2 w-full">
            <Heading
              type="h2"
              className="lg:!text-[34px] md:!text-3xl md:!leading-snug !text-2xl mb-5"
              text={data.title}
            />
            {data.description && (
              <p className="md:text-lg text-base md:!mb-7.5 !mb-5">
                {data.description}
              </p>
            )}
            <div className="li-tick-mark sxl:mb-10 md:mb-7.5 mb-5">
              <ul>
                {data?.appTypesList?.map((data, index) => (
                  <li
                    className="blue sxl:text-xl md:text-lg text-base font-medium mb-3 last:mb-0"
                    key={index}
                  >
                    {data}
                  </li>
                ))}
              </ul>
            </div>
            <ButtonV2
              redirect="#section-contact-form"
              label={data.buttonText}
              className="hover:!text-themeColor w-fit"
              scrollingButton
            />
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              className="rounded-2xl"
              src={data.imageSrc}
              alt={data.imageAlt}
              width="565"
              height="620"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOfAppWeDevelop;
