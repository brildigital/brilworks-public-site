import Image from "next/image";

export default function DeviceMockups() {
  return (
    <div className="relative">
      {/* Desktop Mockup */}
      <div
        className="absolute md:-top-24 -top-16 md:-right-12 -right-2 md:w-96 w-60 md:h-60 h-40 mockup-shadow animate-float"
        style={{ animationDelay: "0s" }}
        data-testid="mockup-desktop"
      >
        <Image
          className="rounded-xl md:w-96 w-60 md:h-60 h-40"
          src="/images/v2/hero-desktop-mockup.jpg"
          alt="desktop-mockup"
          width="565"
          height="900"
          priority
        />
        {/* <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-[#017eeb4D] rounded w-3/4"></div>
            <div className="h-3 bg-[#1d2839] rounded w-full"></div>
            <div className="h-3 bg-[#1d2839] rounded w-2/3"></div>
          </div>
        </div> */}
      </div>

      {/* Mobile Mockup */}
      <div
        className="md:w-48 w-40 md:h-96 h-80 rounded-[30px] my-10 md:my-0 mockup-shadow mx-auto animate-float"
        style={{ animationDelay: "1s" }}
        data-testid="mockup-mobile"
      >
        <Image
          className="rounded-[30px] md:w-48 w-40 md:h-96 h-80"
          src="/images/v2/hero-mobile-mockup.png"
          alt="mobile-mockup"
          width="565"
          height="900"
          priority
        />
      </div>
      {/*<div
        className="md:w-48 w-40 md:h-96 h-72 bg-[#14161a] rounded-3xl border-4 my-10 md:my-0 border-border mockup-shadow mx-auto animate-float"
        style={{ animationDelay: "1s" }}
        data-testid="mockup-mobile"
      >
        <div className="p-6 h-full">
          <div className="w-12 h-1 bg-[#1d2839] rounded-full mx-auto mb-6"></div>
           <div className="space-y-4">
            <div className="h-6 bg-[#017eeb66] rounded-lg w-3/4"></div>
            <div className="h-4 bg-[#1d2839] rounded w-full"></div>
            <div className="h-4 bg-[#1d2839] rounded w-5/6"></div>
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="h-20 bg-accent/30 rounded-xl"></div>
              <div className="h-20 bg-[#017eeb4D] rounded-xl"></div>
            </div>
          </div> 
        </div>
      </div>*/}

      {/* Tablet Mockup */}
      <div
        className="absolute -bottom-6 md:-left-12 -left-2 md:w-72 w-56 md:h-48 h-36 mockup-shadow animate-float"
        style={{ animationDelay: "2s" }}
        data-testid="mockup-tablet"
      >
        {/* <div className="p-4">
          <div className="grid grid-cols-3 gap-3 h-full">
            <div className="bg-[#017eeb4D] rounded-lg"></div>
            <div className="space-y-2">
              <div className="h-3 bg-[#1d2839] rounded"></div>
              <div className="h-3 bg-[#1d2839] rounded w-4/5"></div>
              <div className="h-3 bg-[#1d2839] rounded w-3/5"></div>
            </div>
            <div className="bg-accent/30 rounded-lg"></div>
          </div>
        </div> */}
        <Image
          className="rounded-[10px] md:w-72 w-56 md:h-48 h-36 object-fill"
          src="/images/v2/hero-tablet-mockup.webp"
          alt="tablet-mockup"
          width="565"
          height="900"
          priority
        />
      </div>
    </div>
  );
}
