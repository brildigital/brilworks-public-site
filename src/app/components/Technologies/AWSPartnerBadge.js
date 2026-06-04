import Image from "next/image";

const AWSPartnerBadge = () => {
  return (
    <section className="bg-sectionBG border-borderGray">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto pb-10">
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl border border-borderGray md:px-10 px-6 py-8">
          {/* Badge logo */}
          <div className="shrink-0">
            <Image
              src="/images/aws-select-tier-service.png"
              alt="AWS Partner Badge"
              width={100}
              height={100}
              className="w-[90px] h-auto object-contain"
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-borderGray self-center" />

          {/* Text */}
          <div>
            <p className="font-bold text-colorBlack text-lg leading-snug !mb-1">Verified AWS Partner</p>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-[680px]">
              As an AWS Partner, we work with certified AWS developers to design, build, and run cloud systems aligned
              with AWS standards. Our team follows proven architectural patterns to deliver reliability, security, and
              performance across development and ongoing operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AWSPartnerBadge;
