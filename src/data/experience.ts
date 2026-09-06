export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  type: "role" | "simulation" | "volunteer";
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "zee-outsourcing",
    organization: "Zee Outsourcing Solutions Pvt. Ltd.",
    role: "Data Engineering Mentor",
    period: "June 2026 — Present",
    type: "role",
    points: [
      "Mentor aspiring data professionals in data engineering concepts including SQL, ETL processes, data pipelines, Power BI, KNIME and database management.",
      "Guide interns and students through hands-on learning activities, real-world examples and technical problem-solving.",
      "Support learners in understanding database concepts, data architecture and automated data workflows.",
    ],
  },
  {
    id: "bcg-forage",
    organization: "BCG (via Forage)",
    role: "Data Science Job Simulation",
    period: "August 2026",
    type: "simulation",
    points: [
      "Used Python (Pandas, NumPy) to analyze client data, build visualizations, and deliver an executive summary of business insights.",
      "Engineered and optimized a Random Forest model that achieved a 50% recall rate in predicting customer churn.",
    ],
  },
  {
    id: "tata",
    organization: "TATA",
    role: "Data Visualisation: Empowering Business with Effective Insights",
    period: "August 2026",
    type: "simulation",
    points: [
      "Acted as a virtual consultant to CFO and CMO executives, transforming complex datasets into actionable business dashboards.",
      "Cleaned and analyzed large datasets to build targeted visualizations answering financial and marketing questions.",
    ],
  },
  {
    id: "quantium",
    organization: "Quantium",
    role: "Data Analytics Job Simulation",
    period: "August 2026",
    type: "simulation",
    points: [
      "Analyzed datasets to identify trends, patterns and actionable business insights.",
      "Developed data-driven recommendations and communicated findings to support business decisions.",
    ],
  },
  {
    id: "forage-dataviz",
    organization: "Forage",
    role: "Data Visualization Virtual Experience Program",
    period: "August 2026",
    type: "simulation",
    points: [
      "Used Tableau and Excel to analyze business data, create calculated fields and classify equality scores.",
      "Applied data visualization techniques to generate business insights and support data-driven decision making.",
    ],
  },
  {
    id: "psrd",
    organization: "PSRD — Pakistan Society for Rehabilitation of the Disabled",
    role: "Volunteer",
    period: "UCP, Lahore — 2024",
    type: "volunteer",
    points: [
      "Facilitated interactive educational workshops with differently abled children.",
      "Strengthened communication and teamwork skills through consistent community engagement.",
    ],
  },
];

export const research = {
  title:
    "MORL-Based Green SLO Framework for Dynamic Carbon, Latency and Energy-Aware Optimization in Cloud-Edge Systems",
  venue: "IEEE",
  year: "2025",
  link: "https://ieeexplore.ieee.org/document/11272930",
  summary:
    "Cloud-edge systems constantly trade off three things that pull against each other: how much carbon they emit, how fast they respond, and how much energy they burn. This research proposes a multi-objective reinforcement learning (MORL) framework that optimizes all three simultaneously and dynamically, rather than treating them as separate concerns — moving toward infrastructure that meets its service-level objectives while actively minimizing environmental impact.",
  contributions: [
    "Proposed a multi-objective reinforcement learning framework for cloud-edge optimization",
    "Modeled carbon footprint, latency and energy efficiency as joint optimization targets",
    "Published and indexed on IEEE Xplore (2025)",
  ],
};

export const certifications: string[] = [
  "Microsoft UX Professional Design Certificate (2025)",
  "SQL Foundations — Microsoft",
  "Data Manipulation and Transactions in SQL Server — Microsoft",
  "Python Project for Data Engineering — IBM",
  "Introduction to Data Engineering — IBM",
  "Introduction to Generative AI — Google",
  "AI Fluency: Framework & Foundations — Anthropic",
  "Data Engineering Course Certificate",
  "Data Visualization — TATA",
  "Data Science Job Simulation — BCGX",
];

export const achievements: string[] = [
  "IEEE Published Author (2025)",
  "Web Development Competition — 1st Place",
  "Gold Medalist — Annual Sports Gala (2026)",
  "Organizer — Think2Code IEEE Event",
  "Participant — AI/ML Codex 2.0 (2026)",
  "Won Quiz Competition (2023)",
  "Participation in Debate Competition (2024)",
  "Participation in Code Rush (2023, 2024)",
  "Participation in Sports (2024)",
  "Participation in Society of the Year (2023, 2024)",
];
