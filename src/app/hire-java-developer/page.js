import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import JavaTechnology from "../components/Technologies/JavaTechnology";

export const metadata = {
  title: "Java Development Company | Hire Trusted Java Experts",
  description:
    "Brilworks's Java software development services include Consulting, Web, App, Spring Core & Spring Boot. Hire dedicated Java developers.",
  openGraph: {
    title: "Java Development Company | Hire Trusted Java Experts",
    description:
      "Brilworks's Java software development services include Consulting, Web, App, Spring Core & Spring Boot. Hire dedicated Java developers.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-java-developer/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-java-developer/`,
  },
};

const page = () => {
  return (
    <>
      <Header />
      <JavaTechnology />
      <Footer />
    </>
  );
};

export default page;
