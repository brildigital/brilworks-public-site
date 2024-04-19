import dynamic from "next/dynamic";

const HealthVault = dynamic(() =>
  import("../components/PrivacyPolicy/HealthVault")
);

const page = () => {
  return (
    <>
      {process.env.VERCEL_ENV === "production" ? (
        <head>
          <meta name="robots" content="noindex, nofollow" />
        </head>
      ) : null}
      <HealthVault />
    </>
  );
};

export default page;
