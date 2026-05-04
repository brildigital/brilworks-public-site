import * as React from "react";
import ReactDOMServer from "react-dom/server";
import sharp from "sharp";
import { CriteriaGrid, type CriteriaGridSpec } from "./templates/criteria-grid.js";

export type DiagramSpec = CriteriaGridSpec;

export type RenderArtifacts = {
  svg: string;
  png: Buffer;
  webp: Buffer;
  altText: string;
  byteSizes: { svg: number; png: number; webp: number };
};

const SIZE_LIMIT = 200 * 1024;

const TEMPLATES = {
  "criteria-grid": (spec: CriteriaGridSpec) => React.createElement(CriteriaGrid, { spec }),
} as const;

export async function renderDiagram(spec: DiagramSpec): Promise<RenderArtifacts> {
  const builder = TEMPLATES[spec.layout];
  if (!builder) {
    throw new Error(`Unknown layout: ${(spec as { layout: string }).layout}. Known: ${Object.keys(TEMPLATES).join(", ")}`);
  }
  const element = builder(spec);
  const svgBody = ReactDOMServer.renderToStaticMarkup(element);
  const svg = `<?xml version="1.0" encoding="UTF-8"?>\n${svgBody}\n`;
  const svgBuf = Buffer.from(svg, "utf8");

  const png = await sharp(svgBuf, { density: 72 })
    .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
    .toBuffer();
  const webp = await sharp(svgBuf, { density: 72 })
    .webp({ quality: 88, effort: 6 })
    .toBuffer();

  const artifacts: RenderArtifacts = {
    svg,
    png,
    webp,
    altText: spec.alt,
    byteSizes: { svg: svgBuf.length, png: png.length, webp: webp.length },
  };

  for (const [k, n] of Object.entries(artifacts.byteSizes)) {
    if (n > SIZE_LIMIT) {
      throw new Error(`${k.toUpperCase()} is ${n} bytes, exceeds 200 KB cap`);
    }
  }
  return artifacts;
}
