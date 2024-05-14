import dynamic from "next/dynamic";

const ExpenifyPrivacyPolicy = dynamic(() =>
  import("../components/PrivacyPolicy/ExpenifyPrivacyPolicy")
);

const page = () => {
  return (
    <>
      {process.env.VERCEL_ENV === "production" ? (
        <head>
          <meta name="robots" content="noindex, nofollow" />
        </head>
      ) : null}
      <ExpenifyPrivacyPolicy />
    </>
  );
};

export default page;
