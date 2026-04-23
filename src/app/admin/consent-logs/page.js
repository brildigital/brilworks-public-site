import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOptions";
import { redirect } from "next/navigation";
import prismadb from "../../lib/prismadb";
import Link from "next/link";

export const metadata = {
  title: "Consent Logs | Brilworks Admin",
  robots: { index: false, follow: false },
};

const ACTIONS = ["accept-all", "reject-all", "customize", "initial"];
const DAY_OPTIONS = [7, 30, 90, 365];

async function fetchLogs({ days, action }) {
  const since = new Date(Date.now() - days * 86400000);
  const where = { createdAt: { gte: since } };
  if (action) where.action = action;

  const [entries, stats, totalAll] = await Promise.all([
    prismadb.consentLog.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 100,
    }),
    prismadb.consentLog.groupBy({
      by: ["action"],
      where: { createdAt: { gte: since } },
      _count: true,
    }),
    prismadb.consentLog.count({ where: { createdAt: { gte: since } } }),
  ]);

  const byAction = Object.fromEntries(stats.map((s) => [s.action, s._count]));
  return { entries, byAction, totalAll };
}

export default async function ConsentLogsPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  if (session.user?.role !== "ADMIN") {
    return (
      <div className="min-h-screen flex items-center justify-center p-10">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold mb-3">Not authorized</h1>
          <p className="text-[#4b5563] mb-4">
            This page is restricted to admin users. You&apos;re signed in as{" "}
            <strong>{session.user?.email}</strong>.
          </p>
          <Link href="/" className="text-themeColor font-semibold underline">
            Go home
          </Link>
        </div>
      </div>
    );
  }

  const days = Number(searchParams?.days) || 30;
  const action = searchParams?.action || "";

  const { entries, byAction, totalAll } = await fetchLogs({ days, action });

  const acceptRate = totalAll ? ((byAction["accept-all"] || 0) / totalAll * 100).toFixed(1) : "0";
  const rejectRate = totalAll ? ((byAction["reject-all"] || 0) / totalAll * 100).toFixed(1) : "0";
  const customizeRate = totalAll ? ((byAction["customize"] || 0) / totalAll * 100).toFixed(1) : "0";

  return (
    <div className="min-h-screen bg-[#fafafa] py-8 md:py-12">
      <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-[28px] md:text-[32px] font-extrabold tracking-[-0.5px] text-[#0d0f1a]">
              Consent Logs
            </h1>
            <p className="text-[14px] text-[#6b7280] mt-1">
              GDPR audit trail — last {days} days, showing up to 100 most recent entries
            </p>
          </div>
          <div className="text-right text-[12px] text-[#6b7280]">
            Signed in as <strong>{session.user?.email}</strong>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <StatCard label="Total events" value={totalAll} />
          <StatCard
            label="Accept all"
            value={byAction["accept-all"] || 0}
            subtext={`${acceptRate}%`}
            tone="green"
          />
          <StatCard
            label="Reject all"
            value={byAction["reject-all"] || 0}
            subtext={`${rejectRate}%`}
            tone="red"
          />
          <StatCard
            label="Customized"
            value={byAction["customize"] || 0}
            subtext={`${customizeRate}%`}
            tone="blue"
          />
        </div>

        {/* Filters */}
        <form method="GET" className="bg-white rounded-xl border border-[#e5e7eb] p-4 mb-4 flex flex-wrap items-end gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-[#6b7280] uppercase tracking-wide mb-1">
              Date range
            </label>
            <select
              name="days"
              defaultValue={days}
              className="border border-[#d1d5db] rounded-md px-3 py-[7px] text-[13px] bg-white"
            >
              {DAY_OPTIONS.map((d) => (
                <option key={d} value={d}>
                  Last {d} days
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-[#6b7280] uppercase tracking-wide mb-1">
              Action
            </label>
            <select
              name="action"
              defaultValue={action}
              className="border border-[#d1d5db] rounded-md px-3 py-[7px] text-[13px] bg-white"
            >
              <option value="">All</option>
              {ACTIONS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-themeColor hover:bg-[#0168c0] text-white text-[13px] font-semibold px-4 py-[7px] rounded-md transition-colors"
          >
            Apply
          </button>
          {(action || days !== 30) && (
            <Link
              href="/admin/consent-logs"
              className="text-[13px] text-[#6b7280] hover:text-[#0d0f1a] underline"
            >
              Reset
            </Link>
          )}
        </form>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e5e7eb] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                <tr className="text-left text-[11px] font-semibold text-[#6b7280] uppercase tracking-wide">
                  <th className="px-4 py-3">When</th>
                  <th className="px-4 py-3">Action</th>
                  <th className="px-4 py-3">Analytics</th>
                  <th className="px-4 py-3">Marketing</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Page</th>
                  <th className="px-4 py-3">Consent ID</th>
                </tr>
              </thead>
              <tbody>
                {entries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-[#6b7280]">
                      No consent events in the selected range.
                    </td>
                  </tr>
                ) : (
                  entries.map((entry) => (
                    <tr
                      key={entry.id}
                      className="border-b border-[#f3f4f6] last:border-b-0 hover:bg-[#fafbfc]"
                    >
                      <td className="px-4 py-3 text-[#4b5563] whitespace-nowrap">
                        {formatDate(entry.createdAt)}
                      </td>
                      <td className="px-4 py-3">
                        <ActionBadge action={entry.action} />
                      </td>
                      <td className="px-4 py-3">
                        <BoolPill value={entry.analytics} />
                      </td>
                      <td className="px-4 py-3">
                        <BoolPill value={entry.marketing} />
                      </td>
                      <td className="px-4 py-3 text-[#4b5563]">
                        {formatLocation(entry)}
                      </td>
                      <td className="px-4 py-3 text-[#4b5563] font-mono text-[12px] max-w-[200px] truncate" title={entry.pageUrl}>
                        {entry.pageUrl || "—"}
                      </td>
                      <td className="px-4 py-3 text-[#6b7280] font-mono text-[11px]" title={entry.consentId}>
                        {entry.consentId?.substring(0, 12)}…
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, subtext, tone }) {
  const toneClasses = {
    green: "border-l-[#10b981]",
    red: "border-l-[#ef4444]",
    blue: "border-l-themeColor",
  };
  return (
    <div
      className={`bg-white rounded-xl border border-[#e5e7eb] border-l-4 ${toneClasses[tone] || "border-l-[#d1d5db]"} p-4`}
    >
      <p className="text-[11px] font-semibold text-[#6b7280] uppercase tracking-wide">
        {label}
      </p>
      <p className="text-[24px] md:text-[28px] font-extrabold text-[#0d0f1a] mt-1 leading-none">
        {value.toLocaleString()}
      </p>
      {subtext && <p className="text-[12px] text-[#6b7280] mt-1">{subtext}</p>}
    </div>
  );
}

function ActionBadge({ action }) {
  const config = {
    "accept-all": { bg: "bg-[#d1fae5]", text: "text-[#065f46]", label: "Accept all" },
    "reject-all": { bg: "bg-[#fee2e2]", text: "text-[#991b1b]", label: "Reject all" },
    "customize": { bg: "bg-[#dbeafe]", text: "text-[#1e40af]", label: "Customize" },
    "initial": { bg: "bg-[#f3f4f6]", text: "text-[#4b5563]", label: "Initial" },
  }[action] || { bg: "bg-[#f3f4f6]", text: "text-[#4b5563]", label: action };

  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}

function BoolPill({ value }) {
  return value ? (
    <span className="inline-block w-2 h-2 rounded-full bg-[#10b981]" title="Granted" />
  ) : (
    <span className="inline-block w-2 h-2 rounded-full bg-[#d1d5db]" title="Denied" />
  );
}

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatLocation(entry) {
  const parts = [entry.city, entry.region, entry.country].filter(Boolean);
  return parts.length ? parts.join(", ") : "—";
}
