import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import ReactNativeTechnology from "../components/Technologies/ReactNativeTechnology";
import { generateBreadcrumb } from "../components/lib/schemaCode";

export const metadata = {
  title: "Hire React Native Developers",
  description:
    "Brilworks expertise in React Native development, consultation, cross-platform migration, support, testing, and audit. Hire a React Native developer now.",
  openGraph: {
    title: "Hire React Native Developers",
    description:
      "Brilworks expertise in React Native development, consultation, cross-platform migration, support, testing, and audit. Hire a React Native developer now.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-react-native-developer/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/1.png`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire React Native Developers",
    description:
      "Brilworks expertise in React Native development, consultation, cross-platform migration, support, testing, and audit. Hire a React Native developer now.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-react-native-developer/`,
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-react-native-developer/`,
  },
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire React Native Developers"),
        }}
      />
      <Header />
      <ReactNativeTechnology />
      <Footer />
    </>
  );
};

export default page;
