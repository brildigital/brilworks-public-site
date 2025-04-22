import Link from "next/link";
import Button from "../Common/Button";

const GameChanger = () => {
  return (
    <div className="hero-section mt-20 3xl:mt-22 h-full">
      <div className="container max-w-[1440px] md:px-10 px-4 mx-auto">
        <div className="w-full lg:h-screen h-[85vh] flex flex-col items-start justify-center">
          <div className="home_txt1 flex gap-6 flex-col items-center">
            <h1 className="xl:w-4/5 !w-full leading-tight">
              Providing&nbsp;
              <br className="mobile:hidden" />
              <span className="text-themeColor font-bold">
                Nextgen Technology <br className="mobile:block hidden" />{" "}
                Solutions
              </span>
              &nbsp;for your next leap
            </h1>
          </div>
          <div className="flex lg:items-center items-end justify-between xl:!pt-10 !pt-0">
            <div className="pt-4 xl:pt-0">
              <h2 className="sxl:!text-2xl !text-base">
                {/* Focused on AWS consulting and generative AI, we boost
                engineering and design capacity, */}
                Accelerating product timelines, optimizing AWS, and delivering
                Gen AI solutions,
                <br className="hidden slg:block" /> White label apps, and
                Product engineering expertise in Next.js, Java, and
                low-code/no-code platforms.
                {/*
                hasten product and MVP
                timelines, automate operations, and minimize expenses. */}
              </h2>
            </div>
          </div>
          <div className="lg:mt-12 mt-5 pb-20">
            <Button label="Book Free Consultation" />
          </div>
          <div className="md:py-5 absolute md:bottom-10 bottom-4">
            <span className="md:!text-2xl flex gap-2 flex-wrap">
              <Link
                className="hover:!text-themeColor"
                href="/ai-ml-development-services/"
              >
                AI
              </Link>
              |
              <Link
                className="hover:!text-themeColor"
                href="/business-intelligence-services/"
              >
                BI
              </Link>
              |
              <Link
                className="hover:!text-themeColor"
                href="/aws-consulting-services/"
              >
                Cloud
              </Link>
              |
              {/* {process.env.NEXT_PUBLIC_BASE_URL !==
                "https://www.brilworks.com/" && (
                <Link className="hover:!text-themeColor" href="#">
                  Data |
                </Link>
              )} */}
              <Link
                className="hover:!text-themeColor"
                href="/low-code-no-code-development-services/"
              >
                Low-code
              </Link>
              |
              <Link
                className="hover:!text-themeColor"
                href="/product-engineering-development-services/"
              >
                Product
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameChanger;
