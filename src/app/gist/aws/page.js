import dynamic from "next/dynamic";

const AWSTechQandA = dynamic(() =>
  import("@/app/components/Gist/AWSTechQandA")
);

const page = () => {
  return <AWSTechQandA />;
};

export default page;
