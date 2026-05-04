export const FONT_STACK = "Inter, Helvetica Neue, Helvetica, Arial, sans-serif";

export const BRAND = {
  gradient: {
    primary: { stops: [
      { offset: 0, color: "#007AEB" },
      { offset: 0.42, color: "#008CE7" },
      { offset: 1, color: "#00DBD3" },
    ]},
    soft: { stops: [
      { offset: 0, color: "#F7FBFF" },
      { offset: 1, color: "#FFFFFF" },
    ]},
    badges: [
      [{ offset: 0, color: "#0064D6" }, { offset: 1, color: "#007AEB" }],
      [{ offset: 0, color: "#007AEB" }, { offset: 1, color: "#0099E2" }],
      [{ offset: 0, color: "#0099E2" }, { offset: 1, color: "#00B7D8" }],
      [{ offset: 0, color: "#00B7D8" }, { offset: 1, color: "#00CDD5" }],
      [{ offset: 0, color: "#00CDD5" }, { offset: 1, color: "#00DBD3" }],
    ],
  },
  text: {
    ink: "#0F172A",
    body: "#475569",
    muted: "#64748B",
    subtle: "#334155",
    accent: "#0099E2",
    accentDeep: "#0064D6",
    accentTeal: "#00B7D8",
  },
  surfaces: {
    chipBlue: "#EAF4FE",
    chipTeal: "#EAFBF9",
    warningBg: "#FEF3C7",
    warningText: "#92400E",
    warningAccent: "#B45309",
    divider: "#E2E8F0",
    dotPattern: "#CDE5F8",
  },
  type: {
    kicker: { size: 14, weight: 700, letterSpacing: 3 },
    title: { size: 46, weight: 800, letterSpacing: -1 },
    subtitle: { size: 20, weight: 400 },
    cardTitle: { size: 22, weight: 700 },
    sectionLabel: { size: 11, weight: 800, letterSpacing: 1.6 },
    chip: { size: 14, weight: 600 },
    body: { size: 14, weight: 400 },
    caption: { size: 12, weight: 700, letterSpacing: 2 },
    footer: { size: 13, weight: 500 },
    footerStrong: { size: 13, weight: 600 },
    badge: { size: 28, weight: 800 },
  },
  radii: { card: 22, badge: 16, chip: 10, axis: 4 },
  card: { width: 272, height: 508, gap: 20, paddingX: 32, topBarHeight: 6 },
  canvas: { width: 1600, height: 900, marginX: 80 },
  footer: { height: 60, y: 840 },
  shadows: {
    card: { dx: 0, dy: 10, blur: 14, color: "#0E2A4F", opacity: 0.10 },
    badge: { dx: 0, dy: 6, blur: 8, color: "#0064D6", opacity: 0.30 },
  },
} as const;

export type BrandTokens = typeof BRAND;

const ALLOWED_HEX = new Set<string>();
function collectHex(node: unknown): void {
  if (typeof node === "string" && /^#[0-9A-F]{6}$/i.test(node)) {
    ALLOWED_HEX.add(node.toUpperCase());
    return;
  }
  if (Array.isArray(node)) { node.forEach(collectHex); return; }
  if (node && typeof node === "object") { Object.values(node).forEach(collectHex); }
}
collectHex(BRAND);

export function isBrandColor(hex: string): boolean {
  return ALLOWED_HEX.has(hex.toUpperCase());
}

export function assertBrandColor(hex: string, where: string): void {
  if (!isBrandColor(hex)) {
    throw new Error(`Color ${hex} (${where}) is not in brand tokens. Allowed: ${[...ALLOWED_HEX].sort().join(", ")}`);
  }
}
