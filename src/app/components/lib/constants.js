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
    name: 'Cooperation Model',
    subSections: [
      {
        name: 'Staff Augmentation',
        path: '/staff-augmentation',
      },
    ],
  },

  {
    name: 'Artificial Intelligence',
    subSections: [
      {
        name: 'Generative AI',
        path: '/generative-ai-development-services/',
      },
      {
        name: 'AI/ML Development',
        path: '/ai-ml-development-services/',
      },
    ],
  },
  {
    name: 'Product Engineering',
    subSections: [
      {
        name: 'Product Engineering & Development',
        path: '/product-engineering-development-services/',
      },
      {
        name: 'SaaS Application Development',
        path: '/saas-application-development-services/',
      },
      {
        name: 'Application Development',
        path: '/application-development-services/',
      },
      {
        name: 'Digital Experience',
        path: '/digital-experience-services/',
      },
      {
        name: 'ERP Next Development',
        path: '/erp-next-development-services/',
      },
    ],
  },
  {
    name: 'Data Engineering & Business Intelligence',
    subSections: [
      {
        name: 'Data Pipelining',
        path: '#',
      },
      {
        name: 'Data Analytics',
        path: '#',
      },
      {
        name: 'Power BI',
        path: '#',
      },
      {
        name: 'BI Consulting',
        path: '/business-intelligence-services/',
      },
    ],
  },
  {
    name: 'DevOps & Cloud',
    subSections: [
      {
        name: 'AWS Consulting',
        path: '/aws-consulting-services/',
      },
      {
        name: 'DevOps Consulting',
        path: '/devops-consulting-services/',
      },
      {
        name: 'Kubernetes Consulting',
        path: '/kubernetes-consulting-services/',
      },
    ],
  },
  {
    name: 'Low-code No-code Development',
    subSections: [
      {
        name: 'Frappe Development',
        path: '#',
      },
      {
        name: 'Adalo Development',
        path: '#',
      },
      {
        name: 'FlutterFlow Development',
        path: '#',
      },
      {
        name: 'Low-code No-code Development',
        path: '/low-code-no-code-development-services/',
      },
    ],
  },
  {
    name: 'Integration',
    subSections: [
      {
        name: 'HubSpot',
        path: '#',
      },
      {
        name: 'Stripe',
        path: '#',
      },
      {
        name: 'Square',
        path: '#',
      },
    ],
  },
];

const industryMenuItems = [
  {
    name: 'INDUSTRY',
    subSections: [
      {
        name: 'FINTECH',
        path: '/industry/fintech-software-development/',
      },
      {
        name: 'MEDIA & ENTERTAINMENT',
        path: '/industry/media-entertainment-software-development/',
      },
      {
        name: 'FLEET MANAGEMENT + GPS',
        path: '/industry/fleet-management-software-development/',
      },
      {
        name: 'HEALTHCARE',
        path: '/industry/healthcare-software-development/',
      },
    ],
  },
];

const hireTeamMenuItems = [
  {
    name: 'Frontend Development',
    subSections: [
      {
        name: 'REACT.JS',
        path: '/hire-reactjs-developer/',
      },
      {
        name: 'REACT NATIVE',
        path: '/hire-react-native-developer/',
      },
      {
        name: 'UI/UX DEVELOPMENT',
        path: '/hire-ui-ux-designer/',
      },
    ],
  },
  {
    name: 'Backend Development',
    subSections: [
      {
        name: 'JAVA',
        path: '/hire-java-developer/',
      },
      {
        name: 'NODE.JS',
        path: '/hire-nodejs-developer/',
      },
    ],
  },
  {
    name: 'Cloud Development',
    subSections: [
      {
        name: 'AWS DEVELOPMENT',
        path: '/hire-aws-developer/',
      },
    ],
  },
  {
    name: 'Emerging Technologies',
    subSections: [
      {
        name: 'BLOCKCHAIN DEVELOPMENT',
        path: '/hire-blockchain-developer/',
      },
    ],
  },
];

export const menuItems = [
  {
    name: 'OUR WORK',
    path: '/portfolio/',
  },
  {
    name: 'SERVICES',
    path: '',
    heading: '',
    menuItems: servicesMenuItems,
    isMegaMenu: true,
  },
  {
    name: 'INDUSTRY',
    path: '',
    heading: 'All Industries',
    menuItems: industryMenuItems,
    isMegaMenu: true,
  },
  {
    name: 'HIRE TEAM',
    path: '',
    heading: 'Technologies',
    menuItems: hireTeamMenuItems,
    isMegaMenu: true,
  },
  {
    name: 'BLOGS',
    path: '/blog/',
    hideInHeader: true,
  },
  {
    name: 'OUR PROCESS',
    path: '/our-process/',
    hideInHeader: true,
  },
  {
    name: 'ABOUT',
    path: '/about-us/',
    hideInHeader: true,
  },
  {
    name: 'CAREER',
    path: '/career/',
    hideInHeader: true,
  },
  {
    name: 'CONTACT',
    path: '/contact-us/',
    hideInHeader: true,
  },
];
