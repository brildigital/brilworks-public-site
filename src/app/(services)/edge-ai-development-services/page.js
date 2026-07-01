import EdgeAIDevelopment from "@/app/components/ServicePage/EdgeAIDevelopment";

export const metadata = {
  title: "Edge AI Development Services | Brilworks",
  description:
    "Deploy machine learning directly on embedded devices and connected products. We engineer Edge AI and TinyML systems with real-time inference, on STM32, ESP32-S3, NVIDIA Jetson, and more.",
  keywords:
    "edge AI development, TinyML, on-device machine learning, embedded AI, TensorFlow Lite Micro, ONNX Runtime, Edge Impulse, computer vision edge, predictive maintenance AI",
  openGraph: {
    title: "Edge AI Development Services | Brilworks",
    type: "website",
    description:
      "Real-time inference on embedded hardware. We optimize, deploy, and integrate machine learning models onto production devices — no cloud dependency required.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}edge-ai-development-services/`,
    siteName: "Brilworks",
  },
};

const Page = () => <EdgeAIDevelopment />;

export default Page;
