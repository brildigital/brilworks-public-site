import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, basename, extname } from "node:path";
import { renderDiagram, type DiagramSpec } from "./render.js";

async function main() {
  const [specPath, outBase] = process.argv.slice(2);
  if (!specPath || !outBase) {
    console.error("Usage: tsx src/cli.ts <spec.json> <out-base-path>");
    console.error("  outputs <out-base-path>.svg / .png / .webp");
    process.exit(2);
  }
  const spec = JSON.parse(readFileSync(specPath, "utf8")) as DiagramSpec;
  mkdirSync(dirname(outBase), { recursive: true });

  const artifacts = await renderDiagram(spec);
  writeFileSync(`${outBase}.svg`, artifacts.svg);
  writeFileSync(`${outBase}.png`, artifacts.png);
  writeFileSync(`${outBase}.webp`, artifacts.webp);

  const fmt = (n: number) => `${(n / 1024).toFixed(1)} KB`;
  console.log(`Rendered ${basename(specPath, extname(specPath))}`);
  console.log(`  ${outBase}.svg  ${fmt(artifacts.byteSizes.svg)}`);
  console.log(`  ${outBase}.png  ${fmt(artifacts.byteSizes.png)}`);
  console.log(`  ${outBase}.webp ${fmt(artifacts.byteSizes.webp)}`);
  console.log(`  alt: ${artifacts.altText}`);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
