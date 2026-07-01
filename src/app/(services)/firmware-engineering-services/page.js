import FirmwareEngineering from "@/app/components/ServicePage/FirmwareEngineering";

export const metadata = {
  title: "Embedded Firmware Development Services | Brilworks",
  description:
    "Embedded firmware development services for hardware that runs untouched for years. Bare-metal C, FreeRTOS, Zephyr, OTA, and board bring-up — built by us or embedded in your team.",
  keywords:
    "embedded firmware development, firmware engineering, bare-metal firmware, FreeRTOS, Zephyr, OTA firmware, board bring-up, BSP development, STM32 firmware",
  openGraph: {
    title: "Embedded Firmware Development Services | Brilworks",
    type: "website",
    description:
      "Production firmware for hardware that has to run untouched for years. Bootloader to bring-up, built by a dedicated firmware team or our engineers embedded in yours.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}firmware-engineering-services/`,
    siteName: "Brilworks",
  },
};

const Page = () => <FirmwareEngineering />;

export default Page;
