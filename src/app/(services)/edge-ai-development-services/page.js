import EdgeAIDevelopment from "@/app/components/ServicePage/EdgeAIDevelopment";

export const metadata = {
  title: "Edge AI Development Services | Brilworks",
  description:
    "We deploy machine learning on embedded devices for real-time inference, no cloud dependency. TinyML to edge vision, built to run on real hardware.",
  keywords:
    "edge AI development, TinyML, on-device machine learning, embedded AI, TensorFlow Lite Micro, ONNX Runtime, Edge Impulse, computer vision edge, predictive maintenance AI",
  openGraph: {
    title: "Edge AI Development Services | Brilworks",
    type: "website",
    description:
      "We deploy machine learning on embedded devices for real-time inference, no cloud dependency. TinyML to edge vision, built to run on real hardware.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}edge-ai-development-services/`,
    siteName: "Brilworks",
  },
};

const Page = () => <EdgeAIDevelopment />;

export default Page;
