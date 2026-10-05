const BADGES = [
  { name: "Advanced Techniques Declarative Pipelines", file: "advanced_techniques_declarative_pipeline" },
  { name: "Agent Evaluation with Databricks", file: "agent_evaluation_databricks" },
  { name: "Agentic Applications on Databricks", file: "agentic_applications_databricks" },
  { name: "Automated Deployment with Asset Bundles", file: "automated_deployment_automation_bundles" },
  { name: "Building Agents with Agent Bricks", file: "building_agents_with_agent_bricks" },
  { name: "Databricks Data Privacy", file: "databricks_data_privacy" },
  { name: "Databricks Performance Optimization", file: "databricks_performance_optimization" },
  { name: "Data Ingestion", file: "data_ingestion" },
  { name: "Data Pipelines", file: "data_pipelines" },
  { name: "Deploying and Monitoring Agent Applications", file: "deploying_onitoring_agent_applications" },
  { name: "Deploy Workloads with Lakeflow Jobs", file: "deploy_workloads_with_lakeflow_jobs" },
  { name: "DevOps Essentials for Data Engineering", file: "devops_essentials_data_engineering" },
  { name: "Generative AI Engineer Associate", file: "generative_ai_engineer_associate" },
  { name: "Manufacturing & Energy Sales Skills", file: "manufacturing_energy_sales_skills_badge" },
  { name: "Partner Tech Summit", file: "partner_tech_summit" },
];

const DatabricksBadges = () => {
  const badges = [...BADGES, ...BADGES];

  return (
    <section className="py-16 bg-white overflow-hidden max-w-[1280px] container mx-auto">
      <div className="mx-auto px-5 md:px-10 text-center" style={{ maxWidth: 720, marginBottom: 40 }}>
        <span
          className="inline-block mb-4"
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#017eeb",
          }}
        >
          Databricks Credentials
        </span>
        <h2
          className="font-extrabold"
          style={{
            fontSize: "clamp(22px, 2.4vw, 30px)",
            letterSpacing: "-1px",
            lineHeight: 1.15,
            color: "#0d0f1a",
          }}
        >
          Certified by Databricks
        </h2>
      </div>
      <div
        className="relative w-full"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-[partnerScroll_40s_linear_infinite]">
          {badges.map((b, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 mx-6"
              style={{ width: 140, height: 140 }}
              aria-hidden={i >= BADGES.length}
            >
              <img
                src={`/images/databricks_badges/${b.file}.svg`}
                alt={i < BADGES.length ? b.name : ""}
                loading="lazy"
                className="max-h-[130px] max-w-[130px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatabricksBadges;
