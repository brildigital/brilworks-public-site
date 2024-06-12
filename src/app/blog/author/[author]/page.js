import Author from "@/app/components/Blog/Author";
import {
  blogAuthor,
  convertParamsToString,
} from "@/app/components/lib/commonFunction";

export const metadata = {
  openGraph: {
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
    creator: "@_Brilworks",
  },
};
export default async function Page(props) {
  const { params } = props || {};
  const author = blogAuthor(convertParamsToString(params?.author));
  return (
    <>
      <head>
        <title>{author?.name}</title>
        <meta
          name="description"
          content={author?.authorPageDesc || author?.authorDesc}
        />

        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}blog/author/${params?.author}/`}
        />

        <meta property="og:title" content={author?.name}></meta>
        <meta property="og:type" content="profile"></meta>

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}blog/author/${params?.author}/`}
        ></meta>
        <meta
          name="og:description"
          content={author?.authorPageDesc || author?.authorDesc}
        />
        <meta property="og:image" content={author?.authorImage} />
        <meta name="twitter:image" content={author?.authorImage}></meta>
      </head>
      <div className="bg-colorWhite">
        <Author authorName={params?.author} />
      </div>
    </>
  );
}
