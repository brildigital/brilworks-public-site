import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Brilworks",
  description:
    "The page you are looking for does not exist. Explore Brilworks' services, portfolio, and resources.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="relative overflow-hidden flex items-center"
      style={{
        minHeight: "100vh",
        padding: "140px 20px 80px",
        background:
          "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(26,92,204,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.08) 0%, transparent 60%), linear-gradient(160deg, #0d0f1a 0%, #111428 50%, #0a0c1e 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.05,
          zIndex: 0,
        }}
      />
      <div
        className="container max-w-[1280px] mx-auto relative text-center"
        style={{ zIndex: 1 }}
      >
        <span
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase"
          style={{
            background: "rgba(26,92,204,0.15)",
            border: "1px solid rgba(26,92,204,0.3)",
            color: "#00b4d8",
            letterSpacing: "0.1em",
          }}
        >
          Error 404
        </span>

        <h1
          className="font-extrabold mb-5"
          style={{
            fontSize: "clamp(90px, 15vw, 180px)",
            letterSpacing: "-4px",
            lineHeight: 1,
            background:
              "linear-gradient(135deg, #017eeb 0%, #00b4d8 50%, #00dbd3 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        <h2
          className="font-extrabold mb-5 text-white"
          style={{
            fontSize: "clamp(26px, 3vw, 40px)",
            letterSpacing: "-1px",
            lineHeight: 1.2,
          }}
        >
          This page took a wrong turn.
        </h2>

        <p
          className="mx-auto mb-10"
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 560,
          }}
        >
          The page you&apos;re looking for may have moved, been renamed, or
          never existed. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap gap-3.5 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
            style={{
              background: "#017eeb",
              color: "#fff",
              border: "1px solid #017eeb",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Back to Homepage
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12H19M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/contact-us/"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
            style={{
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Contact Us
          </Link>
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Popular destinations
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { label: "App Development", href: "/application-development-services/" },
            { label: "AI Solutions", href: "/ai-ml-development-services/" },
            { label: "Portfolio", href: "/portfolio/" },
            { label: "Blog", href: "/blog/" },
            { label: "About Us", href: "/about-us/" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center rounded-full transition-all hover:bg-white/10"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.85)",
                padding: "10px 18px",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
