import parse from "html-react-parser";

const Article = ({ blok }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="  w-full mb-10 object-fit object-center rounded-[30px]"
          alt={blok.image.alt}
          src={blok.image.filename}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {blok.title}
          </h1>
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-600">
            {blok.subtitle}
          </h1>
          <div className="mb-8 leading-relaxed text-justify">
            {parse(blok.content)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Article;
