import dynamic from "next/dynamic";

const JavaTechQandA = dynamic(() =>
  import("@/app/components/Gist/JavaTechQandA")
);

const page = () => {
  return <JavaTechQandA />;
};

export default page;
