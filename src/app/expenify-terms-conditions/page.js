import dynamic from "next/dynamic";

const ExpenifyTermsAndConditions = dynamic(() =>
  import("../components/PrivacyPolicy/ExpenifyTermsAndConditions")
);

const page = () => {
  return (
    <>
      {process.env.VERCEL_ENV === "production" ? (
        <head>
          <meta name="robots" content="noindex, nofollow" />
        </head>
      ) : null}
      <ExpenifyTermsAndConditions />
    </>
  );
};

export default page;
