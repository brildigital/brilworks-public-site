import { revalidatePath } from "next/cache";
import { NextResponse, after } from "next/server";

export async function POST(req) {
  try {
    const { searchParams } = new URL(req.url);

    const secret = searchParams.get("secret");

    if (secret !== process.env.STORYBLOK_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const fullSlug = body?.story?.full_slug || body?.full_slug;

    if (fullSlug) {
      revalidatePath(`/${fullSlug}`);
    }

    revalidatePath("/sitemap.xml");

    // Keep the server-rendered blog listing and archive in step with posts.
    if (fullSlug?.startsWith("blog/")) {
      revalidatePath("/blog");
      revalidatePath("/blog/archive/[page]", "page");
    }

    // Rebuild the post once the webhook has been answered, so the next reader
    // gets the cached page instead of waiting for the first render (this also
    // covers brand-new posts). Runs after the response so Storyblok is never
    // kept waiting, and is best-effort: on failure the post simply renders on
    // first request.
    if (fullSlug?.startsWith("blog/") && process.env.NEXT_PUBLIC_BASE_URL) {
      const postUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${fullSlug}/`;
      after(async () => {
        try {
          await fetch(postUrl, {
            cache: "no-store",
            signal: AbortSignal.timeout(10000),
          });
        } catch (error) {
          console.warn(`Could not warm ${postUrl}:`, error?.message);
        }
      });
    }

    return NextResponse.json({
      revalidated: true,
      slug: fullSlug || null,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }
}
