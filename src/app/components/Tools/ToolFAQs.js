"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Heading from "../HTMLComponents/Heading";
import Cal from "@calcom/embed-react";
import { usePathname } from "next/navigation";

const softwareDevelopmentCostCalculatorFaqData = {
  description:
    "Everything you need to know about our software development cost calculator",
  queAns: [
    {
      question: "How much does software development cost?",
      answer:
        "On average, simple projects may start around $10,000, while complex enterprise apps can cross six figures. Our software pricing calculator gives a tailored estimate based on your inputs.",
    },
    {
      question: "Can I use the calculator to estimate mobile app costs?",
      answer:
        "Yes. Select “Mobile” under platform to see how your mobile app cost calculator results vary by complexity and features.",
    },
    {
      question: "How accurate are the estimates?",
      answer:
        "While no calculator can guarantee final quotes, our approach factors in common industry rates and patterns, making it a strong starting point for budget planning.",
    },
    {
      question: "Do I need technical knowledge to use the calculator?",
      answer:
        "No. The tool is designed for both business owners and technical teams. Just answer a few guided questions.",
    },
  ],
};

const appLikeUberCostCalculatorFaqData = {
  description:
    "Get answers to common questions about ride-hailing app development",
  queAns: [
    {
      question: "How accurate is this app development cost calculator?",
      answer:
        "Our tool provides a highly reliable cost estimate based on industry averages and your specific selections. For a final, fixed uber clone app price, we recommend a personalized consultation.",
    },
    {
      question:
        "What is the most significant factor affecting the cost to build a ride-hailing app?",
      answer:
        "The most significant factor is the complexity and number of features you choose. More advanced features, like AI-powered routing or complex payment systems, will increase the overall app development cost breakdown.",
    },
    {
      question: "How long does it take to develop an Uber-like app?",
      answer: (
        <>
          Development timeline typically ranges from 6-18 months depending on
          complexity.
          <ul className="list-disc list-inside mt-1">
            <li>Basic version: 6-9 months</li>
            <li>Standard: 9-12 months</li>
            <li>Premium: 12-18 months</li>
          </ul>
        </>
      ),
    },
    {
      question: "Do I need separate apps for riders and drivers?",
      answer:
        "Yes, typically you'll need separate apps for riders and drivers, plus an admin panel for management. Some solutions offer unified apps with role-based interfaces.",
    },
    {
      question: "What ongoing costs should I consider?",
      answer:
        "Consider server hosting, third-party API costs (maps, payments), maintenance, updates, customer support, marketing, and compliance costs.",
    },
    {
      question: "Does the calculator include the cost of ongoing maintenance?",
      answer:
        "The calculator provides an estimate for development. Ongoing costs for maintenance, updates, and server fees will be discussed during a detailed project consultation.",
    },
  ],
};
const roiCalculatorFaqData = {
  description:
    "Get answers to common questions about app development costs and ROI calculations",
  queAns: [
    {
      question: "What is an app ROI calculator?",
      answer:
        "It’s a tool that estimates your mobile app development costs and forecasts your potential investment return, helping you make informed decisions.",
    },
    {
      question: "Can I use this as a startup ROI calculator?",
      answer:
        "Absolutely. Our calculator is designed for startups and established companies, providing tailored ROI and cost projections.",
    },
    {
      question: "How accurate is the software ROI calculator?",
      answer:
        "We use industry benchmarks, market data, and your input to provide reliable, real-time calculations.",
    },
    {
      question: "Can this investment returns calculator help plan my budget?",
      answer:
        "Yes. It breaks down development, maintenance, and revenue scenarios so you can forecast your return on investment clearly.",
    },
    {
      question: "How does the ROI software calculator handle complex apps?",
      answer:
        "It factors in app complexity, team size, timeline, and feature sets to give a comprehensive ROI and payback period analysis.",
    },
  ],
};
const SaasDevCostCalculatorFaqData = {
  description:
    "Get answers to common questions about app development costs and ROI calculations",
  queAns: [
    {
      question: "What is the average cost to build a SaaS product in 2025?",
      answer:
        "The cost to build a SaaS product ranges from $10K to $100K depending on complexity, features, and platform.",
    },
    {
      question: "How does the SaaS calculator estimate costs?",
      answer:
        "Our SaaS calculator uses real project data and AI-powered logic to generate accurate app development cost estimates.",
    },
    {
      question:
        "Can I use this tool as an App Development Cost Calculator for mobile apps?",
      answer:
        "Yes! Our calculator supports mobile app development cost estimation for Android, iOS, and cross-platform builds.",
    },
    {
      question: "What factors influence SaaS development costs the most?",
      answer: (
        <>
          Key factors include:
          <ul className="list-disc list-inside mt-1">
            <li>Feature set</li>
            <li>Platform choice</li>
            <li>UI/UX design</li>
            <li>Timeline</li>
            <li>Team location</li>
          </ul>
        </>
      ),
    },
    {
      question: "Is this SaaS pricing estimator suitable for MVPs?",
      answer:
        "Absolutely. You can estimate the cost of building a SaaS MVP with minimal features and scale later.",
    },
  ],
};
const mvpDevCostCalculatorFaqData = {
  description:
    "Get answers to common questions about MVP development costs and our calculator",
  queAns: [
    {
      question: "What is the average cost to build an MVP for a startup?",
      answer:
        "The average MVP cost ranges from $10,000 to $100,000 depending on platform, complexity, and team structure.",
    },
    {
      question: "How accurate is the MVP calculation from this tool?",
      answer:
        "Our MVP Calculator uses real-time industry data to deliver highly accurate estimates tailored to your project.",
    },
    {
      question: "What’s included in the minimum viable product cost?",
      answer:
        "Design, development, testing, deployment, and basic maintenance. Optional features may increase the cost.",
    },
    {
      question: "Can I calculate MVP cost for both web and mobile apps?",
      answer:
        "Yes, our calculator supports multi-platform MVP cost estimation including hybrid builds.",
    },
    {
      question: "How does MVP cost differ for SaaS vs marketplace apps?",
      answer:
        "SaaS MVPs often include user roles and subscriptions, while marketplace MVPs require listings, filters, and payment systems—each affecting cost differently.",
    },
    {
      question: "How long does MVP development typically take?",
      answer:
        "Most MVPs take 6-16 weeks depending on complexity. Simple MVPs can be completed in 6-8 weeks, medium complexity in 8-12 weeks, and complex MVPs may take 12-16 weeks or more.",
    },
    {
      question: "What's the difference between web and mobile app costs?",
      answer:
        "Mobile apps typically cost 30% more than web apps due to platform-specific development, app store guidelines, and additional testing requirements. Cross-platform solutions can help reduce costs.",
    },
    {
      question: "Do you provide actual development services?",
      answer:
        "This is a cost estimation tool. For actual development services, we can connect you with our network of vetted development partners who can bring your MVP to life based on these estimates.",
    },
  ],
};
const appMaintenanceCostEstimatorFaqData = {
  description:
    "Get answers to common questions about app maintenance costs and planning",
  queAns: [
    {
      question: "How much does it cost to maintain an app annually?",
      answer:
        "Annual app maintenance costs vary based on complexity, platform, and update frequency. On average, expect to spend 15–25% of your initial development cost per year.",
    },
    {
      question: "What’s included in mobile app maintenance services?",
      answer:
        "Services typically include bug fixes, performance optimization, platform updates, security patches, and user support.",
    },
    {
      question: "How often should I update my app?",
      answer:
        "Most apps benefit from monthly or quarterly updates to stay secure and competitive.",
    },
    {
      question: "What affects the cost of maintaining an app the most?",
      answer:
        "Factors include app complexity, number of platforms, user base size, and frequency of updates.",
    },
    {
      question:
        "Can I reduce app maintenance costs without compromising quality?",
      answer:
        "Yes—by automating testing, prioritizing critical updates, and using scalable infrastructure.",
    },
    {
      question: "What happens if I skip regular maintenance?",
      answer:
        "Skipping updates can lead to security vulnerabilities, poor performance, and user churn.",
    },
    {
      question:
        "Which mobile application types have the highest maintenance cost?",
      answer:
        "Apps with real-time features (e.g., chat, GPS tracking) or large user bases typically incur higher maintenance costs.",
    },
  ],
};
const appDevTimelineCalculatorFaqData = {
  description: "Get answers to common questions about our timeline calculator",
  queAns: [
    {
      question: "How accurate are the timeline estimates?",
      answer:
        "Our estimates are based on analysis of over 10,000 completed projects and have an accuracy rate of 85-90%. The tool considers multiple variables including complexity, features, and team experience to provide realistic projections.",
    },
    {
      question: "What factors influence the cost calculation?",
      answer:
        "Cost calculations consider app type, target platforms, feature complexity, timeline requirements, team location, and specific keywords in your description that indicate advanced functionality like AI, blockchain, or real-time features.",
    },
    {
      question: "Can I customize the timeline for urgent projects?",
      answer:
        "Yes, you can select 'Urgent' timeline which typically increases costs by 30% but reduces delivery time. We'll provide recommendations on team scaling and resource allocation needed to meet tight deadlines.",
    },
    {
      question: "Does the tool account for different development approaches?",
      answer:
        "Absolutely. The calculator considers native vs cross-platform development, MVP vs full-featured launches, and agile vs waterfall methodologies to provide tailored estimates for your specific approach.",
    },
    {
      question: "How does keyword analysis affect pricing?",
      answer:
        "Our AI analyzes your project description for complexity indicators like 'machine learning', 'real-time', 'blockchain', etc. These keywords trigger multipliers based on historical data showing how such features impact development time and cost.",
    },
    {
      question: "Can I export or share the estimates?",
      answer:
        "Yes, you can generate detailed PDF reports with your estimates, recommendations, and project breakdown that can be shared with stakeholders or used for budget planning and proposals.",
    },
  ],
};
const mvpDevTimelineEstimatorFaqData = {
  description: "Everything you need to know about MVP timeline estimation",
  queAns: [
    {
      question: "How long does it take to build an MVP?",
      answer:
        "The timeline varies based on complexity, but our estimator provides a range from 10 to 100 days depending on your inputs.",
    },
    {
      question: "What are the MVP stages explained in the estimate?",
      answer:
        "We break down the MVP development process into planning, design, development, testing, and launch phases.",
    },
    {
      question: "Can I use this for MVP timeline for startups?",
      answer:
        "Absolutely. Our tool is designed to support lean startup MVP strategies and agile development workflows.",
    },
    {
      question: "How to create MVP product with minimal resources?",
      answer:
        "Focus on core features, validate with early users, and iterate based on feedback—our estimator helps you prioritize efficiently.",
    },
    {
      question: "What's included in the development phases?",
      answer:
        "Each phase includes: Planning & Research (requirements, user stories), Design & Prototyping (UI/UX, wireframes), Development (coding, integration), and Testing & Launch (QA, deployment, monitoring).",
    },
    {
      question: "Can I get a more detailed breakdown?",
      answer:
        "Yes! After getting your initial estimate, you can request a detailed project plan that includes specific deliverables, milestones, and resource allocation for each phase.",
    },
  ],
};
const featureComplexityVsTimelineEstimatorFaqData = {
  description: "Get answers to common questions about our estimation tool",
  queAns: [
    {
      question:
        "How accurate are the software development time estimates from this tool? ",
      answer:
        "Our AI-powered estimator delivers up to 95% accuracy by analyzing feature complexity across multiple dimensions such as UI, data integration, and business logic. It uses historical project data and proven estimation models to generate reliable timelines.",
    },
    {
      question:
        "Which factors affect feature complexity scoring in app development? ",
      answer:
        "Feature complexity is scored based on six key dimensions: UI complexity, data integration needs, business logic depth, platform diversity, user interaction level, and security requirements. Each factor contributes to the overall development effort and time required.",
    },
    {
      question:
        "Can I use this estimator for mobile apps, web apps, and SaaS platforms? ",
      answer:
        "Yes, the tool is designed to support a wide range of software projects including mobile applications, web platforms, SaaS products, and enterprise systems. It adapts to different tech stacks and project scopes.",
    },
    {
      question:
        "How do I interpret complexity levels for backend and frontend features?",
      answer:
        "Each complexity rating (1–5) reflects the relative difficulty of implementing that feature. A higher score indicates more intricate UI design, deeper backend logic, or complex integrations, helping you plan resources and timelines accordingly.",
    },
    {
      question:
        "What if my actual development time differs from the AI estimation? ",
      answer:
        "While the estimator provides a strong baseline, real-world variables such as team experience, scope changes, and unforeseen challenges may affect actual timelines. Use the tool as a planning guide and adjust based on ongoing project insights.",
    },
  ],
};
const testingQATimelineEstimatorFaqData = {
  description:
    "Get answers to common questions about our Testing & QA Timeline Calculator",
  queAns: [
    {
      question: "How accurate is the Testing & QA Timeline Calculator?",
      answer:
        "Our calculator uses AI and real project data to provide estimates with up to 99% accuracy. It adapts to your project’s specifics for reliable results.",
    },
    {
      question: "What factors does the QA timeline estimator consider?",
      answer:
        "It looks at project size, complexity, testing types, team size, experience, and risk buffers to create a tailored timeline.",
    },
    {
      question:
        "Can I use this testing timeline calculator for agile projects?",
      answer:
        "Yes, it supports agile workflows and adjusts estimates based on sprint cycles and iterative testing.",
    },
    {
      question: "What testing types are supported?",
      answer:
        "The tool covers functional, regression, performance, security, usability, and integration testing.",
    },
    {
      question: "Can I export or share my QA timeline results?",
      answer:
        "Currently, you can copy and share results manually. Export options like PDF or CSV are coming soon.",
    },
    {
      question: "Is there a limit to how many calculations I can perform?",
      answer:
        "No limits—you can use the calculator as often as you need for different projects.",
    },
    {
      question: "How often is the calculator updated?",
      answer:
        "We update it regularly with new data and user feedback to keep estimates accurate and relevant.",
    },
    {
      question: "Why use this tool instead of manual estimation?",
      answer:
        "It saves time and reduces errors by factoring in hidden risks and complexities that manual methods often miss.",
    },
  ],
};
const goToMarketPlacePlannerFaqData = {
  description:
    "Everything you need to know about our Go-to-Market Timeline Planner",
  queAns: [
    {
      question: "How to create a go-to-market timeline for a SaaS product?",
      answer:
        "Use our planner to input your SaaS details, and receive a tailored roadmap with milestones and deadlines.",
    },
    {
      question: "What is the best way to plan a product launch using AI?",
      answer:
        "Our AI-powered planner analyzes your inputs and generates a timeline optimized for success.",
    },
    {
      question: "Can I adjust my product launch timeline after generation?",
      answer:
        "Yes, our tool allows real-time adjustments based on market changes or internal delays.",
    },
    {
      question: "Does the planner support healthcare and fintech industries?",
      answer:
        "Absolutely. We offer industry-specific strategies for healthcare, fintech, and more.",
    },
    {
      question: "How accurate is an AI-powered go-to-market planner?",
      answer:
        "Our planner uses historical data and predictive analytics to deliver highly accurate timelines",
    },
    {
      question: "What happens if my launch gets delayed?",
      answer:
        "The planner includes contingency planning features. If delays occur, you can input the new constraints, and the AI will automatically adjust the remaining timeline, redistribute resources, and suggest recovery strategies to minimize impact on your launch date.",
    },
    {
      question: "Do you provide support during the planning process?",
      answer:
        "Yes! We offer comprehensive support including detailed documentation, video tutorials, best practice guides, and direct access to our product launch experts. Our team is available to help you optimize your timeline and strategy.",
    },
    {
      question: "Can I export or integrate the timeline with other tools?",
      answer:
        "Absolutely! You can export your timeline to popular project management tools like Asana, Trello, or Jira. We also provide API access for custom integrations with your existing workflow systems.",
    },
  ],
};
const techStackRecommenderFaqData = {
  description:
    " Get answers to common questions about our Tech Stack Recommender",
  queAns: [
    {
      question: "How accurate are the tech stack recommendations for startups?",
      answer:
        "Our AI model analyzes thousands of startup projects to suggest stacks that balance speed, cost, and scalability.",
    },
    {
      question:
        "What factors does the recommender consider for enterprise-level scalability?",
      answer:
        "We evaluate team size, projected user load, data architecture, and deployment needs to suggest enterprise-grade stacks.",
    },
    {
      question:
        "Can I get tech stack comparison for mobile apps with cross-platform support?",
      answer:
        "Yes. We provide side-by-side comparisons of mobile stacks like React Native, Flutter, and Kotlin based on performance and team compatibility.",
    },
    {
      question:
        "Do you offer migration guides for switching technology stacks?",
      answer:
        "Yes. Each recommendation includes migration paths and tooling support to ease transitions.",
    },
    {
      question:
        "Is this tool suitable for existing projects with legacy systems?",
      answer:
        "Absolutely. You can input current stack details and get upgrade or integration suggestions.",
    },
  ],
};
const databaseSelectorToolFaqData = {
  description: "Get answers to common questions about database selection",
  queAns: [
    {
      question: "How accurate are the database recommendations?",
      answer: "Our tool has a 98% accuracy rate based on real-world use cases.",
    },
    {
      question: "Can I use multiple databases in one project?",
      answer: (
        <>
          Yes. Many projects combine options like <b>PostgreSQL</b> and{" "}
          <b>Redis</b>.
        </>
      ),
    },
    {
      question: "PostgreSQL vs MongoDB – which is better?",
      answer: (
        <>
          <b>PostgreSQL</b> is ideal for structured data. <b>MongoDB</b> suits
          flexible, document-based storage.
        </>
      ),
    },
    {
      question:
        "What’s the difference between relational vs non-relational databases?",
      answer:
        "Relational databases use structured schemas and SQL. Non-relational databases offer flexibility for unstructured data.",
    },
    {
      question: "How often should I reevaluate my database choice?",
      answer:
        "Reevaluate when your data volume, team size, or business model changes.",
    },
  ],
};
const crossPlatformVsNativeAnalyzerFaqData = {
  description:
    "Get answers to common questions about mobile app development decisions",
  queAns: [
    {
      question:
        "What is the difference between native and cross-platform app development?",
      answer:
        "Native apps are built for a specific platform (iOS or Android) with full access to device features and high performance. Cross-platform apps use a single codebase for multiple platforms, saving time and cost but with limited platform-specific features.",
    },
    {
      question:
        "How does the analyzer determine the best approach for my project?",
      answer:
        "The intelligent analyzer evaluates your project type, budget, timeline, performance needs, and other factors to provide a personalized recommendation and implementation guidance.",
    },
    {
      question: "Can I use this tool for hybrid app development decisions?",
      answer:
        "Yes. The analyzer compares native, cross-platform, and hybrid approaches, helping you understand trade-offs in speed, cost, performance, and maintenance.",
    },
    {
      question: "Does the analyzer consider my team’s skills?",
      answer:
        "Absolutely. It factors in your team’s expertise to recommend the development approach that aligns with available resources and capabilities.",
    },
    {
      question: "Will I get a detailed implementation roadmap?",
      answer:
        "Yes. The analysis includes a step-by-step roadmap, cost-benefit breakdown, risk assessment, and industry best practices to guide your app development process.",
    },
  ],
};
const apiIntegrationFeasibiltyCheckerFaqData = {
  description:
    "Get answers to common questions about API integration feasibility and our assessment tool",
  queAns: [
    {
      question: "What is an API integration feasibility checker?",
      answer:
        "An API integration checker evaluates your project’s viability, provides a feasibility score, identifies risks, and gives recommendations to ensure a successful integration.",
    },
    {
      question: "How can I use an API integration checklist?",
      answer:
        "The checklist guides your team through project planning, resource evaluation, risk assessment, and best practices to avoid common integration pitfalls.",
    },
    {
      question: "What are the best practices for API integration?",
      answer:
        "Key API integration best practices include thorough planning, verifying compatibility, implementing authentication, performing risk assessments, and continuous testing.",
    },
    {
      question: "How does the AI-powered tool work?",
      answer:
        "It analyzes your API type, project complexity, budget, timeline, and team expertise against thousands of successful projects to generate a personalized feasibility score and recommendations.",
    },
    {
      question: "Can this tool estimate project timelines?",
      answer:
        "Yes, it provides accurate timeline estimates based on project complexity, available resources, and historical benchmarks.",
    },
    {
      question: "Is this tool suitable for both small and large projects?",
      answer:
        "Yes. Whether your integration project is simple or complex, the API integration checker adapts to provide tailored insights, risk assessments, and recommendations.",
    },
  ],
};
const cloudServiceCostEstimatorFaqData = {
  description:
    "Get answers to common questions about our cloud cost estimator.",
  queAns: [
    {
      question: "What is a cloud cost analysis tool?",
      answer:
        "A cloud cost analysis tool helps you evaluate and estimate your cloud infrastructure expenses, providing insights into usage, costs, and opportunities for optimization.",
    },
    {
      question: "How does a cloud cost estimator work?",
      answer:
        "A cloud cost estimator calculates costs based on your selected cloud service, resource configuration, regional pricing, and provider rates to give an accurate, real-time cost breakdown.",
    },
    {
      question: "Can I compare cloud pricing between different providers?",
      answer:
        "Yes. Our cloud pricing comparison feature allows you to compare costs across AWS, Azure, Google Cloud, and other major providers to make informed decisions.",
    },
    {
      question: "How accurate are the cost estimates?",
      answer:
        "Our tool uses up-to-date pricing models and usage data to provide highly accurate estimates, with a 99.9% accuracy rate based on over 50K+ calculations.",
    },
    {
      question: "Can this tool help reduce cloud costs?",
      answer:
        "Absolutely. The cloud cost estimator offers recommendations to optimize your infrastructure, avoid overspending, and make cost-effective decisions.",
    },
    {
      question: "Is the tool suitable for all types of cloud services?",
      answer:
        "Yes. Whether you’re estimating compute, storage, networking, or full infrastructure costs, our tool provides detailed and accurate cost analysis.",
    },
  ],
};
const saasProfitabilityCalculatorFaqData = {
  description:
    "Get answers to common questions about SaaS profitability calculations",
  queAns: [
    {
      question: "What is a good LTV:CAC ratio for SaaS companies?",
      answer:
        "A healthy LTV:CAC ratio is typically 3:1 or higher. This means your customer lifetime value should be at least 3 times your customer acquisition cost. Ratios above 5:1 are considered excellent.",
    },
    {
      question: "How do I calculate my SaaS churn rate?",
      answer:
        "Monthly churn rate = (Customers lost during month / Customers at start of month) × 100. For annual churn, use the same formula with annual data. A good monthly churn rate is typically below 5% for B2B SaaS.",
    },
    {
      question: "What's considered a good profit margin for SaaS?",
      answer:
        "Mature SaaS companies typically aim for 20-30% profit margins. Early-stage companies may have lower margins as they invest in growth. Anything above 20% is considered healthy for established SaaS businesses.",
    },
    {
      question: "How accurate are these calculations?",
      answer:
        "Our calculator uses industry-standard formulas and benchmarks. However, results should be used as estimates and starting points for deeper financial analysis. Always consult with financial professionals for critical business decisions.",
    },
    {
      question: "Can I use this for different SaaS business models?",
      answer:
        "Yes! The calculator works for B2B SaaS, B2C SaaS, freemium models, and various pricing structures. Just adjust the inputs to match your specific business model and customer segments.",
    },
  ],
};
const customerAcquisitionCostEstimatorFaqData = {
  description:
    "Get answers to common questions about Customer Acquisition Cost calculations",
  queAns: [
    {
      question: "What is Customer Acquisition Cost (CAC)?",
      answer:
        "Customer Acquisition Cost (CAC) is the total cost of acquiring a new customer, including all marketing and sales expenses. It's calculated by dividing your total acquisition costs by the number of new customers gained in a specific period.",
    },
    {
      question: "How accurate is the CAC calculator?",
      answer:
        "Our calculator provides highly accurate estimates based on your input data and industry benchmarks. The keyword-based adjustments help refine calculations based on your specific marketing channels and strategies.",
    },
    {
      question: "What marketing costs should I include in CAC calculation?",
      answer:
        "Include all marketing and sales costs: advertising spend, content creation, marketing tools and software, sales team salaries, marketing team salaries, and any other costs directly related to customer acquisition.",
    },
    {
      question: "How does the keyword-based estimation work?",
      answer:
        'Our system analyzes keywords in your marketing description to apply industry-specific multipliers. For example, "paid advertising" has a higher cost multiplier than "SEO" based on typical channel costs.',
    },
    {
      question: "What is a good CAC for my industry?",
      answer:
        "Good CAC varies by industry. Generally, your CAC should be significantly lower than your Customer Lifetime Value (CLV). A healthy CAC:CLV ratio is typically 1:3 or better, meaning your CLV should be at least 3x your CAC.",
    },
    {
      question: "How often should I calculate CAC?",
      answer:
        "Calculate CAC monthly or quarterly to track trends and optimization efforts. More frequent calculations help you quickly identify and address issues with your acquisition strategies.",
    },
    {
      question: "Can I calculate CAC for different customer segments?",
      answer:
        "Yes! You should calculate CAC for different segments, channels, and time periods. This helps identify your most cost-effective acquisition methods and customer types.",
    },
    {
      question: "What if my CAC is higher than the industry benchmark?",
      answer:
        "A higher CAC isn't always bad if your customers have high lifetime value. Focus on optimizing your highest-cost channels, improving conversion rates, and ensuring your CAC:CLV ratio remains healthy.",
    },
  ],
};
const calculateCustomerLifetimeFaqData = {
  description:
    "Get answers to common questions about customer lifetime value and how to use our calculator effectively.",
  queAns: [
    {
      question: "What is Customer Lifetime Value (LTV)?",
      answer:
        "Customer Lifetime Value (LTV) is the total amount of money a customer is expected to spend on your business during their entire relationship with your company. It's a crucial metric that helps businesses understand the long-term value of acquiring and retaining customers.",
    },
    {
      question: "How is LTV calculated?",
      answer:
        "The basic LTV formula is: LTV = (Average Order Value × Purchase Frequency × Customer Lifespan). However, more sophisticated calculations may include factors like retention rates, discount rates, and acquisition costs to provide a more accurate picture.",
    },
    {
      question: "Why is LTV important for my business?",
      answer:
        "LTV helps you determine how much you can spend on customer acquisition, identify your most valuable customer segments, optimize marketing campaigns, improve customer retention strategies, and make informed decisions about product development and pricing.",
    },
    {
      question: "What's a good LTV to CAC ratio?",
      answer:
        "A healthy LTV to Customer Acquisition Cost (CAC) ratio is typically 3:1 or higher. This means your customer lifetime value should be at least three times your acquisition cost. Ratios below 3:1 may indicate inefficient spending, while ratios above 5:1 might suggest missed growth opportunities.",
    },
    {
      question: "How often should I calculate LTV?",
      answer:
        "You should calculate LTV regularly, typically monthly or quarterly, depending on your business cycle. Regular monitoring helps you track trends, measure the impact of retention initiatives, and adjust your customer acquisition strategies accordingly.",
    },
  ],
};
const automationSavingEstimatorFaqData = {
  description:
    "Get answers to common questions about automation savings and implementation strategies.",
  queAns: [
    {
      question: "What is automation savings estimation?",
      answer:
        "Automation savings estimation calculates the potential cost savings and ROI from implementing automated processes in your business. It considers factors like labor costs, time savings, implementation costs, and efficiency gains to provide a comprehensive financial analysis.",
    },
    {
      question: "How accurate are these estimates?",
      answer:
        "Our estimates are based on industry standards and proven methodologies. However, actual results may vary depending on specific implementation details, employee adoption rates, and unforeseen challenges. We recommend using these estimates as a starting point for your automation planning.",
    },
    {
      question: "What types of tasks are best for automation?",
      answer:
        "Tasks that are repetitive, rule-based, high-volume, and time-consuming are ideal for automation. Examples include data entry, report generation, email responses, invoice processing, and customer onboarding workflows.",
    },
    {
      question: "How long does it typically take to see ROI?",
      answer:
        "Most automation projects see positive ROI within 6-18 months, depending on the complexity and scale of implementation. Simple process automations can show returns in as little as 3 months, while complex enterprise solutions may take 12-24 months.",
    },
    {
      question: "What should I consider beyond cost savings?",
      answer:
        "While cost savings are important, also consider improved accuracy, reduced errors, better compliance, enhanced employee satisfaction, scalability benefits, and the ability to reallocate human resources to higher-value activities.",
    },
  ],
};
const mvpFeatureSelectorQuizFaqData = {
  description:
    "Get answers to common questions about customer lifetime value and how to use our calculator effectively.",
  queAns: [
    {
      question: "What is automation savings estimation?",
      answer:
        "Automation savings estimation calculates the potential cost savings and ROI from implementing automated processes in your business. It considers factors like labor costs, time savings, implementation costs, and efficiency gains to provide a comprehensive financial analysis.",
    },
    {
      question: "How accurate are these estimates?",
      answer:
        "Our estimates are based on industry standards and proven methodologies. However, actual results may vary depending on specific implementation details, employee adoption rates, and unforeseen challenges. We recommend using these estimates as a starting point for your automation planning.",
    },
    {
      question: "What types of tasks are best for automation?",
      answer:
        "Tasks that are repetitive, rule-based, high-volume, and time-consuming are ideal for automation. Examples include data entry, report generation, email responses, invoice processing, and customer onboarding workflows.",
    },
    {
      question: "How long does it typically take to see ROI?",
      answer:
        "Most automation projects see positive ROI within 6-18 months, depending on the complexity and scale of implementation. Simple process automations can show returns in as little as 3 months, while complex enterprise solutions may take 12-24 months.",
    },
    {
      question: "What should I consider beyond cost savings?",
      answer:
        "While cost savings are important, also consider improved accuracy, reduced errors, better compliance, enhanced employee satisfaction, scalability benefits, and the ability to reallocate human resources to higher-value activities.",
    },
  ],
};

const ToolFAQs = () => {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const showDataBasedOnPathname = {
    "/tools/project-estimate/": softwareDevelopmentCostCalculatorFaqData,
    "/tools/roi-calculator/": roiCalculatorFaqData,
    "/tools/mobility-app-development-calculator/":
      appLikeUberCostCalculatorFaqData,
    "/tools/saas-development-cost-calculator/": SaasDevCostCalculatorFaqData,
    "/tools/mvp-development-cost-calculator/": mvpDevCostCalculatorFaqData,
    "/tools/app-maintenance-cost-estimator/":
      appMaintenanceCostEstimatorFaqData,
    "/tools/app-development-timeline-calculator/":
      appDevTimelineCalculatorFaqData,
    "/tools/mvp-launch-timeline-estimator/": mvpDevTimelineEstimatorFaqData,
    "/tools/feature-complexity-vs-time-estimator/":
      featureComplexityVsTimelineEstimatorFaqData,
    "/tools/testing-qa-timeline-estimator/": testingQATimelineEstimatorFaqData,
    "/tools/go-to-market-timeline-planner/": goToMarketPlacePlannerFaqData,
    "/tools/tech-stack-recommender/": techStackRecommenderFaqData,
    "/tools/database-selector-tool/": databaseSelectorToolFaqData,
    "/tools/cross-platform-vs-native-analyzer/":
      crossPlatformVsNativeAnalyzerFaqData,
    "/tools/api-integration-feasibility-checker/":
      apiIntegrationFeasibiltyCheckerFaqData,
    "/tools/cloud-service-cost-estimator/": cloudServiceCostEstimatorFaqData,
    "/tools/saas-profitability-calculator/": saasProfitabilityCalculatorFaqData,
    "/tools/customer-acquisition-cost-estimator/":
      customerAcquisitionCostEstimatorFaqData,
    "/tools/lifetime-value-calculator/": calculateCustomerLifetimeFaqData,
    "/tools/automation-saving-estimator/": automationSavingEstimatorFaqData,
    "/tools/mvp-feature-selector-quiz/": mvpFeatureSelectorQuizFaqData,
  };

  const toolsFAQData = showDataBasedOnPathname[pathname] || {};

  return (
    <section id="faq">
      <div className="max-w-6xl mx-auto main-section-padding">
        <div className="text-center space-y-4 mb-8">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl !font-bold mb-4"
            text="Frequently Asked Questions"
          />
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {toolsFAQData?.description}
          </p>
        </div>

        <div className="space-y-4">
          {toolsFAQData?.queAns?.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-themeColor transition-colors duration-200"
            >
              <button
                className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <Minus className="w-5 h-5 text-themeColor" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" id="CTA">
          <div className="bg-blue-50 rounded-2xl pt-8 px-4 md:pb-0 pb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 !mb-6">
              Can't find the answer you're looking for? Please get in touch with
              our team.
            </p>
            <div className="w-full">
              <Cal
                calLink="vikas-singh-bril/free-consultation"
                config={{ theme: "light" }}
              />
            </div>
            {/* <Link
              href="/contact-us/"
              className="bg-themeColor hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Support
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolFAQs;
