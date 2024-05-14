import dynamic from "next/dynamic";

const HabitRisePrivacyPolicy = dynamic(() =>
  import("../components/PrivacyPolicy/HabitRisePrivacyPolicy")
);

const page = () => {
  return (
    <>
      {process.env.VERCEL_ENV === "production" ? (
        <head>
          <meta name="robots" content="noindex, nofollow" />
        </head>
      ) : null}
      <HabitRisePrivacyPolicy />
    </>
  );
};

export default page;
