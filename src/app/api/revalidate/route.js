import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

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
      revalidatePath("/blog/page/[page]", "page");
    }

    // Rebuild the post now, so the next reader gets the cached page instead
    // of waiting for the first render (this also covers brand-new posts).
    if (fullSlug?.startsWith("blog/") && process.env.NEXT_PUBLIC_BASE_URL) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${fullSlug}/`, {
          cache: "no-store",
          signal: AbortSignal.timeout(8000),
        });
      } catch {
        // Warming is best-effort; the post still renders on first request.
      }
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
