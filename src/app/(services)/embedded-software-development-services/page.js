import EmbeddedSoftwareDevelopment from "@/app/components/ServicePage/EmbeddedSoftwareDevelopment";

export const metadata = {
  title: "Embedded Software Development Services | Brilworks",
  description:
    "Brilworks is an embedded software development company building production firmware for connected and industrial hardware that runs for years.",
  keywords:
    "embedded software development, firmware development, IoT firmware, FreeRTOS, STM32, edge AI, OTA updates, embedded engineers",
  openGraph: {
    title: "Embedded Software Development Services | Brilworks",
    type: "website",
    description:
      "Brilworks is an embedded software development company building production firmware for connected and industrial hardware that runs for years.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}embedded-software-development-services/`,
    siteName: "Brilworks",
  },
};

const Page = () => <EmbeddedSoftwareDevelopment />;

export default Page;
