import IoTProductEngineering from "@/app/components/ServicePage/IoTProductEngineering";

export const metadata = {
  title: "IoT Product Engineering Services | Brilworks",
  description:
    "Brilworks engineers IoT products from device to cloud, connecting embedded firmware, wireless, and apps into products built for production. You own the IP.",
  keywords:
    "IoT product engineering, connected product development, embedded firmware, IoT cloud platform, BLE LoRaWAN LTE-M, AWS IoT Core, Azure IoT, OTA updates, FreeRTOS, edge AI IoT",
  openGraph: {
    title: "IoT Product Engineering Services | Brilworks",
    type: "website",
    description:
      "Brilworks engineers IoT products from device to cloud, connecting embedded firmware, wireless, and apps into products built for production. You own the IP.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}iot-product-engineering-services/`,
    siteName: "Brilworks",
  },
};

const Page = () => <IoTProductEngineering />;

export default Page;
