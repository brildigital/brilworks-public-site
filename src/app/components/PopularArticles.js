import { storyblokEditable } from "@storyblok/react";

const PopularArticles = ({ blok }) => {
  return (
    <>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      ></div>
    </>
  );
};
export default PopularArticles;
