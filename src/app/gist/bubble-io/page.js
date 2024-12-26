import dynamic from "next/dynamic";

const BubbleIoTechQandA = dynamic(() =>
  import("@/app/components/Gist/BubbleIoTechQandA")
);

const page = () => {
  return <BubbleIoTechQandA />;
};

export default page;
