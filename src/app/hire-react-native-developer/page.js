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
    url: "https://brilworks.com/hire-react-native-developer/",
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: "https://brilworks.com/images/1.png",
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
    canonical: "https://brilworks.com//hire-react-native-developer/",
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
