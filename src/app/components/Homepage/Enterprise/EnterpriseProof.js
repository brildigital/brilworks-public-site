import "../../../styles/EnterpriseHome.css";

const REVIEWS = [
  {
    quote:
      "Great technical skills and exceptional communication. They adapted to our processes.",
    who: "COO · Eccocar, Spain",
  },
  {
    quote:
      "Incredibly professional, delivered on time, and proactive in their communication.",
    who: "Founder & CEO · Acenonyx",
  },
  {
    quote:
      "Transparent, responsive, delivered exactly what was scoped — no surprises.",
    who: "Executive · Service Buddy",
  },
];

const AWARDS = [
  "GoodFirms · Top Software 2025–26",
  "Clutch Global · 2025",
  "Clutch Global · 2024",
  "SelectedFirms · Top 10 2026",
  "AWS Partner · Advanced Tier",
];

const EnterpriseProof = () => {
  return (
    <section className="bw-home">
      <div className="wrap">
        <p className="eyebrow">Trusted by the people we work with</p>
        <h2 className="sec">5.0 on Clutch, across 22 reviews.</h2>
        <div className="reviews">
          {REVIEWS.map((r) => (
            <div className="rev" key={r.who}>
              <div className="st">★★★★★</div>
              <p>&ldquo;{r.quote}&rdquo;</p>
              <div className="who">{r.who}</div>
            </div>
          ))}
        </div>
        <div className="awards">
          {AWARDS.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseProof;
