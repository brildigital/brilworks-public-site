"use client";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";

const RatingDots = ({ rating }) => {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`w-2.5 h-2.5 rounded-full ${
            i <= rating ? "bg-themeColor" : "bg-[#e5e7eb]"
          }`}
        />
      ))}
    </div>
  );
};

const ComparisonPage = ({ data }) => {
  const {
    title,
    subtitle,
    description,
    optionA,
    optionB,
    criteria,
    verdict,
    faqs,
  } = data;

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#0d0f1a] text-white">
        <div className="container max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {" / "}
            <span className="text-white/80">Compare</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-1px] mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/70 max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Introduction */}
      <div className="container max-w-[1280px] mx-auto px-5 md:px-10 py-12 md:py-16">
        <p className="text-lg text-[#4b5563] leading-relaxed max-w-4xl">
          {description}
        </p>
      </div>

      {/* Comparison Table */}
      <div className="container max-w-[1280px] mx-auto px-5 md:px-10 pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0d0f1a] mb-8">
          Side-by-Side Comparison
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f8fafc]">
                <th className="text-left p-4 text-sm font-semibold text-[#6b7280] uppercase tracking-wider border-b-2 border-[#e5e7eb] w-1/4">
                  Criteria
                </th>
                <th className="text-left p-4 text-sm font-semibold text-themeColor uppercase tracking-wider border-b-2 border-themeColor w-[37.5%]">
                  {optionA.name}
                </th>
                <th className="text-left p-4 text-sm font-semibold text-[#6b7280] uppercase tracking-wider border-b-2 border-[#e5e7eb] w-[37.5%]">
                  {optionB.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}
                >
                  <td className="p-4 font-semibold text-[#0d0f1a] border-b border-[#e5e7eb]">
                    {row.label}
                  </td>
                  <td className="p-4 border-b border-[#e5e7eb]">
                    <div className="mb-1">
                      <RatingDots rating={row.ratingA} />
                    </div>
                    <p className="text-[#4b5563] text-sm">{row.detailA}</p>
                  </td>
                  <td className="p-4 border-b border-[#e5e7eb]">
                    <div className="mb-1">
                      <RatingDots rating={row.ratingB} />
                    </div>
                    <p className="text-[#4b5563] text-sm">{row.detailB}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {criteria.map((row, index) => (
            <div
              key={index}
              className="border border-[#e5e7eb] rounded-xl p-5"
            >
              <h3 className="font-semibold text-[#0d0f1a] mb-4">
                {row.label}
              </h3>
              <div className="space-y-3">
                <div className="bg-[#e8f0fd] rounded-lg p-3">
                  <p className="text-xs font-semibold text-themeColor uppercase mb-1">
                    {optionA.name}
                  </p>
                  <RatingDots rating={row.ratingA} />
                  <p className="text-sm text-[#4b5563] mt-1">{row.detailA}</p>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-3">
                  <p className="text-xs font-semibold text-[#6b7280] uppercase mb-1">
                    {optionB.name}
                  </p>
                  <RatingDots rating={row.ratingB} />
                  <p className="text-sm text-[#4b5563] mt-1">{row.detailB}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-[#f8fafc] border-y border-[#e5e7eb]">
        <div className="container max-w-[1280px] mx-auto px-5 md:px-10 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d0f1a] mb-4">
            The Verdict
          </h2>
          <p className="text-lg text-[#4b5563] leading-relaxed max-w-4xl mb-6">
            {verdict}
          </p>
          <ButtonV2
            size="large"
            className="w-fit"
            label="Talk to Our Team"
            redirect="/contact-us/"
          />
        </div>
      </div>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <div className="container max-w-[1280px] mx-auto px-5 md:px-10 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d0f1a] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="border border-[#e5e7eb] rounded-xl group"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#0d0f1a] hover:text-themeColor transition-colors list-none">
                  {faq.question}
                  <span className="text-themeColor ml-4 flex-shrink-0 transition-transform group-open:rotate-45 text-xl">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-[#4b5563] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonPage;
