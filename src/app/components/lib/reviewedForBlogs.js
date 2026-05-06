// Per-article "Reviewed for" version stamps rendered below the lifted
// Last-updated date and above the H1.
//
// Versions drift quarterly — keep this swap-friendly. The companion task
// for a recurring refresh sweep lives on BRI-156 (Wave-2 / SEO health).
const reviewedFor = {
  "top-ides-for-java-development-on-mac":
    'Reviewed for IntelliJ IDEA <strong>2026.1</strong>, ' +
    "Eclipse <strong>2026-03</strong>, " +
    "Apache NetBeans <strong>29</strong>, " +
    "Visual Studio Code <strong>1.119</strong>, " +
    "and Oracle JDeveloper <strong>14.1.2</strong>. " +
    "All builds confirmed on Apple silicon (arm64) with JDK 25.",
};

export const reviewedForLine = (slug) =>
  (slug && reviewedFor[slug]) || "";
