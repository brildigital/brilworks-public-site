import dynamic from "next/dynamic";

const Kinderland = dynamic(() => import("../components/Kinderland/Kinderland"));

const page = () => {
  return (
    <>
      {process.env.VERCEL_ENV === "production" ? (
        <head>
          <meta name="robots" content="noindex, nofollow" />
        </head>
      ) : null}
      <Kinderland />
    </>
  );
};

export default page;
