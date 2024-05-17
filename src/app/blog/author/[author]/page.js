import Author from "@/app/components/Blog/Author";
export default async function Page(props) {
  const { params } = props || {};
  return (
    <div className="bg-colorWhite">
      <Author authorName={params?.author} />
    </div>
  );
}
