// Short "answer first" block for service pages: a one-paragraph definition
// followed by a comparison table. Rendered as plain server HTML so search
// engines and AI assistants can quote it directly.
const AnswerSummary = ({ id, eyebrow, heading, definition, table, note }) => (
  <section
    id={id}
    aria-labelledby={id ? `${id}-heading` : undefined}
    style={{ background: "#ffffff", borderTop: "1px solid #e4eaf1" }}
  >
    <div className="container max-w-[1280px] md:px-10 px-5 mx-auto py-16">
      <div className="max-w-[760px]">
        {eyebrow && (
          <p
            className="text-[11px] font-bold tracking-[0.12em] uppercase !mb-3"
            style={{ color: "#2f6bff" }}
          >
            {eyebrow}
          </p>
        )}
        <h2
          id={id ? `${id}-heading` : undefined}
          className="font-extrabold tracking-[-0.5px] leading-[1.2] !mb-4"
          style={{ fontSize: "clamp(24px, 2.6vw, 34px)", color: "#0b1e33" }}
        >
          {heading}
        </h2>
        <p
          className="text-[17px] leading-[1.65] !mb-8"
          style={{ color: "#3b4a5c" }}
        >
          {definition}
        </p>
      </div>

      {/* Phones: one card per row, so nothing is cut off. */}
      <div className="md:hidden flex flex-col gap-3">
        {table.rows.map((row) => (
          <div
            key={row[0]}
            className="rounded-xl p-4"
            style={{ border: "1px solid #e4eaf1" }}
          >
            <p
              className="text-[16px] font-semibold !mb-2"
              style={{ color: "#0b1e33" }}
            >
              {row[0]}
            </p>
            <dl className="flex flex-col gap-2">
              {row.slice(1).map((cell, index) => (
                <div key={index}>
                  <dt
                    className="text-[11px] font-semibold uppercase tracking-[0.06em]"
                    style={{ color: "#6b7a8a" }}
                  >
                    {table.columns[index + 1]}
                  </dt>
                  <dd
                    className="text-[15px] leading-[1.5]"
                    style={{ color: "#3b4a5c" }}
                  >
                    {cell}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {/* Tablets and up: the full comparison table. */}
      <div
        className="hidden md:block overflow-x-auto rounded-xl"
        style={{ border: "1px solid #e4eaf1" }}
      >
        <table className="w-full min-w-[640px] text-left border-collapse">
          {table.caption && <caption className="sr-only">{table.caption}</caption>}
          <thead style={{ background: "#f1f5fb" }}>
            <tr>
              {table.columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.06em]"
                  style={{ color: "#0b1e33" }}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[0]} style={{ borderTop: "1px solid #e4eaf1" }}>
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th
                      key={index}
                      scope="row"
                      className="px-5 py-4 text-[15px] font-semibold align-top"
                      style={{ color: "#0b1e33" }}
                    >
                      {cell}
                    </th>
                  ) : (
                    <td
                      key={index}
                      className="px-5 py-4 text-[15px] leading-[1.55] align-top"
                      style={{ color: "#3b4a5c" }}
                    >
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {note && (
        <p className="text-[13px] !mt-4" style={{ color: "#6b7a8a" }}>
          {note}
        </p>
      )}
    </div>
  </section>
);

export default AnswerSummary;
