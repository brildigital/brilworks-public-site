import dynamic from "next/dynamic";

const ReactJSTechQandA = dynamic(() =>
  import("@/app/components/Gist/ReactJSTechQandA")
);

const page = () => {
  return <ReactJSTechQandA />;
};

export default page;
