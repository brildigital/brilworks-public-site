import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    if (body?.secret !== process.env.STORYBLOK_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const fullSlug = body?.story?.full_slug || body?.full_slug;

    // Revalidate the specific blog page
    if (fullSlug) {
      revalidatePath(`/${fullSlug}`);
    }

    // Always revalidate the sitemap so new blog appears immediately
    revalidatePath("/sitemap.xml");

    return NextResponse.json({ revalidated: true, slug: fullSlug || null });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
