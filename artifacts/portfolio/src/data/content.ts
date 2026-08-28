export const personalInfo = {
  name: "Richard Cummings",
  headline: "IT Asset & Configuration Leader · SaaS Founder",
  subHeadline: "15+ years leading IT operations, CMDB migrations, and service delivery for global enterprises. Founder of UsePathly.com.",
  email: "richard@richardcummings.co.uk",
  phone: "+447548024643",
  websiteUrl: "https://usepathly.com",
  websiteDisplay: "UsePathly.com",
  linkedInUrl: "https://www.linkedin.com/in/cummings-richard",
  location: "Milton Keynes, UK",
  summary: "IT Asset and Configuration Leader with over 15 years of experience in IT operations, service delivery, and logistics. Expert in managing the full IT asset management (ITAM) lifecycle, including CMDB migrations, hardware provisioning, and vendor SLA management for global MSP environments supporting 20,000+ end-users. Proven track record in enhancing asset accuracy, implementing automation, and consistently meeting key performance indicators. Additionally demonstrated full-cycle product development expertise by founding and launching UsePathly.com, a live AI-powered SaaS platform."
};

export const aboutStatement = "I sit at the intersection of operational leadership, technical consulting, and product creation.\n\nI deliver tailored technical solutions across the Freshworks ecosystem, specializing in FreshService and Freshdesk. My background includes managing IT asset programmes for over 20000 users, leading global CMDB migrations, and driving major operational turnarounds.\n\nI am also the founder of UsePathly.com, an Artificial Intelligence career platform. I built and launched this from scratch, developing over 25 features entirely on my own initiative.\n\nI do not wait for perfect conditions. I work with what is in front of me, move quickly, and focus relentlessly on measurable outcomes.";

export type CareerPhase = "it" | "logistics" | "saas" | "early";

export const careerTimeline = [
  {
    title: "Technical Consultant",
    company: "Xcession Ltd",
    date: "Jul 2026 – Present",
    phase: "it" as CareerPhase,
    stats: ["Full-time", "Remote", "Freshworks ecosystem"],
    description: "Providing technical consulting and solutions across the Freshworks ecosystem, specializing in the implementation and configuration of FreshService and Freshdesk."
  },
  {
    title: "Asset and Configuration Lead",
    company: "Ekco Cloud & Security (Global MSP)",
    date: "Dec 2025 – Apr 2026",
    phase: "it" as CareerPhase,
    stats: ["15 → 8 person team", "20,000+ end-users", "FreshService CMDB migration"],
    description: "• Directed a team of 8 (2 Logistics Specialists, 3 Build Engineers, 1 Asset & Configuration Manager, and 2 Endpoint & Applications Managers) following a successful post-migration restructure, down from a pre-migration team of 15.\n\n• Optimised team structure by reducing from 5 Build Engineers + 5 User Lifecycle Specialists (Joiners, Movers & Leavers) + 5 Logistics staff into a more efficient 8-person team, while maintaining full ownership of IT Asset Management (ITAM), CMDB, stock logistics, hardware provisioning, and user onboarding for 20,000+ external end-users.\n\n• Led the end-to-end migration from the legacy AssetTrac system to FreshService CMDB, significantly improving data completeness and asset record accuracy.\n\n• Managed and owned commercial relationships and Service Level Agreements (SLAs) with hardware and procurement vendors to drive accountability and optimise logistics.\n\n• Implemented automation for user account creation, streamlining onboarding processes.\n\n• Own and monitor key department KPIs, including asset accuracy, CMDB completeness, and on-time device delivery."
  },
  {
    title: "Founder & Product Lead",
    company: "UsePathly.com",
    date: "Jul 2025 – Present",
    phase: "saas" as CareerPhase,
    stats: ["25+ AI tools", "Paying customers", "Built solo"],
    description: "I founded and launched UsePathly, an AI-driven B2C SaaS career platform featuring 25+ AI-powered tools — including an ATS-optimised Resume Builder, Skill Gap Analysis, Interview Preparation with mindset coaching, LinkedIn Optimiser, and more.\n\nI owned the full product lifecycle as Product Manager: defining product strategy and roadmap, conducting user research and prioritisation, designing intuitive UX flows, and leading development from concept to live deployment with paying users.\n\nI drove iterative product enhancements based on user feedback, usage analytics, and retention metrics — focusing on improving user engagement, confidence, and long-term career outcomes. I managed all commercial aspects including pricing (free tier + £11/month premium), go-to-market strategy, and brand positioning, while balancing a full-time senior operational role."
  },
  {
    title: "Service Delivery Coordinator",
    company: "Ekco Cloud & Security (Global MSP)",
    date: "Jun 2025 – Nov 2025",
    phase: "it" as CareerPhase,
    stats: ["FreshService & ServiceNow", "MSP at scale"],
    description: "In my first role at Ekco I owned the complete hardware provisioning lifecycle — from initial build and configuration through to client dispatch. Working daily within FreshService and ServiceNow ticketing platforms, I maintained precise IT asset inventories to support configuration management and seamless client onboarding.\n\nI acted as the central coordinator between technical teams, suppliers, and clients, ensuring on-time delivery and strict SLA compliance. This high-volume, high-pressure position gave me rapid exposure to MSP operations at scale and directly prepared me for my current leadership role."
  },
  {
    title: "Operations Controller",
    company: "Biffa Waste",
    date: "Nov 2023 – May 2025",
    phase: "logistics" as CareerPhase,
    stats: ["Churn 14.5% → 3.8%", "68% better than national avg"],
    description: "I drove a major turnaround in customer retention by reducing churn from 14.5% to 3.8% — a result 68% better than the national depot average. I achieved this through rigorous data analysis of customer feedback, optimised driver schedules, and targeted service improvements that delivered faster response times and higher operational efficiency.\n\nI also enforced strict regulatory compliance and introduced consistent performance monitoring across the team, maintaining the highest standards of safety and quality in a regulated environment."
  },
  {
    title: "Operations Manager",
    company: "Biffa Waste",
    date: "Feb 2022 – Oct 2023",
    phase: "logistics" as CareerPhase,
    stats: ["6 transport managers", "Full P&L ownership"],
    description: "I led a team of six transport managers, taking full responsibility for customer accounts and the complete onboarding process. By focusing on strategic relationship management and service excellence I drove both customer satisfaction and sustainable business growth in a competitive logistics sector."
  },
  {
    title: "Lead Account Manager",
    company: "Yusen Logistics",
    date: "Jan 2021 – Feb 2022",
    phase: "logistics" as CareerPhase,
    stats: ["£5.2M portfolio", "NPS +15% in 6 months", "Pfizer & Moderna"],
    description: "I managed a £5.2 million portfolio and led a team of four international transport managers. Within six months I improved the Net Promoter Score (NPS) by 15% through enhanced service delivery and proactive customer communication. I also built and maintained key European commercial relationships, including major accounts with Pfizer and Moderna."
  },
  {
    title: "Independent Logistics Consultant",
    company: "Freelance",
    date: "May 2018 – Dec 2020",
    phase: "logistics" as CareerPhase,
    stats: ["Paradigm Routing SaaS", "SMB optimisation"],
    description: "I advised multiple small-to-medium businesses on operational streamlining strategies. Key projects included the implementation of Paradigm Routing SaaS software to optimise logistics and routing processes, delivering measurable efficiency gains and cost savings for clients."
  },
  {
    title: "Head of Logistics & Regional Manager",
    company: "Furniture Village",
    date: "Aug 2014 – Apr 2018",
    phase: "logistics" as CareerPhase,
    stats: ["31-person team", "18 depots", "£1M+ revenue"],
    description: "I managed a 31-person transport team at my own depot, taking full ownership of budgets, inventory control, and performance improvement programmes. I oversaw 18 depots across the network, driving meaningful improvements in logistics efficiency and distribution reliability.\n\nI led strategic initiatives focused on elevating customer satisfaction and team performance, consistently meeting or exceeding KPIs for delivery timeliness, cost management, and service quality. I championed team training and development programmes that raised the standard of service delivery and contributed directly to sustained business growth.\n\nI consistently exceeded key performance indicators in customer satisfaction and operational efficiency, delivering measurable results including over £1 million in additional revenue contribution and a sustained CSAT score of 4.5/5 across more than 7,200 B2C customers."
  },
  {
    title: "Customer Success Coordinator",
    company: "Furniture Village",
    date: "Jun 2014 – Aug 2014",
    phase: "early" as CareerPhase,
    stats: ["7,280 customers", "CSAT 4.5/5"],
    description: "I managed customer inquiries end-to-end, ensuring timely and efficient resolution of home delivery concerns. I leveraged Voice of Customer (VoC) feedback systematically to surface delivery-related issues and drove tangible improvements to the delivery network, including an extension of delivery availability across additional days of the week.\n\nThrough a focused commitment to service quality I achieved and maintained top customer satisfaction (CSAT) scores of 4.5/5 from 7,280 B2C customers."
  },
  {
    title: "Customer Success Specialist",
    company: "Furniture Village",
    date: "Sep 2013 – May 2014",
    phase: "early" as CareerPhase,
    stats: ["£1M+ revenue contribution"],
    description: "I focused on operational process optimisation and delivery network improvement, contributing directly to over £1 million in incremental revenue growth. By systematically identifying inefficiencies and implementing targeted improvements I reduced operational costs and boosted delivery efficiency across the network.\n\nThis role built the commercial and customer-experience foundations that I carried into every senior position that followed."
  },
  {
    title: "Technical Executive",
    company: "Furniture Village",
    date: "Jun 2013 – Aug 2013",
    phase: "early" as CareerPhase,
    stats: ["Website development", "eBay integration"],
    description: "I led new website development projects to enhance the customer-facing digital experience, working closely with internal stakeholders to ensure the output aligned with both commercial and operational requirements.\n\nI evaluated and implemented live chat functionality from the ground up — including designing the rollout plan, delivering employee training, and conducting staged testing to ensure a smooth launch. I also managed the Furniture Village eBay store, integrating it with internal IT infrastructure to streamline e-commerce sales operations and ensure inventory accuracy across channels."
  },
  {
    title: "Online Customer Support",
    company: "Furniture Village",
    date: "Aug 2008 – Jun 2013",
    phase: "early" as CareerPhase,
    stats: ["B2B & B2C", "15% YoY B2B growth"],
    description: "I provided customer support and managed relationships for a diverse range of clients, including corporate B2B accounts. Through consistent, high-quality relationship management I achieved 15% year-on-year growth in B2B sales — a result that demonstrated the direct commercial value of excellent customer service.\n\nThis role was the foundation of my professional career, establishing the customer-first mindset and operational discipline that have underpinned every role I have held since."
  }
];

export const usePathly = {
  name: "UsePathly.com",
  tagline: "AI-powered career platform — built solo, live in production",
  description: "I built UsePathly.com from concept to live production entirely solo — a B2C SaaS platform with over 25 AI-powered tools to support the full career journey. I owned every aspect: strategy, UX, pricing (free tier + £11/$11 premium), AI integration, and marketing. Currently live with paying customers.",
  highlights: ["Founded", "Designed", "Built", "Launched", "Solo"],
  link: "https://usepathly.com"
};

export const keyStats = [
  { value: "20,000+", label: "end-users supported" },
  { value: "15+", label: "years of experience" },
  { value: "68%", label: "better than national churn average" },
  { value: "£5.2M", label: "portfolio managed" },
  { value: "7,200+", label: "B2C customers rated CSAT 4.5/5" },
  { value: "4.5/5", label: "customer satisfaction score" },
  { value: "15%", label: "NPS improvement in 6 months" },
  { value: "18", label: "depots managed as Head of Logistics" },
  { value: "£1M+", label: "revenue contribution" }
];

export const skills = {
  technical: [
    "IT Asset Management (ITAM)", "Configuration Management (CMDB)", "CMDB Migration", 
    "Hardware Provisioning & Device Lifecycle", "User Provisioning & Onboarding Automation", 
    "Automation Implementation", "FreshService", "ServiceNow", "AssetTrac", 
    "Paradigm Routing Software", "SaaS Product Development", "AI Integration", 
    "Website Development", "E-commerce Integration", "Live Chat & Digital Tools Implementation"
  ],
  professional: [
    "Operations Management", "Logistics & Supply Chain", "Service Delivery", 
    "Vendor Management", "Supplier Management", "SLA Management", "Stakeholder Management", 
    "Process Optimisation", "Team Leadership", "Training & Development", "Account Management", 
    "Customer Relationship Management", "Budget Management", "Strategic Planning", 
    "Voice of Customer (VoC)", "Regulatory Compliance & Governance", "Workforce & Scheduling Management"
  ]
};

export const tools = [
  { name: "FreshService",              category: "ITSM & Asset Management" },
  { name: "ServiceNow",                category: "ITSM & Asset Management" },
  { name: "AssetTrac",                 category: "ITSM & Asset Management" },
  { name: "Microsoft Intune",          category: "ITSM & Asset Management" },
  { name: "Mosyle",                    category: "ITSM & Asset Management" },
  { name: "Microsoft Excel",           category: "Productivity & Data" },
  { name: "Microsoft 365",             category: "Productivity & Data" },
  { name: "Monday.com",                category: "Productivity & Data" },
  { name: "Paradigm Routing Software", category: "Logistics & Routing" },
  { name: "Replit",                    category: "Development & AI" },
  { name: "Genero Four JS",            category: "Development & AI" },
  { name: "eBay Stores",               category: "E-commerce & Support" },
  { name: "Live Chat Platforms",       category: "E-commerce & Support" },
];

export const educationAndCerts = {
  certifications: [
    "FreshService Advanced Certification (Jan 2026)",
    "Freshdesk Expert Certification (Jan 2026)",
    "ITIL® 4 Foundation (Studying — Target Q3 2026)",
    "Customer Success Management (CSM) Level 1 (Studying)"
  ],
  education: [
    "Edexcel National Diploma in IT Practitioner — Milton Keynes College, 2005",
    "10 GCSEs (Grades A–B) — Ousedale School, 2003"
  ]
};
