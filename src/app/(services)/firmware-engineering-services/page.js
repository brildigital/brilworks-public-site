import FirmwareEngineering from "@/app/components/ServicePage/FirmwareEngineering";

export const metadata = {
  title: "Embedded Firmware Development Services | Brilworks",
  description:
    "We engineer production firmware across MCUs, RTOS, and OTA that survives real timing, power, and update paths. You own the source.",
  keywords:
    "embedded firmware development, firmware engineering, bare-metal firmware, FreeRTOS, Zephyr, OTA firmware, board bring-up, BSP development, STM32 firmware",
  openGraph: {
    title: "Embedded Firmware Development Services | Brilworks",
    type: "website",
    description:
      "We engineer production firmware across MCUs, RTOS, and OTA that survives real timing, power, and update paths. You own the source.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}firmware-engineering-services/`,
    siteName: "Brilworks",
  },
};

const Page = () => <FirmwareEngineering />;

export default Page;
