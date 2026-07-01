import EmbeddedSoftwareDevelopment from "@/app/components/ServicePage/EmbeddedSoftwareDevelopment";

export const metadata = {
  title: "Embedded Software Development Services | Brilworks",
  description:
    "Embedded software development services for connected devices and industrial IoT. Production firmware on STM32 and FreeRTOS, built by us, or by our engineers embedded in your team.",
  keywords:
    "embedded software development, firmware development, IoT firmware, FreeRTOS, STM32, edge AI, OTA updates, embedded engineers",
  openGraph: {
    title: "Embedded Software Development Services | Brilworks",
    type: "website",
    description:
      "Production firmware for connected and industrial hardware. STM32, FreeRTOS, AWS IoT Core — built by a dedicated team or our engineers embedded in yours.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}embedded-software-development-services/`,
    siteName: "Brilworks",
  },
};

const Page = () => <EmbeddedSoftwareDevelopment />;

export default Page;
