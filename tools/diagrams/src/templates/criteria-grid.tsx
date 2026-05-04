import * as React from "react";
import { BRAND, FONT_STACK } from "../brand-tokens.js";

export type Chip = { text: string; variant?: "default" | "warning"; trailing?: string };

export type Section =
  | { kind: "chips"; label: string; chips: Chip[] }
  | { kind: "labelled-chips"; label: string; items: Array<{ kicker: string; text: string; variant?: "default" | "warning" }> }
  | { kind: "prose"; label: string; lines: string[] };

export type Card = {
  icon: keyof typeof ICONS | { svg: React.ReactNode };
  title: string | string[];
  sections: Section[];
};

export type CriteriaGridSpec = {
  layout: "criteria-grid";
  header: { kicker: string; title: string; subtitle: string };
  axis?: { left: string; right: string };
  cards: Card[];
  footer: { centerLabel: string; rightLabel: string };
  alt: string;
};

export const ICONS = {
  slider: (
    <g stroke={BRAND.text.accentDeep} strokeWidth={2.5} fill="none" strokeLinecap="round">
      <line x1={0} y1={20} x2={56} y2={20} />
      <circle cx={14} cy={20} r={6} fill={BRAND.text.accentDeep} />
      <circle cx={56} cy={20} r={3} />
      <circle cx={0} cy={20} r={3} />
    </g>
  ),
  files: (
    <g stroke="#007AEB" strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x={6} y={6} width={38} height={44} rx={4} fill={BRAND.surfaces.chipBlue} />
      <rect x={14} y={14} width={38} height={44} rx={4} fill="#FFFFFF" />
      <line x1={22} y1={28} x2={44} y2={28} />
      <line x1={22} y1={38} x2={44} y2={38} />
      <line x1={22} y1={48} x2={36} y2={48} />
    </g>
  ),
  ladder: (
    <g stroke="#0099E2" strokeWidth={2.2} fill="none" strokeLinecap="round">
      <line x1={8} y1={4} x2={8} y2={56} />
      <line x1={48} y1={4} x2={48} y2={56} />
      <line x1={8} y1={14} x2={48} y2={14} />
      <line x1={8} y1={28} x2={48} y2={28} />
      <line x1={8} y1={42} x2={48} y2={42} />
    </g>
  ),
  shield: (
    <g stroke="#00B7D8" strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 28 4 L 52 14 V 30 C 52 42 42 52 28 56 C 14 52 4 42 4 30 V 14 Z" fill="#E0F7FA" />
      <path d="M 18 30 L 26 38 L 40 22" />
    </g>
  ),
  coins: (
    <g stroke="#00CDD5" strokeWidth={2.2} fill="none">
      <ellipse cx={32} cy={20} rx={22} ry={6} fill="#E0F7FA" />
      <ellipse cx={32} cy={32} rx={22} ry={6} fill="#FFFFFF" />
      <ellipse cx={32} cy={44} rx={22} ry={6} fill="#FFFFFF" />
      <path d="M 10 20 V 44" />
      <path d="M 54 20 V 44" />
    </g>
  ),
} as const;

function Defs() {
  return (
    <defs>
      <linearGradient id="brand" x1="0" y1="0" x2="1" y2="0">
        {BRAND.gradient.primary.stops.map((s, i) => (
          <stop key={i} offset={s.offset} stopColor={s.color} />
        ))}
      </linearGradient>
      <linearGradient id="brandSoft" x1="0" y1="0" x2="0" y2="1">
        {BRAND.gradient.soft.stops.map((s, i) => (
          <stop key={i} offset={s.offset} stopColor={s.color} />
        ))}
      </linearGradient>
      {BRAND.gradient.badges.map((stops, i) => (
        <linearGradient key={i} id={`badge${i + 1}`} x1="0" y1="0" x2="1" y2="1">
          {stops.map((s, j) => <stop key={j} offset={s.offset} stopColor={s.color} />)}
        </linearGradient>
      ))}
      <radialGradient id="halo" cx="50%" cy="0%" r="60%">
        <stop offset="0" stopColor="#00DBD3" stopOpacity="0.10" />
        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
      <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx={BRAND.shadows.card.dx} dy={BRAND.shadows.card.dy} stdDeviation={BRAND.shadows.card.blur} floodColor={BRAND.shadows.card.color} floodOpacity={BRAND.shadows.card.opacity} />
      </filter>
      <filter id="badgeShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx={BRAND.shadows.badge.dx} dy={BRAND.shadows.badge.dy} stdDeviation={BRAND.shadows.badge.blur} floodColor={BRAND.shadows.badge.color} floodOpacity={BRAND.shadows.badge.opacity} />
      </filter>
      <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill={BRAND.surfaces.dotPattern} />
      </pattern>
    </defs>
  );
}

function Header({ header, axis }: { header: CriteriaGridSpec["header"]; axis?: CriteriaGridSpec["axis"] }) {
  return (
    <>
      <g fontFamily={FONT_STACK}>
        <text x={80} y={100} fontSize={BRAND.type.kicker.size} fontWeight={BRAND.type.kicker.weight} letterSpacing={BRAND.type.kicker.letterSpacing} fill={BRAND.text.accent}>{header.kicker}</text>
        <text x={80} y={156} fontSize={BRAND.type.title.size} fontWeight={BRAND.type.title.weight} fill={BRAND.text.ink} letterSpacing={BRAND.type.title.letterSpacing}>{header.title}</text>
        <text x={80} y={194} fontSize={BRAND.type.subtitle.size} fontWeight={BRAND.type.subtitle.weight} fill={BRAND.text.body}>{header.subtitle}</text>
      </g>
      {axis && (
        <g transform="translate(80,232)">
          <rect x={0} y={0} width={1440} height={8} rx={BRAND.radii.axis} fill="url(#brand)" />
          <text x={0} y={32} fontFamily={FONT_STACK} fontSize={BRAND.type.caption.size} fontWeight={BRAND.type.caption.weight} letterSpacing={BRAND.type.caption.letterSpacing} fill={BRAND.text.accentDeep}>{axis.left}</text>
          <text x={1440} y={32} fontFamily={FONT_STACK} fontSize={BRAND.type.caption.size} fontWeight={BRAND.type.caption.weight} letterSpacing={BRAND.type.caption.letterSpacing} fill={BRAND.text.accentTeal} textAnchor="end">{axis.right}</text>
        </g>
      )}
    </>
  );
}

function CardSection({ section, y }: { section: Section; y: number }) {
  if (section.kind === "chips") {
    return (
      <>
        <text x={32} y={y} fontFamily={FONT_STACK} fontSize={BRAND.type.sectionLabel.size} fontWeight={BRAND.type.sectionLabel.weight} letterSpacing={BRAND.type.sectionLabel.letterSpacing} fill={BRAND.text.accentDeep}>{section.label}</text>
        {section.chips.map((chip, i) => {
          const isWarn = chip.variant === "warning";
          return (
            <g key={i} transform={`translate(32,${y + 20 + i * 48})`} fontFamily={FONT_STACK}>
              <rect x={0} y={0} width={208} height={40} rx={BRAND.radii.chip} fill={isWarn ? BRAND.surfaces.warningBg : BRAND.surfaces.chipBlue} />
              <text x={14} y={25} fontSize={BRAND.type.chip.size} fontWeight={BRAND.type.chip.weight} fill={isWarn ? BRAND.surfaces.warningText : BRAND.text.subtle}>{chip.text}</text>
              {chip.trailing && (
                <text x={194} y={25} fontSize={BRAND.type.chip.size} fontWeight={500} textAnchor="end" fill={BRAND.text.muted}>{chip.trailing}</text>
              )}
            </g>
          );
        })}
      </>
    );
  }
  if (section.kind === "labelled-chips") {
    return (
      <>
        <text x={32} y={y} fontFamily={FONT_STACK} fontSize={BRAND.type.sectionLabel.size} fontWeight={BRAND.type.sectionLabel.weight} letterSpacing={BRAND.type.sectionLabel.letterSpacing} fill={BRAND.text.accentTeal}>{section.label}</text>
        <g fontFamily={FONT_STACK}>
          {section.items.map((item, i) => {
            const isWarn = item.variant === "warning";
            return (
              <g key={i} transform={`translate(32,${y + 16 + i * 46})`}>
                <rect width={208} height={38} rx={BRAND.radii.chip} fill={isWarn ? BRAND.surfaces.warningBg : BRAND.surfaces.chipTeal} />
                <text x={14} y={16} fontSize={11} fontWeight={700} letterSpacing={1} fill={isWarn ? BRAND.surfaces.warningAccent : BRAND.text.accentTeal}>{item.kicker}</text>
                <text x={14} y={32} fontSize={13} fill={isWarn ? BRAND.surfaces.warningText : BRAND.text.body}>{item.text}</text>
              </g>
            );
          })}
        </g>
      </>
    );
  }
  // prose
  return (
    <>
      <text x={32} y={y} fontFamily={FONT_STACK} fontSize={BRAND.type.sectionLabel.size} fontWeight={BRAND.type.sectionLabel.weight} letterSpacing={BRAND.type.sectionLabel.letterSpacing} fill={BRAND.text.muted}>{section.label}</text>
      <g fontFamily={FONT_STACK} fontSize={14} fill={BRAND.text.body}>
        {section.lines.map((line, i) => (
          <text key={i} x={32} y={y + 26 + i * 20}>{line}</text>
        ))}
      </g>
    </>
  );
}

function CardSvg({ card, index }: { card: Card; index: number }) {
  const { card: cardTokens } = BRAND;
  const x = BRAND.canvas.marginX + index * (cardTokens.width + cardTokens.gap);
  const y = 296;
  const titleLines = Array.isArray(card.title) ? card.title : [card.title];
  const iconNode: React.ReactNode = typeof card.icon === "string" ? ICONS[card.icon] : card.icon.svg;
  // Section vertical positions: chips section starts at y=186, prose at y=350 (matching v2)
  const sectionsTop = 186;
  return (
    <g transform={`translate(${x},${y})`} filter="url(#cardShadow)">
      <rect x={0} y={0} width={cardTokens.width} height={cardTokens.height} rx={BRAND.radii.card} fill="#FFFFFF" />
      <rect x={0} y={0} width={cardTokens.width} height={cardTokens.topBarHeight} rx={BRAND.radii.card} fill={`url(#badge${index + 1})`} />
      {/* number badge */}
      <g filter="url(#badgeShadow)" transform="translate(40,40)">
        <rect width={56} height={56} rx={BRAND.radii.badge} fill={`url(#badge${index + 1})`} />
        <text x={28} y={38} fontFamily={FONT_STACK} fontSize={BRAND.type.badge.size} fontWeight={BRAND.type.badge.weight} fill="#FFFFFF" textAnchor="middle">{index + 1}</text>
      </g>
      {/* icon */}
      <g transform="translate(176,52)">{iconNode}</g>
      {/* title */}
      {titleLines.map((line, i) => (
        <text key={i} x={32} y={146 + i * 28} fontFamily={FONT_STACK} fontSize={BRAND.type.cardTitle.size} fontWeight={BRAND.type.cardTitle.weight} fill={BRAND.text.ink}>{line}</text>
      ))}
      {/* sections */}
      {card.sections.map((section, i) => {
        const sy = sectionsTop + i * 164;
        return <CardSection key={i} section={section} y={sy} />;
      })}
      {/* divider before last "WHY IT MATTERS" prose, only when last section is prose */}
      {card.sections.length >= 2 && card.sections[card.sections.length - 1].kind === "prose" && (
        <line x1={32} y1={sectionsTop + (card.sections.length - 1) * 164 - 30} x2={240} y2={sectionsTop + (card.sections.length - 1) * 164 - 30} stroke={BRAND.surfaces.divider} strokeWidth={1} />
      )}
    </g>
  );
}

function Footer({ footer }: { footer: CriteriaGridSpec["footer"] }) {
  return (
    <g transform={`translate(0,${BRAND.footer.y})`}>
      <rect x={0} y={0} width={BRAND.canvas.width} height={BRAND.footer.height} fill="#FFFFFF" />
      <rect x={0} y={0} width={BRAND.canvas.width} height={2} fill="url(#brand)" opacity={0.5} />
      <g transform="translate(80,18)">
        <g transform="scale(0.65)">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0H2.68433C5.59975 0 7.96314 2.36339 7.96314 5.27881V19.9824C9.70199 19.1926 11.5901 18.7851 13.4999 18.7875C20.9558 18.7875 27 24.8874 27 32.4119C27 39.9363 20.9558 46.0363 13.4999 46.0363C6.06473 46.0363 0.033848 39.9699 0.000121874 32.474L0 0ZM13.4993 40.1883C17.7942 40.1883 21.2758 36.7067 21.2758 32.4118C21.2758 28.1169 17.7942 24.6353 13.4993 24.6353C9.20443 24.6353 5.72285 28.1175 5.72285 32.4118C5.72285 36.7061 9.20467 40.1883 13.4993 40.1883Z" fill="url(#brand)" />
          <path d="M8.83362 4.9765H11.5182C14.4336 4.9765 16.7971 7.33989 16.7971 10.2553V18.4142C14.3708 17.8542 11.7579 17.8542 8.83435 18.7253L8.83362 4.9765Z" fill="url(#brand)" />
          <path d="M17.5428 12.8153H19.7294C22.6449 12.8153 25.0084 15.1787 25.0084 18.0941V23.64C23.8882 22.2093 20.4047 18.9742 17.5428 18.601V12.8153Z" fill="url(#brand)" />
        </g>
        <text x={36} y={25} fontFamily={FONT_STACK} fontSize={BRAND.type.footerStrong.size} fontWeight={700} fill={BRAND.text.ink} letterSpacing={0.5}>Brilworks</text>
      </g>
      <text x={800} y={38} fontFamily={FONT_STACK} fontSize={BRAND.type.footer.size} fontWeight={500} fill={BRAND.text.muted} textAnchor="middle">{footer.centerLabel}</text>
      <text x={1520} y={38} fontFamily={FONT_STACK} fontSize={BRAND.type.footerStrong.size} fontWeight={600} fill={BRAND.text.accent} textAnchor="end">{footer.rightLabel}</text>
    </g>
  );
}

export function CriteriaGrid({ spec }: { spec: CriteriaGridSpec }) {
  if (spec.cards.length !== 5) {
    throw new Error(`criteria-grid expects exactly 5 cards (got ${spec.cards.length}). Other counts not yet supported.`);
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${BRAND.canvas.width} ${BRAND.canvas.height}`}
      width={BRAND.canvas.width}
      height={BRAND.canvas.height}
      role="img"
      aria-label={spec.alt}
    >
      <Defs />
      <rect width={BRAND.canvas.width} height={BRAND.canvas.height} fill="url(#brandSoft)" />
      <rect width={BRAND.canvas.width} height={320} fill="url(#halo)" />
      <rect x={0} y={0} width={BRAND.canvas.width} height={220} fill="url(#dots)" opacity={0.55} />
      <rect x={0} y={0} width={BRAND.canvas.width} height={6} fill="url(#brand)" />
      <Header header={spec.header} axis={spec.axis} />
      {spec.cards.map((card, i) => <CardSvg key={i} card={card} index={i} />)}
      <Footer footer={spec.footer} />
    </svg>
  );
}
