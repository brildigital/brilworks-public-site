const groups = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <rect x="4" y="6" width="24" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="14" width="24" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="22" width="24" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="25" cy="9" r="1.2" fill="currentColor" />
        <circle cx="25" cy="17" r="1.2" fill="currentColor" />
        <circle cx="25" cy="25" r="1.2" fill="currentColor" />
      </svg>
    ),
    label: "Compute",
    subtitle: "the engine",
    services: [
      {
        name: "ECS on Fargate",
        desc: "Our default for most production workloads. Containerized, no servers to patch, scales cleanly. Most client builds land here.",
      },
      {
        name: "Lambda",
        desc: "Event-driven work, async jobs, webhooks, glue code between services. Where we wouldn't use it: long-running jobs, anything stateful, or workloads where cold starts will hurt the user.",
      },
      {
        name: "EC2",
        desc: "When we need predictable, sustained compute or a workload that doesn't fit a container model cleanly. Rarer than it used to be. Still the right call sometimes.",
      },
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <ellipse cx="16" cy="9" rx="10" ry="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 9v7c0 2.21 4.48 4 10 4s10-1.79 10-4V9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 16v7c0 2.21 4.48 4 10 4s10-1.79 10-4v-7" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    label: "Data",
    subtitle: "the persistence layer",
    services: [
      {
        name: "RDS (Postgres)",
        desc: "Our default for transactional, structured data. Multi-AZ in production, read replicas when the read pattern justifies it.",
      },
      {
        name: "DynamoDB",
        desc: "High-throughput, predictable-access patterns. Session stores, audit logs, anything where the access pattern is known on day one. Where it bites: ad-hoc queries you didn't plan for.",
      },
      {
        name: "S3",
        desc: "Everything that isn't a row in a database. Uploads, backups, static assets, data lake feeds. Lifecycle policies from day one — not month six.",
      },
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path
          d="M16 4L6 8v8c0 5.52 4.28 10.68 10 12 5.72-1.32 10-6.48 10-12V8L16 4z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M12 16l2.5 2.5L20 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Edge & Security",
    subtitle: "the perimeter",
    services: [
      {
        name: "CloudFront",
        desc: "CDN for static assets and read-heavy API caching. Paired with S3 for frontends, with API Gateway for cacheable endpoints.",
      },
      {
        name: "WAF",
        desc: "Managed rule sets first, custom rules for what slips through. We tune iteratively after seeing real traffic, not by guessing upfront.",
      },
      {
        name: "IAM",
        desc: "Least-privilege from day one. We've cleaned up enough wide-open IAM messes inherited from other builds to know what it costs to skip this.",
      },
    ],
  },
];

const AWSStackSection = () => {
  return (
    <section className="bg-white border-t border-borderGray">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <h2
          className="font-extrabold text-colorBlack tracking-[-0.5px] leading-tight !mb-2"
          style={{ fontSize: "clamp(22px, 2.8vw, 36px)" }}
        >
          The AWS stack we run in production
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 !mt-10">
          {groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-5">
              {/* Group header */}
              <div className="flex items-start gap-3 pb-4 border-b border-borderGray">
                <div className="text-themeColor mt-0.5 shrink-0">{group.icon}</div>
                <div>
                  <p className="font-bold text-colorBlack text-lg leading-tight">{group.label}</p>
                  <p className="text-sm text-gray-400 italic font-light mt-0.5">{group.subtitle}</p>
                </div>
              </div>

              {/* Service rows */}
              <div className="flex flex-col gap-5">
                {group.services.map((service) => (
                  <div key={service.name}>
                    <p className="font-semibold text-colorBlack text-[15px] leading-snug">{service.name}</p>
                    <p className="text-gray-500 text-[14px] leading-relaxed mt-1">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="text-gray-400 text-[13px] leading-relaxed !mt-10 max-w-[720px]">
          What&apos;s missing here is deliberate. CloudWatch, Cognito, API Gateway, SQS, Step Functions, and Secrets Manager come in when the architecture calls for them. These are the ones we touch on nearly every engagement.
        </p>
      </div>
    </section>
  );
};

export default AWSStackSection;
