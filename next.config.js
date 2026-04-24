/** @type {import('next').NextConfig} */
const path = require("path");
const { NormalModuleReplacementPlugin } = require("webpack");

const nextConfig = {
  trailingSlash: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    legacyBrowsers: false,
    serverComponentsExternalPackages: ["@prisma/client", "bcrypt"],
  },
  images: {
    unoptimized: true,
    domains: [
      "a.storyblok.com",
      "lh3.googleusercontent.com",
      "cdn-icons-png.flaticon.com",
      "brilworks-website-asset.s3.ap-south-1.amazonaws.com",
      "brilworks-site-assets.s3.eu-central-1.amazonaws.com",
      "d14lhgoyljo1xt.cloudfront.net",
    ],
  },
  webpack: (config, { isServer }) => {
    // Prevent bundling native canvas.node from pdfjs-dist optional dependency
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve?.alias || {}),
      canvas: false,
    };

    // Provide safe browser fallbacks for Node core modules when needed
    if (!isServer) {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
        path: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
      };

      // Replace core-js polyfills that are natively supported by all targeted browsers
      // (Chrome 91+, Firefox 90+, Safari 15+, Edge 91+) with a no-op stub.
      // Source: @next/polyfill-module and CMS client packages ship these unnecessarily.
      const emptyPolyfill = path.resolve(__dirname, "src/empty-polyfill.js");
      config.plugins.push(
        new NormalModuleReplacementPlugin(
          /core-js\/modules\/(es\.array\.(flat|flat-map|from|find|find-index|includes|is-array|of)|es\.object\.(assign|entries|from-entries|keys|values)|es\.string\.(ends-with|includes|starts-with|trim|trim-end|trim-start|pad-end|pad-start|repeat)|es\.math\.(trunc|sign|clz32|hypot|log10|log2)|es\.number\.(is-finite|is-integer|is-nan|is-safe-integer|parse-float|parse-int)|es\.promise\.finally)(\.js)?$/,
          emptyPolyfill
        )
      );
    }

    return config;
  },
  rewrites: async () => {
    return [
      {
        source: `/agents/admission-os/`,
        destination: `/agents/admission-os/index.html`,
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: `/portfolio/ai-agent/`,
        destination: `/portfolio/ai-agents/`,
        statusCode: 301,
      },
      {
        source: `/vugo/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/accelevents/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/blockchain/`,
        destination: `/hire-blockchain-developer/`,
        statusCode: 301,
      },
      {
        source: `/services/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/studyme/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/about-brilworks/`,
        destination: `/about-us/`,
        statusCode: 301,
      },
      {
        source: `/chat-app-development/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/ui-ux-design/`,
        destination: `/hire-ui-ux-designer/`,
        statusCode: 301,
      },
      {
        source: `/mobile-app-development/`,
        destination: `/hire-react-native-developer/`,
        statusCode: 301,
      },
      {
        source: `/gps-tracking-app-development/`,
        destination: `/industry/fleet-management-software-development/`,
        statusCode: 301,
      },
      {
        source: `/email-marketing-software-development/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/video-streaming-app-development/`,
        destination: `/industry/media-entertainment-software-development/`,
        statusCode: 301,
      },
      {
        source: `/hackers-optimized-user-experience/`,
        destination: `/blog/`,
        statusCode: 301,
      },
      {
        source: `/services-paymentgateway`,
        destination: `/industry/fintech-software-development/`,
        statusCode: 301,
      },
      {
        source: `/gps-tracking/`,
        destination: `/industry/fleet-management-software-development/`,
        statusCode: 301,
      },
      {
        source: `/careers/`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/accelevents-portfolio/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/mobile-application-studyme/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/brilworks/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/vugo-portfolio/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/services-ui-ux/`,
        destination: `/hire-ui-ux-designer/`,
        statusCode: 301,
      },
      {
        source: `/service`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/service-details/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/company/`,
        destination: `/about-us/`,
        statusCode: 301,
      },
      {
        source: `/hello-world/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/services-video/`,
        destination: `/industry/media-entertainment-software-development/`,
        statusCode: 301,
      },
      {
        source: `/services-gps/`,
        destination: `/industry/fleet-management-software-development/`,
        statusCode: 301,
      },
      {
        source: `/video-technology/services-gps`,
        destination: `/industry/fleet-management-software-development/`,
        statusCode: 301,
      },
      {
        source: `/career/services-paymentgateway`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/sample-page/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/chat-application/services-gps`,
        destination: `/industry/fleet-management-software-development/`,
        statusCode: 301,
      },
      {
        source: `/accelevents-portfolio`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/brilworks/services-gps`,
        destination: `/industry/fleet-management-software-development/`,
        statusCode: 301,
      },
      {
        source: `/home-2/services-gps`,
        destination: `/industry/fleet-management-software-development/`,
        statusCode: 301,
      },
      {
        source: `/vugo-portfolio`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/service-details/company`,
        destination: `/about-us/`,
        statusCode: 301,
      },
      {
        source: `/ui-ux-services/services-ui-ux`,
        destination: `/hire-ui-ux-designer/`,
        statusCode: 301,
      },
      {
        source: `/contact-us/services-ui-ux`,
        destination: `/hire-ui-ux-designer/`,
        statusCode: 301,
      },
      {
        source: `/home-2/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/ui-ux-services/`,
        destination: `/hire-ui-ux-designer/`,
        statusCode: 301,
      },
      {
        source: `/services-gps/services-email`,
        destination: `/industry/fleet-management-software-development/`,
        statusCode: 301,
      },
      {
        source: `/services-gps/services-ui-ux`,
        destination: `/hire-ui-ux-designer/`,
        statusCode: 301,
      },
      {
        source: `/email-sms/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/accelevents-portfolio/services-email`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/project-stompai/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/project-trackimo/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/aws-cloud-consulting-services/`,
        destination: `/hire-aws-developer/`,
        statusCode: 301,
      },
      {
        source: `/payment-gateway-integration/`,
        destination: `/industry/fintech-software-development/`,
        statusCode: 301,
      },
      {
        source: `/video-technology/`,
        destination: `/industry/media-entertainment-software-development/`,
        statusCode: 301,
      },
      {
        source: `/chat-application/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/javascript-service/`,
        destination: `/hire-java-developer/`,
        statusCode: 301,
      },
      {
        source: `/java-development/`,
        destination: `/hire-java-developer/`,
        statusCode: 301,
      },
      {
        source: `/project-accelevents/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/career-2/`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/services-ui-ux/services-email`,
        destination: `/hire-ui-ux-designer/`,
        statusCode: 301,
      },
      {
        source: `/portfolio-eccocar/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/video-technology/service`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/career/service`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/services/service`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/service`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/careers/service`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/contact/service`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/ui-ux-services/service`,
        destination: `/hire-ui-ux-designer/`,
        statusCode: 301,
      },
      {
        source: `/services-email/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/contact-us/service`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/home-2/service`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/vugo-portfolio/service`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/services-chat/service`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/services-chat`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/brilworks/service`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/email-sms/service`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/services-gps/service`,
        destination: `/industry/fleet-management-software-development/`,
        statusCode: 301,
      },
      {
        source: `/services-paymentgateway/service`,
        destination: `/industry/fintech-software-development/`,
        statusCode: 301,
      },
      {
        source: `/company/service`,
        destination: `/about-us/`,
        statusCode: 301,
      },
      {
        source: `/services-email`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/accelevents-portfolio/company`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/services-ui-ux/service`,
        destination: `/hire-ui-ux-designer/`,
        statusCode: 301,
      },
      {
        source: `/chat-application/service`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/services-chat/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/gps-tracking/service`,
        destination: `/industry/fleet-management-software-development/`,
        statusCode: 301,
      },
      {
        source: `/service-details/service`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/hackers-optimized-user-experience-3/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/studyme-portfolio/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/portfolios/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/payment-gateway-development/:slug*`,
        has: [
          {
            type: "query",
            key: "utm_source",
            value: "sportsa.com",
          },
        ],
        destination: `/industry/fintech-software-development/`,
        statusCode: 301,
      },
      {
        source: `/career/company`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/career/services-video`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/services-gps/company`,
        destination: `/about-us/`,
        statusCode: 301,
      },
      {
        source: `/career/services-email`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/career/services-gps`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/company/services-gps`,
        destination: `/about-us/`,
        statusCode: 301,
      },
      {
        source: `/company/services-email`,
        destination: `/about-us/`,
        statusCode: 301,
      },
      {
        source: `/company/services-ui-ux`,
        destination: `/hire-ui-ux-designer/`,
        statusCode: 301,
      },
      {
        source: `/blog/discover-`,
        destination: `/blog/`,
        statusCode: 301,
      },
      {
        source: `/blog/best-no-code-app-builders/`,
        destination: `/blog/best-no-code-tools//`,
        statusCode: 301,
      },
      {
        source: `/blog/page/4/`,
        destination: `/blog/`,
        statusCode: 301,
      },
      {
        source: `/blog/page/2/`,
        destination: `/blog/`,
        statusCode: 301,
      },
      {
        source: `/blog/author/admin/`,
        destination: `/blog/`,
        statusCode: 301,
      },
      {
        source: `/careers/company`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/ui-ux-services/contact-us`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/contact-us/contact-us`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/brilworks/contact-us`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/blockchain/contact-us/`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/contact-us`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/services-ui-ux`,
        destination: `/hire-ui-ux-designer/`,
        statusCode: 301,
      },
      {
        source: `/brilworks/company`,
        destination: `/about-us/`,
        statusCode: 301,
      },
      {
        source: `/ui-ux-services/portfolio`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/vugo-portfolio/portfolio`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/home/portfolio/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/home/contact-us/`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/blog/page/3/`,
        destination: `/blog/`,
        statusCode: 301,
      },
      {
        source: `/payment-gateway-development/`,
        destination: `/industry/fintech-software-development/`,
        statusCode: 301,
      },
      {
        source: `/blog/category/nodejs/`,
        destination: `/blog/`,
        statusCode: 301,
      },
      {
        source: `/hackers-optimized-user-experience-2/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/blog/best-no-code-app-tools/`,
        destination: `/blog/best-no-code-tools/`,
        statusCode: 301,
      },
      {
        source: `/blog/top-10-websites-build-using-react-js/`,
        destination: `/blog/top-10-websites-built-using-react-js/`,
        statusCode: 301,
      },
      {
        source: `/services-paymentgateway/career`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/services-chat/contact-us`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/services-gps/portfolio`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/chat-application/contact-us`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/chat-application/career`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/chat-application/portfolio`,
        destination: `/portfolio/`,
        statusCode: 301,
      },

      {
        source: `/contact/`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/service-details/career`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/services-chat/career`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/services-email/career`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/services-gps/contact-us`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/brilworks/portfolio`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/unlocking-blockchain-interoperability-for-healthcare/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/home/`,
        destination: `/`,
        statusCode: 301,
      },
      {
        source: `/blog/category/java/`,
        destination: `/blog/`,
        statusCode: 301,
      },
      {
        source: `/payment-gateway-integration/company`,
        destination: `/industry/fintech-software-development/`,
        statusCode: 301,
      },
      {
        source: `/blog/guards/auth.guard`,
        destination: `/blog/`,
        statusCode: 301,
      },
      {
        source: `/blog/optimize-your-nest-js-app-performance-with-these-practices/app.controller`,
        destination: `/blog/optimize-your-nest-js-app-performance-with-these-practices/`,
        statusCode: 301,
      },
      {
        source: `/blog/optimize-your-nest-js-app-performance-with-these-practices/app.module`,
        destination: `/blog/optimize-your-nest-js-app-performance-with-these-practices/`,
        statusCode: 301,
      },
      {
        source: `/blog/optimize-your-nest-js-app-performance-with-these-practices/guards/auth.guard`,
        destination: `/blog/optimize-your-nest-js-app-performance-with-these-practices/`,
        statusCode: 301,
      },
      {
        source: `/blog/optimize-your-nest-js-app-performance-with-these-practices/users/users.module`,
        destination: `/blog/optimize-your-nest-js-app-performance-with-these-practices/`,
        statusCode: 301,
      },
      {
        source: `/blog/react-native-best-practices/styles.ts`,
        destination: `/blog/react-native-best-practices/`,
        statusCode: 301,
      },
      {
        source: `/blog/users/users.module`,
        destination: `/blog/`,
        statusCode: 301,
      },
      {
        source: `/our-process/%60$%7Bprocess.env.NEXT_PUBLIC_BASE_URL%7Dour-process/`,
        destination: `/our-process/`,
        statusCode: 301,
      },
      {
        source: `/industry/media-entertainment-software-development/www.brilworks.com/industry/media-entertainment-software-development/`,
        destination: `/industry/media-entertainment-software-development/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/services-paymentgateway`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/services-video`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/services-gps`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/contact-us/portfolio`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/contact-us/services-video`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/about`,
        destination: `/about-us/`,
        statusCode: 301,
      },
      {
        source: `/career/contact-us`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/career/career`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/career/services-ui-ux`,
        destination: `/career/`,
        statusCode: 301,
      },
      {
        source: `/contact-us/services-email`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/contact-us/services-chat`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/contact-us/services-paymentgateway`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/career/services-chat`,
        destination: `/career/`,
        statusCode: 301,
      },

      {
        source: `/portfolio/career`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/services-email`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/contact-us/services-gps`,
        destination: `/contact-us/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/services-chat`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/orokii/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/trackimo/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/rastrack/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/vugo/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/eccocar/`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/portfolio/portfolio`,
        destination: `/portfolio/`,
        statusCode: 301,
      },
      {
        source: `/blog/how-geneative-ai-transforms-supply-chain-operations/`,
        destination: `/blog/how-generative-ai-transforms-supply-chain-operations/`,
        statusCode: 301,
      },
      {
        source: `/blog/optimize-your-nest-js-app-performance-with-these-practices/`,
        destination: `/blog/optimize-your-nest-js-app-performance/`,
        statusCode: 301,
      },
      {
        source: `/blog/headless-cms-explained-simplifying-content-management-for-modern-web-development/`,
        destination: `/blog/headless-cms-explained/`,
        statusCode: 301,
      },
      {
        source: `/blog/what-are-white-label-apps-and-popular-examples/`,
        destination: `/blog/white-label-apps-popular-examples/`,
        statusCode: 301,
      },
      {
        source: `/blog/fintech-trends-to-watch-in-2023/`,
        destination: `/blog/fintech-trends/`,
        statusCode: 301,
      },
      {
        source: `/blog/how-to-hire-node-js-developers/`,
        destination: `/blog/hiring-node-js-developers-models/`,
        statusCode: 301,
      },
      {
        source: `/mobility-app-development-calculator/`,
        destination: `/tools/mobility-app-development-calculator/`,
        statusCode: 301,
      },
      {
        source: `/app-maintenance-cost-estimator/`,
        destination: `/tools/app-maintenance-cost-estimator/`,
        statusCode: 301,
      },
      {
        source: `/roi-calculator/`,
        destination: `/tools/roi-calculator/`,
        statusCode: 301,
      },
      {
        source: `/mvp-launch-timeline-estimator/`,
        destination: `/tools/mvp-launch-timeline-estimator/`,
        statusCode: 301,
      },
      {
        source: `/mvp-development-cost-calculator/`,
        destination: `/tools/mvp-development-cost-calculator/`,
        statusCode: 301,
      },
      {
        source: `/feature-complexity-vs-time-estimator/`,
        destination: `/tools/feature-complexity-vs-time-estimator/`,
        statusCode: 301,
      },
      {
        source: `/blog/react-vs-angular/blog/top-10-websites-built-using-react-js/`,
        destination: `/blog/react-vs-angular/`,
        statusCode: 301,
      },
      {
        source: `/project-estimate/`,
        destination: `/tools/project-estimate/`,
        statusCode: 301,
      },
      {
        source: `/saas-development-cost-calculator/`,
        destination: `/tools/saas-development-cost-calculator/`,
        statusCode: 301,
      },
      {
        source: `/go-to-market-timeline-planner/`,
        destination: `/tools/go-to-market-timeline-planner/`,
        statusCode: 301,
      },
      {
        source: `/app-development-timeline-calculator/`,
        destination: `/tools/app-development-timeline-calculator/`,
        statusCode: 301,
      },
      {
        source: `/database-selector-tool/`,
        destination: `/tools/database-selector-tool/`,
        statusCode: 301,
      },
      {
        source: `/testing-qa-timeline-estimator/`,
        destination: `/tools/testing-qa-timeline-estimator/`,
        statusCode: 301,
      },
      {
        source: `/tech-stack-recommender/`,
        destination: `/tools/tech-stack-recommender/`,
        statusCode: 301,
      },
      {
        source: `/cross-platform-vs-native-analyzer/`,
        destination: `/tools/cross-platform-vs-native-analyzer/`,
        statusCode: 301,
      },
      {
        source: `/blog/best-guide-to-hire-node-js-developers/Node.js%20is%20widely%20used%20in%20B2B%20SaaS%20platforms,%20streaming%20apps,%20API-first%C2%A0backends,%20and%20microservices.%2043%25%20of%20Node.js%20developers%20use%20it%20for%20enterprise%20applications`,
        destination: `/blog/best-guide-to-hire-node-js-developers/`,
        statusCode: 301,
      },
      {
        source: `/tools/startup-tech-readiness-quiz/`,
        destination: `/tools/tech-readiness-assessment-tool/`,
        statusCode: 301,
      },
      {
        source: `/tools/project-estimate/`,
        destination: `/tools/app-development-cost-calculator/`,
        statusCode: 301,
      },
      {
        source: `/product/enclave-connect/`,
        destination: `/x/product-listing/enclave-connect/`,
        statusCode: 301,
      },
      {
        source: `/product/exora/`,
        destination: `/x/product-listing/exora/`,
        statusCode: 301,
      },
      {
        source: `/product/mind-sync/`,
        destination: `/x/product-listing/mind-sync/`,
        statusCode: 301,
      },
      {
        source: `/snapgen-privacy-policy/`,
        destination: `/mr-brush-privacy-policy/`,
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
