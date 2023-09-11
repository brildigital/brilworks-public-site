"use client";
import { useEffect, useState } from "react";
import "../Blogstyle.scss";
import { blogCategoryData, blogCategoryList } from "../lib/getblog";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Link from "next/link";

const BlogCategories = () => {
  const [blogCategoryName, setBlogCategoryName] = useState([]);
  const [categorywiseData, setCategorywiseData] = useState([]);
  const [categoryClickName, setCategoryClickName] = useState("App Development");

  useEffect(() => {
    async function fetchCategoryList() {
      try {
        const blogcatList = await blogCategoryList();
        setBlogCategoryName(blogcatList);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategoryList();
  }, []);

  useEffect(() => {
    async function fetchCategorywiseData() {
      try {
        const blogcatData = await blogCategoryData(categoryClickName);
        setCategorywiseData(blogcatData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCategorywiseData();
  }, [categoryClickName]);

  const handleCategoryClick = (categoryName) => {
    setCategoryClickName(categoryName);
  };

  return (
    <>
      <div className="blog_category w-full flex flex-row flex-wrap gap-2 pb-4">
        {blogCategoryName.length ? (
          blogCategoryName.map((tag, index) => (
            <button
              className={`Blog_category_head p-2 min-[320px]:text-[16px] md:text-[21px]
            ${
              categoryClickName === tag
                ? "bg-[#00DDB9] text-white"
                : "btn_blog_category"
            } `}
              key={index}
              onClick={() => handleCategoryClick(tag)}
            >
              <p className="min-[320px]:text-[16px] md:text-[21px]">{tag}</p>
            </button>
          ))
        ) : (
          <div className="w-full flex align-middle justify-center p-12">
            <FetchDataSpinner />
          </div>
        )}
      </div>

      <div
        className={`grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem]`}
      >
        {categorywiseData.length
          ? categorywiseData.map(({ slug, name, content }, index) => (
              <div
                key={index}
                className="border-[1px] border-[#80808038] rounded-[30px] sec9_data_style blog_flex_30"
              >
                <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                  <div className="sec9_img1">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="rounded-[30px]"
                      src={
                        content?.mobile_banner?.filename ||
                        content?.Image?.filename
                      }
                      alt={
                        content?.mobile_banner?.alt ||
                        content?.Image?.alt ||
                        "Blog List banner"
                      }
                    />
                  </div>
                  <div className="pt-[1rem] px-[1rem] pb-[1.5rem] sec9_box_home blog-hover">
                    <div className="sec9_txt1 border-b-[1px] border-[#80808038] py-[1rem]">
                      <p className="entry-title default-max-width aspect-[518/116]">
                        {name}
                      </p>
                    </div>

                    <div className="sec9_txt2 mt-[1.5rem]">
                      <p>{content?.PublishedDate}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          : null}
      </div>

      {categorywiseData.length ? (
        <Link
          href={"/blog/blog-list/"}
          className="flex items-center sm:justify-center justify-start gap-[20px] about_btn transition py-[32px] px-[16px] cursor-pointer"
        >
          <div className="about_txt">
            <p className="change_link text-[21px]">Read More</p>
          </div>
          <div className="aerrow relative">
            <img
              decoding="async"
              loading="lazy"
              className="black_aerrow alignnone wp-image-28 size-full"
              src="/images/black_aerrow-1.png"
              alt="arrow"
              width="46"
              height="18"
            />
            <img
              decoding="async"
              loading="lazy"
              className="gradiant_aerrow alignnone wp-image-29 size-full"
              src="/images/arrow-gradiant.png"
              alt="arrow"
              width="46"
              height="18"
            />
          </div>
        </Link>
      ) : null}
    </>
  );
};

export default BlogCategories;
