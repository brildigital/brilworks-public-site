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
      answer: "A ratio above 3:1 is considered healthy and sustainable.",
    },
    {
      question: "How do I calculate churn rate?",
      answer:
        "Divide the number of customers lost by the total number at the start of the month.",
    },
    {
      question: "What’s a good profit margin for SaaS?",
      answer:
        "Margins above 70% are strong, but it depends on your business model.",
    },
    {
      question: "How accurate are these calculations?",
      answer:
        "Our calculator uses industry-standard formulas and benchmarks. However, results should be used as estimates and starting points for deeper financial analysis. Always consult with financial professionals for critical business decisions.",
    },
    {
      question: "Can I use this for different SaaS models?",
      answer:
        "Yes. this calculator supports B2B, B2C, freemium, and enterprise SaaS.",
    },
  ],
};
const customerAcquisitionCostEstimatorFaqData = {
  description:
    "Get answers to common questions about Customer Acquisition Cost calculations",
  queAns: [
    {
      question: "What is a customer acquisition cost calculator?",
      answer:
        "It’s a tool that helps you estimate how much you spend to acquire each new customer.",
    },
    {
      question: "How accurate is the customer acquisition cost calculator? ",
      answer:
        "Our calculator delivers up to 95% accuracy based on your input data and industry benchmarks.",
    },
    {
      question: "What marketing costs should I include? ",
      answer:
        "Include all advertising, content, staff, and tool costs relevant to your acquisition efforts.",
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
      question: "Can I calculate CAC for different customer segments? ",
      answer:
        "Yes, our customer acquisition cost calculator supports segmentation by demographics and channels.",
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
      question:
        "How can I use a customer lifetime value calculator for SaaS businesses?",
      answer:
        "Our SaaS LTV calculator helps you estimate customer value over time. By factoring in churn rate, retention, and CAC, you can use our ltv to cac ratio calculator to make smarter decisions and improve profitability.",
    },
    {
      question: "What’s the best way to estimate LTV for mobile apps?",
      answer:
        "Use our ltv calculator for app to input user behavior metrics, retention rates, and monetization models. It’s ideal for freemium, subscription, and ad-based apps.",
    },
    {
      question: "Why is LTV important for growth strategy?",
      answer:
        "Knowing your LTV helps you allocate marketing budgets efficiently, improve customer retention, and scale profitably.",
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
      question: "What is an MVP Feature Selector Quiz?",
      answer:
        "An MVP Feature Selector Quiz is a tool that helps entrepreneurs and product managers identify the most essential features for their Minimum Viable Product. It analyzes your project description, budget, timeline, and goals to recommend which features should be included in your initial launch.",
    },
    {
      question: "How accurate are the feature recommendations?",
      answer:
        "Our recommendations are based on proven MVP principles and keyword analysis of successful products. While the suggestions provide excellent starting points, they should be validated with your target users and adapted to your specific market conditions.",
    },
    {
      question: "Can I use this for any type of product?",
      answer:
        "Yes! The MVP Feature Selector works for web applications, mobile apps, SaaS products, e-commerce platforms, and many other digital products. The recommendations adapt based on the keywords and requirements you provide.",
    },
    {
      question: "How should I use the priority scores?",
      answer:
        "Priority scores help you rank features by importance. High-priority features (70%+) should be included in your MVP, medium priority (40-69%) can be considered for phase 2, and low priority features should be saved for future iterations.",
    },
    {
      question: "What if I disagree with the recommendations?",
      answer:
        "The quiz provides data-driven suggestions, but you know your market best. Use the recommendations as a starting point and adjust based on your specific user research, competitive analysis, and business requirements.",
    },
  ],
};

const whichAppShouldYouBuildFaqData = {
  description:
    "Get answers to common questions about customer lifetime value and how to use our calculator effectively.",
  queAns: [
    {
      question: "How does the app recommendation system work?",
      answer:
        "Our system analyzes your project description using keyword detection and machine learning to identify the most suitable app type and platform. It considers factors like target audience, functionality requirements, budget, and timeline to provide personalized recommendations.",
    },
    {
      question: "Should I build a mobile app or web app?",
      answer:
        "The choice depends on your target audience and use case. Mobile apps are better for consumer-focused, location-based, or media-rich applications. Web apps work well for business tools, complex interfaces, and when you need broad accessibility across devices.",
    },
    {
      question:
        "What's the difference between native and cross-platform development?",
      answer:
        "Native apps are built specifically for one platform (iOS or Android) offering best performance and platform-specific features. Cross-platform apps use frameworks like React Native or Flutter to work on multiple platforms with shared code, reducing development time and cost.",
    },
    {
      question: "How accurate are the market potential scores?",
      answer:
        "Market potential scores are based on keyword analysis, industry trends, and historical data. While they provide valuable insights, they should be combined with your own market research and validation with potential users for the most accurate assessment.",
    },
    {
      question: "Can I change my app type after getting recommendations?",
      answer:
        "Absolutely! Our recommendations are starting points based on your current description. As you refine your idea or gather user feedback, you may discover that a different app type or platform better suits your needs.",
    },
  ],
};
const startupTechReadinessQuizFaqData = {
  description:
    "Get answers to common questions about startup tech readiness and how to improve your assessment score.",
  queAns: [
    {
      question: "What is a Startup Tech Readiness Quiz?",
      answer:
        "A Startup Tech Readiness Quiz is a comprehensive assessment tool that evaluates your startup's technological preparedness across multiple dimensions including team capabilities, infrastructure, budget allocation, and strategic planning. It provides actionable insights to help you make informed technology decisions.",
    },
    {
      question: "How accurate is this assessment?",
      answer:
        "Our assessment is based on industry best practices and data from thousands of successful startups. While results provide valuable insights, they should be used as guidance alongside professional consultation. The accuracy improves with more detailed and honest responses to all questions.",
    },
    {
      question: "What should I do with my readiness score?",
      answer:
        "Use your score to identify strengths and weaknesses in your tech strategy. Scores above 80 indicate strong readiness, 60-80 suggests good foundation with room for improvement, and below 60 indicates areas needing immediate attention before scaling.",
    },
    {
      question: "How often should I retake this quiz?",
      answer:
        "We recommend retaking the quiz quarterly during early stages and bi-annually as you mature. Technology needs evolve rapidly in startups, and regular assessment helps ensure your tech strategy aligns with business growth and market changes.",
    },
    {
      question: "Can this quiz help with investor presentations?",
      answer:
        "Absolutely! A high tech readiness score demonstrates to investors that you have a solid technical foundation and strategic approach. The detailed breakdown can be valuable supporting material for funding discussions and due diligence processes.",
    },
  ],
};
const digitalTransformationReadinessCheckerFaqData = {
  description:
    "Get answers to common questions about digital transformation readiness and how to improve your assessment score.",
  queAns: [
    {
      question: "What is Digital Transformation Readiness?",
      answer:
        "Digital Transformation Readiness measures an organization's preparedness to successfully implement digital technologies and processes. It evaluates factors like leadership commitment, employee skills, technology infrastructure, data maturity, and cultural readiness to ensure successful transformation initiatives.",
    },
    {
      question: "Why is assessing readiness important before transformation?",
      answer:
        "Assessing readiness helps identify gaps and risks before investing in transformation initiatives. Organizations with higher readiness scores are 5x more likely to achieve their digital transformation goals and see faster ROI. It prevents costly mistakes and ensures strategic alignment.",
    },
    {
      question: "What score indicates good transformation readiness?",
      answer:
        "Scores above 75 indicate strong readiness for digital transformation. Scores between 60-75 suggest good foundation with some areas needing improvement. Scores below 60 indicate significant preparation is needed before major transformation initiatives.",
    },
    {
      question: "How often should we reassess our readiness?",
      answer:
        "We recommend quarterly assessments during active transformation periods and bi-annual reviews for ongoing digital maturity monitoring. Technology and market conditions change rapidly, so regular assessment ensures your transformation strategy remains aligned and effective.",
    },
    {
      question: "What are the most critical readiness factors?",
      answer:
        "Leadership support and employee skills are the most critical factors, followed by data maturity and technology infrastructure. Cultural readiness and change management capabilities are equally important for sustainable transformation success.",
    },
  ],
};
const saasBusinessModelGeneratorFaqdata = {
  description:
    "Everything you need to know about the SaaS Business Model Generator",
  queAns: [
    {
      question: "How accurate are the business model recommendations?",
      answer:
        "Our generator uses proven frameworks and market data to provide recommendations. The accuracy depends on the quality of information you provide. We analyze successful SaaS businesses in your industry to suggest optimal pricing and strategies.",
    },
    {
      question: "Can I save my generated business models?",
      answer:
        "Yes! All generated models are automatically saved to your account. You can access them anytime, compare different iterations, and refine your strategy as your business evolves.",
    },
    {
      question: "What industries does this work for?",
      answer:
        "The generator works for all industries including Marketing, Healthcare, Education, Finance, E-commerce, and more. Our algorithm adapts to your specific market and provides tailored recommendations.",
    },
    {
      question: "How long does it take to generate a model?",
      answer:
        "The entire process takes less than 2 minutes. Simply fill out the form with your app details, and you'll receive a comprehensive business model instantly with pricing tiers, revenue streams, and growth strategies.",
    },
    {
      question: "Can I modify the generated business model?",
      answer:
        "Absolutely! The generated model serves as a strong foundation. You can customize pricing, adjust target markets, and modify strategies based on your specific needs and market feedback.",
    },
    {
      question: "Is this suitable for non-SaaS businesses?",
      answer:
        "While optimized for SaaS businesses, the principles and strategies apply to many digital products. The pricing models, growth strategies, and revenue streams can be adapted for mobile apps, platforms, and digital services.",
    },
  ],
};
const codeQualityAnalyzerFaqdata = {
  description: "Everything you need to know about Code Quality Analyzer",
  queAns: [
    {
      question: "What programming languages are supported?",
      answer:
        "The Lite version supports all major programming languages including JavaScript, TypeScript, Python, Java, C#, Go, Ruby, and PHP. The analyzer uses language-agnostic patterns to detect common issues across different languages.",
    },
    {
      question: "How accurate is the code analysis?",
      answer:
        "Our analyzer uses industry-standard patterns and best practices to evaluate code quality. While no automated tool is perfect, our analysis provides 99% accurate detection of common issues, code smells, and security vulnerabilities.",
    },
    {
      question: "Can I analyze entire projects?",
      answer:
        "The Lite version is designed for code snippets and individual files up to 500 lines. For full project analysis with multiple files, continuous integration support, and team features, consider upgrading to our Pro version.",
    },
    {
      question: "Is my code stored or shared?",
      answer:
        "Your privacy is our priority. Code submissions are analyzed in real-time and not permanently stored on our servers. Analysis results are saved to your account for 30 days, but the actual code is never retained.",
    },
    {
      question: "What types of issues does it detect?",
      answer:
        "The analyzer detects bugs, security vulnerabilities, code smells, performance issues, maintainability problems, missing error handling, lack of documentation, excessive complexity, and violations of best practices.",
    },
    {
      question: "How do I improve my code quality score?",
      answer:
        "Follow the recommendations in the improvements section. Focus on adding error handling, writing tests, documenting your code, reducing complexity, and following language-specific best practices. Each improvement will increase your score.",
    },
    {
      question: "Can I use this for code reviews?",
      answer:
        "Absolutely! Many teams use our analyzer as part of their code review process. It helps identify issues before human review, allowing reviewers to focus on architecture and business logic rather than basic code quality.",
    },
    {
      question: "What do the quality metrics mean?",
      answer:
        "Maintainability measures how easy your code is to modify. Reliability indicates how robust and error-free it is. Security shows potential vulnerabilities. Performance indicates efficiency and optimization level.",
    },
  ],
};
const saasScalabilityReadinessCheckerFaqdata = {
  description: "Everything you need to know about scalability readiness",
  queAns: [
    {
      question: "What is SaaS scalability readiness?",
      answer:
        "SaaS scalability readiness refers to your system's ability to handle increased load, user growth, and data volume without degrading performance. It encompasses infrastructure, architecture, monitoring, and operational practices that enable smooth scaling.",
    },
    {
      question: "How accurate is the readiness score?",
      answer:
        "Our algorithm analyzes multiple factors including infrastructure patterns, performance metrics, and best practices used by thousands of successful SaaS companies. While the score provides valuable insights, we recommend using it as a starting point for deeper infrastructure assessment.",
    },
    {
      question: "What score should I aim for?",
      answer:
        "A score above 80 indicates excellent scalability readiness. Scores between 60-80 show good preparation with room for improvement. Scores below 60 suggest significant architectural or infrastructure improvements are needed before scaling.",
    },
    {
      question: "How do keywords in the description affect my score?",
      answer:
        'Keywords help our algorithm understand your architecture patterns and practices. Terms like "distributed," "auto-scaling," "monitoring," and "cloud-native" indicate mature infrastructure, while terms like "monolith," "single server," or "manual" may indicate scalability challenges.',
    },
    {
      question: "Can I improve my score after the assessment?",
      answer:
        "Absolutely! The recommendations provided are actionable steps you can take to improve your infrastructure. After implementing improvements, you can reassess to track your progress and get updated recommendations.",
    },
    {
      question: "Do I need to implement all recommendations?",
      answer:
        "Not necessarily. Prioritize recommendations based on your current growth stage, budget, and business goals. Start with critical infrastructure issues and gradually implement other improvements as you scale.",
    },
  ],
};

const legacySystemModernizationReadinessFaqdata = {
  description: "Common questions about legacy system modernization",
  queAns: [
    {
      question: "What is legacy system modernization?",
      answer:
        "Legacy system modernization is the process of updating outdated technology infrastructure, applications, and platforms to modern standards. This includes upgrading programming languages, frameworks, databases, and architectures to improve performance, security, maintainability, and scalability while reducing technical debt and operational costs.",
    },
    {
      question: "How do I know if my system needs modernization?",
      answer:
        "Key indicators include: system age over 5-7 years, high maintenance costs, frequent downtime, difficulty finding developers for old technologies, security vulnerabilities, poor performance, lack of integration capabilities, and inability to meet modern business requirements. Our assessment tool evaluates these factors to determine urgency.",
    },
    {
      question: "What are the main modernization approaches?",
      answer:
        "There are several strategies: Rehost (lift-and-shift to cloud), Replatform (minor optimizations during migration), Refactor (restructure code while maintaining functionality), Rearchitect (significant changes to architecture), Rebuild (complete rewrite), and Replace (switch to commercial solutions). The best approach depends on your specific needs and constraints.",
    },
    {
      question: "How long does modernization typically take?",
      answer:
        "Timeline varies significantly based on system complexity, chosen approach, and scope. Simple rehosting might take 3-6 months, while complete rebuilds can take 18-36 months or longer. A phased approach with incremental modernization is often recommended to manage risk and deliver value progressively throughout the transformation.",
    },
    {
      question: "What is the typical ROI of modernization?",
      answer:
        "Organizations typically see 40-60% reduction in maintenance costs, 50-70% faster deployment cycles, improved system performance, enhanced security, and better scalability. While initial investment can be significant, most organizations achieve positive ROI within 2-3 years through reduced operational costs, increased efficiency, and new business capabilities.",
    },
    {
      question: "How can I minimize risks during modernization?",
      answer:
        "Key risk mitigation strategies include: thorough planning and assessment, starting with pilot projects, maintaining parallel systems during transition, implementing comprehensive testing, training teams on new technologies, maintaining detailed documentation, and having rollback plans. Engaging experienced modernization partners can also significantly reduce risks.",
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
    "/tools/which-app-should-you-build/": whichAppShouldYouBuildFaqData,
    "/tools/startup-tech-readiness-quiz/": startupTechReadinessQuizFaqData,
    "/tools/digital-transformation-readiness-checker/":
      digitalTransformationReadinessCheckerFaqData,
    "/tools/build-your-saas-business-model/": saasBusinessModelGeneratorFaqdata,
    "/tools/code-quality-analyzer/": codeQualityAnalyzerFaqdata,
    "/tools/saas-scalability-readiness-checker/":
      saasScalabilityReadinessCheckerFaqdata,
    "/tools/legacy-system-modernization-readiness/":
      legacySystemModernizationReadinessFaqdata,
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
