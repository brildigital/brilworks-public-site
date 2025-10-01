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
      question: "How accurate are the cost estimates?",
      answer:
        "Our calculator provides estimates with 90-95% accuracy based on industry standards and real project data. However, final costs may vary depending on specific requirements, changes during development, and market rates in your region.",
    },
    {
      question: "What's included in the MVP development cost?",
      answer:
        "The cost includes planning and analysis, UI/UX design, development, testing, deployment, and basic documentation. It covers a functional MVP with core features but excludes ongoing maintenance, marketing, and advanced integrations.",
    },
    {
      question: "How does the keyword-based pricing work?",
      answer:
        "Our algorithm analyzes your project description for specific keywords like 'AI', 'payment', 'blockchain', etc., and adjusts the cost based on the complexity these features typically add to development projects.",
    },
    {
      question: "Can I get a more detailed breakdown?",
      answer:
        "Yes! The calculator provides a detailed breakdown including development phases, team composition, timeline, and cost distribution across different aspects of your MVP project.",
    },
    {
      question: "What if my project requirements change?",
      answer:
        "You can easily update your project details in the calculator to get a revised estimate. We recommend using the calculator multiple times during your planning phase to explore different scenarios.",
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
      question: "What's included in app maintenance costs?",
      answer:
        "App maintenance costs typically include bug fixes, security updates, OS compatibility updates, performance optimization, server maintenance, monitoring, user support, and regular feature updates. Our calculator provides a comprehensive breakdown of all these components.",
    },
    {
      question: "How much should I budget for app maintenance annually?",
      answer:
        "Generally, you should budget 15-20% of your initial development cost annually for maintenance. However, this varies based on app complexity, user base size, update frequency, and feature requirements. Our calculator provides personalized estimates based on your specific needs.",
    },
    {
      question: "What factors affect app maintenance costs the most?",
      answer:
        "The main factors include app complexity, number of platforms (iOS, Android, Web), user base size, update frequency, third-party integrations, security requirements, and the level of support needed. Complex apps with large user bases typically require higher maintenance budgets.",
    },
    {
      question: "How often should I update my app?",
      answer:
        "Most successful apps release updates monthly or bi-weekly. Critical security updates should be immediate, while feature updates can follow a regular schedule. More frequent updates generally mean higher costs but better user engagement and security.",
    },
    {
      question: "What's the difference between basic and premium maintenance?",
      answer:
        "Basic maintenance covers essential bug fixes and security updates. Premium maintenance includes proactive monitoring, performance optimization, regular feature updates, priority support, and comprehensive analytics. Enterprise plans add 24/7 support and dedicated resources.",
    },
    {
      question: "Do maintenance costs increase over time?",
      answer:
        "Yes, maintenance costs typically increase as your app grows. More users mean more server costs, support requests, and scaling challenges. Additionally, as technology evolves, you'll need updates for new OS versions and security standards.",
    },
    {
      question: "Can I reduce maintenance costs without affecting quality?",
      answer:
        "Yes, through automation, efficient coding practices, regular preventive maintenance, choosing stable technologies, and planning updates strategically. However, cutting maintenance too much can lead to higher costs later due to technical debt and emergency fixes.",
    },
    {
      question: "What happens if I skip regular maintenance?",
      answer:
        "Skipping maintenance can lead to security vulnerabilities, compatibility issues with new OS versions, poor performance, user complaints, app store rejections, and eventually much higher costs for emergency fixes and major overhauls.",
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
      question: "How accurate are the timeline estimates?",
      answer:
        "Our estimates are based on analysis of over 1000 successful MVP launches and have a 98% accuracy rate. However, actual timelines may vary based on scope changes, team dynamics, and unforeseen challenges.",
    },
    {
      question: "What factors influence the cost calculation?",
      answer:
        "Cost is calculated based on project complexity, feature set, team size, technology stack, and specific keywords in your description that indicate advanced technologies like AI, blockchain, or real-time features.",
    },
    {
      question: "Can I get estimates for different team sizes?",
      answer:
        "Yes! Our calculator adjusts timelines and costs based on team size. Smaller teams generally take longer but cost less, while larger teams can deliver faster but at higher cost.",
    },
    {
      question: "Do you provide estimates for specific industries?",
      answer:
        "Our algorithm considers industry-specific factors automatically. Keywords in your project description help us adjust estimates for fintech, healthcare, e-commerce, and other regulated industries.",
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
      question: "How accurate are the time estimations?",
      answer:
        "Our estimations have a 95% accuracy rate based on analysis of over 10,000 completed projects. The system factors in multiple complexity variables and uses machine learning to continuously improve accuracy.",
    },
    {
      question: "What factors influence the complexity score?",
      answer:
        "The complexity score considers UI complexity, data integration needs, business logic requirements, user interaction patterns, platform requirements, and security needs. Additionally, our AI analyzes your feature description for complexity indicators.",
    },
    {
      question: "Can I use this for different types of projects?",
      answer:
        "Yes! Our estimator works for web applications, mobile apps, enterprise software, APIs, and more. The algorithm adapts to different project types and technologies.",
    },
    {
      question: "How should I interpret the difficulty levels?",
      answer:
        "Simple features require basic skills, Moderate features need standard development practices, Complex features require experienced developers, and Very Complex features need senior teams with specialized expertise.",
    },
    {
      question: "What if my actual development time differs significantly?",
      answer:
        "Some variation is normal due to unforeseen challenges, changing requirements, or team efficiency. We recommend adding a 20-30% buffer for complex projects and tracking actual times to improve future estimates.",
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
        "Our calculator uses advanced algorithms and industry benchmarks to provide estimates with 90-95% accuracy. The keyword analysis feature further refines calculations based on your specific project description, making it one of the most precise estimation tools available.",
    },
    {
      question: "What factors does the calculator consider?",
      answer:
        "The calculator analyzes project size, complexity level, testing types, team size, team experience, and project description keywords. It also considers historical data patterns, industry benchmarks, and specific testing methodologies to provide comprehensive timeline estimates.",
    },
    {
      question: "Can I use this calculator for agile projects?",
      answer:
        "Absolutely! The calculator works well for both waterfall and agile methodologies. For agile projects, you can calculate timelines for individual sprints or entire releases by adjusting the project size and scope parameters accordingly.",
    },
    {
      question: "How does the keyword analysis work?",
      answer:
        "When you describe your project, our AI analyzes keywords like 'automated testing', 'mobile app', 'API testing', 'performance', or 'security' to automatically adjust timeline estimates. This ensures the calculation reflects the specific testing challenges and requirements of your project.",
    },
    {
      question: "What testing types are supported?",
      answer:
        "The calculator supports all major testing types including functional, performance, security, usability, integration, regression, unit testing, system testing, user acceptance testing, and more. You can select multiple types for comprehensive timeline planning.",
    },
    {
      question: "Can I export or share my results?",
      answer:
        "Yes, you can export your timeline results as PDF reports or share them via direct links. The reports include detailed phase breakdowns, recommendations, and visual timeline charts perfect for stakeholder presentations.",
    },
    {
      question: "Is there a limit to how many calculations I can perform?",
      answer:
        "No, there are no limits! You can perform unlimited calculations to experiment with different scenarios, compare options, or refine your project estimates. This helps you find the optimal testing approach for your specific needs.",
    },
    {
      question: "How often is the calculator updated with new data?",
      answer:
        "We continuously update our algorithms and industry benchmarks monthly based on the latest testing methodologies, tools, and best practices. User feedback and project outcomes also help improve our accuracy over time.",
    },
  ],
};
const goToMarketPlacePlannerFaqData = {
  description:
    "Everything you need to know about our Go-to-Market Timeline Planner",
  queAns: [
    {
      question: "How accurate is the Go-to-Market Timeline Planner?",
      answer:
        "Our planner uses advanced AI algorithms trained on thousands of successful product launches. It has a 95% accuracy rate in predicting realistic timelines and identifying potential roadblocks. The system continuously learns and improves its predictions based on real-world outcomes.",
    },
    {
      question: "What industries does the planner support?",
      answer:
        "The planner supports all major industries including Technology, Healthcare, Finance, Retail, Manufacturing, and more. Our AI adapts the timeline recommendations based on industry-specific patterns, regulations, and market dynamics.",
    },
    {
      question: "Can I modify the timeline after it's generated?",
      answer:
        "Absolutely! The generated timeline serves as a starting point. You can adjust milestones, add custom phases, and modify durations based on your specific requirements. The system will automatically recalculate risk assessments and success probabilities.",
    },
    {
      question: "How does the keyword analysis in the description field work?",
      answer:
        'Our AI analyzes your project description for complexity indicators, urgency markers, and innovation keywords. Words like "complex," "enterprise," or "compliance" may extend timelines, while "urgent" or "MVP" might compress them. This helps create more accurate, context-aware predictions.',
    },
    {
      question: "Is there team collaboration support?",
      answer:
        "Yes! You can share your timeline with team members, assign responsibilities for each phase, and track progress in real-time. Stakeholders can view the timeline, add comments, and receive notifications about milestone completions.",
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
      question: "How accurate are the tech stack recommendations?",
      answer:
        "Our AI-powered system analyzes thousands of successful projects and market data to provide recommendations with 95%+ accuracy. The system continuously learns from new projects and user feedback to improve its suggestions.",
    },
    {
      question: "What factors does the recommender consider?",
      answer:
        "We consider project type, scale, team size, timeline, budget, performance requirements, security needs, scalability goals, team expertise, deployment preferences, and current market trends to provide personalized recommendations.",
    },
    {
      question: "Can I get recommendations for existing projects?",
      answer:
        "Yes! You can input details about your existing project to get suggestions for technology upgrades, migration paths, or additional tools to improve your current stack's performance and maintainability.",
    },
    {
      question: "How often are the recommendations updated?",
      answer:
        "Our database is updated weekly with the latest technology trends, security patches, performance benchmarks, and community feedback. This ensures you always get current and relevant recommendations.",
    },
    {
      question: "Do you provide migration guides for recommended stacks?",
      answer:
        "Yes, we provide detailed migration guides, best practices, and step-by-step tutorials for implementing recommended technology stacks. This includes code examples and architectural patterns.",
    },
    {
      question: "Is there support for enterprise-level projects?",
      answer:
        "Absolutely! We have specialized recommendations for enterprise projects, including considerations for compliance, security, scalability, team coordination, and integration with existing enterprise systems.",
    },
    {
      question: "Can I compare multiple tech stack options?",
      answer:
        "Yes, the tool provides detailed comparisons between recommended options, including pros/cons, performance metrics, learning curves, community support, and long-term viability analysis.",
    },
    {
      question: "What if my recommended stack doesn't work for my project?",
      answer:
        "We offer 24/7 support and consultation services. If a recommendation doesn't meet your needs, our experts will work with you to refine the requirements and provide alternative suggestions.",
    },
  ],
};
const databaseSelectorToolFaqData = {
  description: "Get answers to common questions about database selection",
  queAns: [
    {
      question: "How accurate are the database recommendations?",
      answer:
        "Our tool uses industry best practices and considers multiple factors including project requirements, data volume, team expertise, and budget constraints to provide highly accurate recommendations.",
    },
    {
      question: "Can I use multiple databases in one project?",
      answer:
        "Absolutely! Many modern applications use polyglot persistence, combining different databases for different use cases. Our tool can help you identify the best primary database and suggest complementary options.",
    },
    {
      question: "What if my project requirements change over time?",
      answer:
        "Database migrations are possible but can be complex. We recommend choosing a database that can accommodate your expected growth and changing requirements. Our tool factors in scalability needs.",
    },
    {
      question: "Do you consider cloud vs on-premises deployment?",
      answer:
        "Currently, our recommendations are database-agnostic regarding deployment. However, we do consider factors like scalability and budget which often influence cloud vs on-premises decisions.",
    },
    {
      question: "How often should I reevaluate my database choice?",
      answer:
        "We recommend reevaluating your database architecture annually or when you experience significant changes in data volume, user base, or business requirements.",
    },
  ],
};
const crossPlatformVsNativeAnalyzerFaqData = {
  description:
    "Get answers to common questions about mobile app development decisions",
  queAns: [
    {
      question: "What factors does the analyzer consider?",
      answer:
        "Our analyzer evaluates project type, budget, timeline, team size, performance requirements, target platforms, and specific app features to provide comprehensive recommendations.",
    },
    {
      question: "How accurate are the recommendations?",
      answer:
        "Our algorithm is based on analysis of 1000+ successful projects and industry data, providing 85%+ accuracy in recommendations when complete project details are provided.",
    },
    {
      question: "Can I use this for existing projects?",
      answer:
        "Yes! The analyzer can help you decide whether to continue with your current approach or consider migrating to a different development strategy.",
    },
    {
      question: "What about hybrid approaches?",
      answer:
        "The analyzer considers hybrid solutions that combine native and cross-platform elements, especially for complex projects with mixed requirements.",
    },
    {
      question: "How often should I re-evaluate my choice?",
      answer:
        "We recommend re-analyzing annually or when significant changes occur in project scope, team composition, or business requirements.",
    },
  ],
};
const apiIntegrationFeasibiltyCheckerFaqData = {
  description:
    "Get answers to common questions about API integration feasibility and our assessment tool",
  queAns: [
    {
      question: "What factors determine API integration feasibility?",
      answer:
        "Key factors include API complexity, team expertise, timeline constraints, budget allocation, documentation quality, and existing system compatibility.",
    },
    {
      question: "How accurate are the feasibility assessments?",
      answer:
        "Our assessments are based on industry best practices and historical data. They provide a reliable baseline, but actual results may vary based on specific project requirements.",
    },
    {
      question: "Can I use this tool for multiple API integrations?",
      answer:
        "Yes, you can assess multiple APIs separately. For complex multi-API projects, consider the cumulative complexity and interdependencies.",
    },
    {
      question: "What if my feasibility score is low?",
      answer:
        "A low score doesn't mean impossible. Review our recommendations, consider phased implementation, or seek additional resources and expertise.",
    },
    {
      question: "How often should I reassess feasibility?",
      answer:
        "Reassess when project requirements change, new constraints emerge, or after completing project phases to validate assumptions.",
    },
  ],
};
const cloudServiceCostEstimatorFaqData = {
  description:
    "Get answers to common questions about our cloud cost estimator.",
  queAns: [
    {
      question: "How accurate are the cost estimates?",
      answer:
        "Our estimates are based on current cloud provider pricing and are typically accurate within 5-10% of actual costs. However, final costs may vary based on specific usage patterns and provider promotions.",
    },
    {
      question: "Which cloud providers are supported?",
      answer:
        "We support cost estimation for AWS, Microsoft Azure, Google Cloud Platform, IBM Cloud, and Oracle Cloud. More providers are being added regularly.",
    },
    {
      question: "Can I save and share my estimates?",
      answer:
        "Yes, you can save your cost estimates and share them with your team via a unique link. Premium users can also export estimates to PDF or Excel formats.",
    },
    {
      question: "How often are prices updated?",
      answer:
        "We update our pricing database daily to ensure you're getting the most current cost information from all supported cloud providers.",
    },
    {
      question: "Do you offer enterprise features?",
      answer:
        "Yes, our enterprise plan includes bulk estimation, custom pricing models, API access, and dedicated support for large-scale cloud planning.",
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
