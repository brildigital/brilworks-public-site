import dynamic from 'next/dynamic';

const ReactNativeTechQandA = dynamic(() =>
  import('@/app/components/Gist/ReactNativeTechQandA'),
);

const page = () => {
  return <ReactNativeTechQandA />;
};

export default page;
