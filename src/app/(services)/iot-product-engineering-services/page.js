import IoTProductEngineering from "@/app/components/ServicePage/IoTProductEngineering";

export const metadata = {
  title: "IoT Product Engineering Services | Brilworks",
  description:
    "Build connected products that collect, process, and act on real world data. We engineer IoT systems — from embedded firmware and wireless connectivity to cloud platforms and user applications.",
  keywords:
    "IoT product engineering, connected product development, embedded firmware, IoT cloud platform, BLE LoRaWAN LTE-M, AWS IoT Core, Azure IoT, OTA updates, FreeRTOS, edge AI IoT",
  openGraph: {
    title: "IoT Product Engineering Services | Brilworks",
    type: "website",
    description:
      "End-to-end IoT engineering. We build firmware, connectivity, cloud infrastructure, and applications for connected products — designed for production from day one.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}iot-product-engineering-services/`,
    siteName: "Brilworks",
  },
};

const Page = () => <IoTProductEngineering />;

export default Page;
