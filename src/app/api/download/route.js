export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const encodedUrl = searchParams.get("url");

  try {
    const fileUrl = decodeURIComponent(encodedUrl);
    const trustedDomains = [
      "https://brilworks-website-asset.s3.ap-south-1.amazonaws.com/",
      "https://a.storyblok.com/",
      `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/`,
      "https://brilworks-site-assets.s3.eu-central-1.amazonaws.com/",
    ];

    const isValidFile =
      fileUrl.endsWith(".pdf") &&
      trustedDomains.some((domain) => fileUrl.startsWith(domain));

    if (!isValidFile) {
      return new Response("Invalid or untrusted file URL", { status: 400 });
    }

    // if (
    //   !fileUrl.endsWith(".pdf") ||
    //   (!fileUrl.startsWith(
    //     "https://brilworks-website-asset.s3.ap-south-1.amazonaws.com/"
    //   ) &&
    //     !fileUrl.startsWith("https://a.storyblok.com/"))
    // ) {
    //   return new Response("Invalid or untrusted file URL", { status: 400 });
    // }
    const res = await fetch(fileUrl);

    if (!res.ok) {
      return new Response("File not found on remote server", { status: 404 });
    }

    const fileBuffer = await res.arrayBuffer();
    const filename = fileUrl.split("/").pop() || "download.pdf";

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    return new Response("Error downloading file", { status: 500 });
  }
}
