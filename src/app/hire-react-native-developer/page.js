import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import ReactNativeTechnology from "../components/Technologies/ReactNativeTechnology";

export const metadata = {
  title: "React Native Development Company | Hire React Native App Developer",
  description:
    "React Native app development services include Consultation, Cross-Platform, Migration, Maintenance & Support, Testing & Audit. Hire React Native developer now.",
  openGraph: {
    title: "React Native Development Company | Hire React Native App Developer",
    description:
      "React Native app development services include Consultation, Cross-Platform, Migration, Maintenance & Support, Testing & Audit. Hire React Native developer now.",
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
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical:
      `${process.env.NEXT_PUBLIC_BASE_URL}/hire-react-native-developer/`,
  },
};

const page = () => {
  return (
    <>
      <Header />
      <ReactNativeTechnology />
      <Footer />
    </>
  );
};

export default page;
