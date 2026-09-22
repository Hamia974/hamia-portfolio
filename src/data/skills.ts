export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "SQL", "C++", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "data",
    label: "Data & Databases",
    items: [
      "Pandas",
      "PostgreSQL",
      "MySQL",
      "ETL",
      "dbt",
      "Data Warehousing",
      "Data Modeling",
      "KNIME",
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Scikit-learn",
      "XGBoost",
      "Feature Engineering",
      "EDA",
      "Ensemble Learning",
    ],
  },
  {
    id: "web",
    label: "Web Development",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Django",
      "Flask",
      "REST APIs",
      "Tailwind CSS",
      "Bootstrap",
      "Supabase",
    ],
  },
  {
    id: "cloud-tools",
    label: "Cloud & Tools",
    items: [
      "AWS",
      "Git",
      "GitHub",
      "Power BI",
      "Tableau",
      "Figma",
      "VS Code",
      "Google Colab",
    ],
  },
];

export interface JourneyStage {
  stage: string;
  detail: string;
}

export const dataJourney: JourneyStage[] = [
  { stage: "SQL", detail: "Querying, joins, aggregations and business analytics on real datasets." },
  { stage: "Python", detail: "Pandas-driven scripting for data manipulation and automation." },
  { stage: "Data Cleaning", detail: "Validation, deduplication and type handling before anything gets trusted." },
  { stage: "ETL Pipelines", detail: "Extract, transform, load — with logging, from bank market data to e-commerce feeds." },
  { stage: "dbt Modeling", detail: "Staging, intermediate and mart models with source()/ref(), data tests and documentation." },
  { stage: "Relational Databases", detail: "Schema design, normalization and ERDs in PostgreSQL and MySQL." },
  { stage: "Data Warehousing", detail: "Modeling data for analysis, not just storage." },
  { stage: "Analytics", detail: "Turning query results into sales, customer and business insight." },
  { stage: "Visualization", detail: "Power BI, Tableau and KNIME dashboards for decision-makers." },
  { stage: "Cloud", detail: "Deploying and scaling data infrastructure on AWS." },
];
