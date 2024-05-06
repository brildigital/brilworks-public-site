import dynamic from "next/dynamic";

const HabitTrackerTermsAndConditions = dynamic(() =>
  import("../components/PrivacyPolicy/HabitRiseTermsAndConditions")
);

const page = () => {
  return (
    <>
      {process.env.VERCEL_ENV === "production" ? (
        <head>
          <meta name="robots" content="noindex, nofollow" />
        </head>
      ) : null}
      <HabitTrackerTermsAndConditions />
    </>
  );
};

export default page;
