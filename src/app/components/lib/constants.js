export const notNewTabRedirect = [
  `${process.env.NEXT_PUBLIC_BASE_URL}industry/fintech-software-development/`,
  `${process.env.NEXT_PUBLIC_BASE_URL}industry/media-entertainment-software-development/`,
  `${process.env.NEXT_PUBLIC_BASE_URL}industry/fleet-management-software-development/`,
  `${process.env.NEXT_PUBLIC_BASE_URL}industry/healthcare-software-development/`,
  `${process.env.NEXT_PUBLIC_BASE_URL}hire-reactjs-developer/`,
  `${process.env.NEXT_PUBLIC_BASE_URL}hire-java-developer/`,
  `${process.env.NEXT_PUBLIC_BASE_URL}hire-nodejs-developer/`,
  `${process.env.NEXT_PUBLIC_BASE_URL}hire-react-native-developer/`,
  `${process.env.NEXT_PUBLIC_BASE_URL}hire-aws-developer/`,
  `${process.env.NEXT_PUBLIC_BASE_URL}hire-ui-ux-designer/`,
  `${process.env.NEXT_PUBLIC_BASE_URL}hire-blockchain-developer/`,
  `${process.env.NEXT_PUBLIC_BASE_URL}ai-ml-development-services/`,
  `${process.env.NEXT_PUBLIC_BASE_URL}devops-consulting-services/`,
];

const servicesMenuItems = [
  {
    name: "COOPERATION MODEL",
    subSections: [
      {
        name: "Staff Augmentation",
        path: "/staff-augmentation",
      },
      {
        name: "Dedicated Team",
        path: "#",
      },
      {
        name: "Rapid Digitisation",
        path: "/digital-experience-services/",
      },
    ],
  },
  {
    name: "ARTIFICIAL INTELLIGENCE",
    subSections: [
      {
        name: "Generative AI",
        path: "/generative-ai-development-services/",
      },
      {
        name: "AI/ML Development",
        path: "/ai-ml-development-services/",
      },
      {
        name: "Gen AI Poc & GenAI MVP",
        path: "#",
      },
    ],
  },
  {
    name: "PRODUCT ENGINEERING",
    subSections: [
      {
        name: "Product Engineering & Development",
        path: "/product-engineering-development-services/",
      },
      {
        name: "SaaS Application Development",
        path: "/saas-application-development-services/",
      },
      {
        name: "Application Development",
        path: "/application-development-services/",
      },
      // {
      //   name: "ERP Next Development",
      //   path: "/erp-next-development-services/",
      // },
      {
        name: "App Moderniser",
        path: "#",
      },
    ],
  },
  {
    name: "DATA & BI",
    subSections: [
      {
        name: "BI Consulting",
        path: "/business-intelligence-services/",
      },
      {
        name: "Power BI",
        path: "#",
      },
      {
        name: "Data Engineering",
        path: "#",
      },
    ],
  },
  {
    name: "DevOps & Cloud",
    subSections: [
      {
        name: "AWS Consulting",
        path: "/aws-consulting-services/",
      },
      {
        name: "DevOps Consulting",
        path: "/devops-consulting-services/",
      },
      {
        name: "Kubernetes Consulting",
        path: "/kubernetes-consulting-services/",
      },
    ],
  },
  {
    name: "LOW-CODE/NO-CODE DEVELOPMENT",
    subSections: [
      {
        name: "Frappe Development",
        path: "/frappe-development-services/",
      },
      {
        name: "Adalo Development",
        path: "/adalo-development-services/",
      },
      {
        name: "FlutterFlow Development",
        path: "/flutterflow-development-services/",
      },
      {
        name: "Low-code/No-code Development",
        path: "/low-code-no-code-development-services/",
      },
    ],
  },
  // {
  //   name: 'Integration',
  //   subSections: [
  //     {
  //       name: 'HubSpot',
  //       path: '#',
  //     },
  //     {
  //       name: 'Stripe',
  //       path: '#',
  //     },
  //     {
  //       name: 'Square',
  //       path: '#',
  //     },
  //   ],
  // },
];

const industryMenuItems = [
  {
    name: "INDUSTRY",
    subSections: [
      {
        name: "Fintech",
        path: "/industry/fintech-software-development/",
      },
      {
        name: "Media & Entertainment",
        path: "/industry/media-entertainment-software-development/",
      },
      {
        name: "Fleet Management + GPS",
        path: "/industry/fleet-management-software-development/",
      },
      {
        name: "Healthcare",
        path: "/industry/healthcare-software-development/",
      },
    ],
  },
];

const hireTeamMenuItems = [
  {
    name: "FRONTEND DEVELOPMENT",
    subSections: [
      {
        name: "React.JS",
        path: "/hire-reactjs-developer/",
      },
      {
        name: "React Native",
        path: "/hire-react-native-developer/",
      },
      {
        name: "Flutter",
        path: "#",
      },
      {
        name: "UI/UX Development",
        path: "/hire-ui-ux-designer/",
      },
    ],
  },
  {
    name: "BACKEND DEVELOPMENT",
    subSections: [
      {
        name: "Java",
        path: "/hire-java-developer/",
      },
      {
        name: "Node.JS",
        path: "/hire-nodejs-developer/",
      },
      {
        name: "Python",
        path: "/hire-nodejs-developer/",
      },
    ],
  },
  {
    name: "CLOUD DEVELOPMENT",
    subSections: [
      {
        name: "AWS Certified Developers",
        path: "/hire-aws-developer/",
      },
    ],
  },
  {
    name: "EMERGING TECHNOLOGIES",
    subSections: [
      {
        name: "Blockchain Development",
        path: "/hire-blockchain-developer/",
      },
    ],
  },
];

export const menuItems = [
  {
    name: "OUR WORK",
    path: "/portfolio/",
  },
  {
    name: "SERVICES",
    path: "",
    heading: "",
    menuItems: servicesMenuItems,
    isMegaMenu: true,
  },
  {
    name: "INDUSTRY",
    path: "",
    heading: "All Industries",
    menuItems: industryMenuItems,
    isMegaMenu: true,
  },
  {
    name: "HIRE TEAM",
    path: "",
    heading: "Technologies",
    menuItems: hireTeamMenuItems,
    isMegaMenu: true,
  },
  {
    name: "BLOGS",
    path: "/blog/",
    hideInHeader: true,
  },
  {
    name: "OUR PROCESS",
    path: "/our-process/",
    hideInHeader: true,
  },
  {
    name: "ABOUT",
    path: "/about-us/",
    hideInHeader: true,
  },
  {
    name: "CAREER",
    path: "/career/",
    hideInHeader: true,
  },
  {
    name: "CONTACT",
    path: "/contact-us/",
    hideInHeader: true,
  },
];
