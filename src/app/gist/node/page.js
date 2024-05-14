import dynamic from 'next/dynamic';

const NodeJSTechQandA = dynamic(() =>
  import('@/app/components/Gist/NodeJSTechQandA'),
);

const page = () => {
  return <NodeJSTechQandA />;
};

export default page;
