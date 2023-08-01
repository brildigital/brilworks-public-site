import parse from "html-react-parser";

const Article = ({ blok }) => {
  return (
    <section className=" body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="  w-full mb-10 object-fit object-center rounded-[30px]"
          alt={blok.image.alt}
          src={blok.image.filename}
        />
        <div className="w-[40%] mb-4 object-fit object-center rounded-[30px]">
          <div className="m-0 p-0 w-2/3">
            <span className="bg-[#cbdbfe] text-left w-fit rounded-[32px] py-3 px-6">
              {blok.subtitle}
            </span>
          </div>
        </div>

        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-left sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {blok.title}
          </h1>
          {/* <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium ">
            {blok.subtitle}
          </h1> */}
          <div className="mb-8 leading-relaxed text-justify">
            {parse(blok.content)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Article;
