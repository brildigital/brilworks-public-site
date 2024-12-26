import dynamic from "next/dynamic";

const JavaMinecraftTechQandA = dynamic(() =>
  import("@/app/components/Gist/JavaMinecraftTechQandA")
);

const page = () => {
  return <JavaMinecraftTechQandA />;
};

export default page;
