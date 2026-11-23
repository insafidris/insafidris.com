export type ProjectCluster =
  | "AI, Research & Deep Tech"
  | "Capital, Trade & Commerce"
  | "Education, Civic & Foundation"
  | "Media, Football & Global Culture";

export interface ProjectInitiative {
  id: string;
  number: string;
  sector: string;
  cluster: ProjectCluster;
  headline: string;
  subItems?: string[];
  link?: {
    label: string;
    url: string;
  };
  stage: "Active" | "Building" | "Research & Stealth" | "Ideation & Long-Horizon";
}

export const PROJECT_2030_CLUSTERS: ProjectCluster[] = [
  "AI, Research & Deep Tech",
  "Capital, Trade & Commerce",
  "Education, Civic & Foundation",
  "Media, Football & Global Culture",
];

export const PROJECT_2030_INITIATIVES: ProjectInitiative[] = [
  {
    id: "agentic-ai",
    number: "01",
    sector: "Agentic AI",
    cluster: "AI, Research & Deep Tech",
    headline: "Expellus AI",
    subItems: ["Autonomous agent architectures & applied workflow execution"],
    link: {
      label: "expellusai.com",
      url: "http://expellusai.com",
    },
    stage: "Building",
  },
  {
    id: "edtech",
    number: "02",
    sector: "EdTech",
    cluster: "AI, Research & Deep Tech",
    headline: "Fantasktic AI",
    subItems: ["AI-native learning workflows and academic productivity"],
    link: {
      label: "fantasktic.ai",
      url: "https://fantasktic.ai",
    },
    stage: "Building",
  },
  {
    id: "education-consultancy",
    number: "03",
    sector: "Education / Career Consultancy",
    cluster: "Education, Civic & Foundation",
    headline: "Unify CONNECT Uni-Fly",
    subItems: ["Cross-border university admissions, mentorship & career strategy"],
    stage: "Active",
  },
  {
    id: "finance-tech-advisory",
    number: "04",
    sector: "Finance, Technology, Data & Advisory",
    cluster: "Capital, Trade & Commerce",
    headline: "BridgeImpact",
    subItems: ["Quantitative data systems, strategic finance & cross-market advisory"],
    stage: "Building",
  },
  {
    id: "fintech",
    number: "05",
    sector: "FinTech",
    cluster: "Capital, Trade & Commerce",
    headline: "Polymarket & BlackRock Ecosystem",
    subItems: [
      "Mid-frequency quantitative prediction market strategies (Polymarket)",
      "Institutional wealth & investment technology foundations (BlackRock)",
    ],
    stage: "Active",
  },
  {
    id: "football",
    number: "06",
    sector: "Football",
    cluster: "Media, Football & Global Culture",
    headline: "Officiating, Coaching & Performance Analytics",
    subItems: [
      "Referee",
      "Technical & Rehabilitation Coach",
      "Sports Analytics",
    ],
    stage: "Active",
  },
  {
    id: "import-export",
    number: "07",
    sector: "Import & Export Business",
    cluster: "Capital, Trade & Commerce",
    headline: "Global Cross-Border Trade & Supply",
    subItems: [
      "Commodities, Housing, Automobile",
      "Furnitures, Industrials, Chemicals, etc.",
    ],
    stage: "Active",
  },
  {
    id: "islamic-foundation",
    number: "08",
    sector: "Islamic Foundation",
    cluster: "Education, Civic & Foundation",
    headline: "Enduring Community & Waqf Infrastructure",
    subItems: ["Mosque", "Library", "Farm", "Restaurant", "Real Estate"],
    stage: "Ideation & Long-Horizon",
  },
  {
    id: "live-content",
    number: "09",
    sector: "Live Content Creation",
    cluster: "Media, Football & Global Culture",
    headline: "UGC @1M BOT",
    subItems: ["Podcast", "Commentary", "Interview"],
    stage: "Building",
  },
  {
    id: "luxury-business",
    number: "10",
    sector: "Luxury Business",
    cluster: "Capital, Trade & Commerce",
    headline: "Gem, Jewellery & Watches",
    subItems: [
      "Diamond, Gold, Platinum, Silver, Bronze",
      "Precious & Semi-Precious Gemstones",
    ],
    stage: "Active",
  },
  {
    id: "healthtech",
    number: "11",
    sector: "HealthTech",
    cluster: "AI, Research & Deep Tech",
    headline: "Ideation",
    subItems: ["Early-stage clinical, recovery & preventative health concepts"],
    stage: "Ideation & Long-Horizon",
  },
  {
    id: "media",
    number: "12",
    sector: "Media",
    cluster: "Media, Football & Global Culture",
    headline: "Freelance Independent Non-Investigative Journalism",
    subItems: ["Essays, cultural commentary, industry reporting & field dispatches"],
    stage: "Active",
  },
  {
    id: "open-source-remote",
    number: "13",
    sector: "Open Source & Remote",
    cluster: "AI, Research & Deep Tech",
    headline: "Kaggle & Open Repositories",
    subItems: ["Competitive data science, public benchmarks & open-source tooling"],
    stage: "Active",
  },
  {
    id: "politics",
    number: "14",
    sector: "Politics",
    cluster: "Education, Civic & Foundation",
    headline: "Democratic Alliance for the Betterment and Progress of Hong Kong",
    subItems: ["Civic policy engagement & community representation"],
    stage: "Active",
  },
  {
    id: "research",
    number: "15",
    sector: "Research",
    cluster: "AI, Research & Deep Tech",
    headline: "Idris AI & Stealth CH8H",
    subItems: ["Idris AI", "Stealth CH8H"],
    stage: "Research & Stealth",
  },
  {
    id: "tradetech",
    number: "16",
    sector: "TradeTech",
    cluster: "Capital, Trade & Commerce",
    headline: "UsePec Spec AI",
    subItems: ["AI-driven procurement specifications & cross-border trade intelligence"],
    stage: "Building",
  },
  {
    id: "travel-tourism",
    number: "17",
    sector: "Travel & Tourism",
    cluster: "Media, Football & Global Culture",
    headline: "Global Field Documentation (30+ Countries)",
    subItems: ["Freelance Tour Guide", "Vlog", "Blog"],
    stage: "Active",
  },
  {
    id: "volunteering-campaigning",
    number: "18",
    sector: "Volunteering & Campaigning",
    cluster: "Education, Civic & Foundation",
    headline: "Public Mobilization & Cultural Production",
    subItems: ["Events, Concerts, Tours — Political, Social, Economical"],
    stage: "Active",
  },
];
