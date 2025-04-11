export async function GET(request) {
  console.log("request+++++++++++", request);
  const searchParams = request.nextUrl.searchParams;
  console.log("searchParams+++++++++++", searchParams);
  const encodedUrl = searchParams.get("url");

  try {
    const fileUrl = decodeURIComponent(encodedUrl);
    if (
      !fileUrl.endsWith(".pdf") ||
      !fileUrl.startsWith("https://a.storyblok.com/")
    ) {
      return new Response("Invalid or untrusted file URL", { status: 400 });
    }
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
