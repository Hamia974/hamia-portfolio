export const profile = {
  name: "Hamia Khalil",
  role: "Machine Learning & Data Engineer",
  roleSecondary: "Full Stack Web Developer",
  tagline: "Data × AI × Software",
  location: "Lahore, Pakistan",
  email: "hamiakhalil287@gmail.com",
  phone: "+92-302-0448628",
  github: "https://github.com/Hamia974",
  githubHandle: "github.com/Hamia974",
  linkedin: "https://www.linkedin.com/in/hamia-khalil-766899335",
  linkedinHandle: "linkedin.com/in/hamia-khalil-766899335",
  resumeUrl: "/Hamia-Khalil-Resume.pdf",
  summary:
    "I'm a Computer Science student at the University of Central Punjab, building at the intersection of data engineering, machine learning, and full stack software. My work moves in one direction: raw data in, reliable pipelines and models in the middle, usable products out. I've shipped ETL pipelines, trained ensemble classifiers, deployed cloud infrastructure on AWS, and built full stack applications end to end — and I've published peer-reviewed research along the way.",
  education: {
    institution: "University of Central Punjab (UCP), Lahore",
    degree: "Bachelor of Science in Computer Science (BSCS)",
    period: "2023 — Present",
    cgpa: "3.92 / 4.0",
  },
} as const;

export const whatIBuild = [
  {
    id: "data-engineering",
    title: "Data Engineering",
    description:
      "ETL pipelines that extract, clean, transform and load real-world data — with logging, validation and quality checks built in, not bolted on.",
    tech: ["Python", "Pandas", "PostgreSQL", "SQL", "ETL", "dbt", "Data Warehousing"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description:
      "Ensemble models and classification systems, from feature engineering through evaluation — built to be explainable, not just accurate on paper.",
    tech: ["Scikit-learn", "XGBoost", "Ensemble Learning", "Feature Engineering", "EDA"],
  },
  {
    id: "ai-systems",
    title: "AI Systems",
    description:
      "Deep learning applied to real problems — image-based disease detection, employability prediction — wrapped in interfaces people can actually use.",
    tech: ["Deep Learning", "Image Processing", "Reinforcement Learning"],
  },
  {
    id: "full-stack",
    title: "Full Stack Applications",
    description:
      "Complete systems with real users in mind: authentication, POS/billing, role management, and REST APIs — not just landing pages.",
    tech: ["React", "Next.js", "Django", "Flask", "Supabase", "REST APIs"],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    description:
      "Infrastructure designed for scale and security — networking, storage, identity, monitoring — following cloud best practice, not defaults.",
    tech: ["AWS", "EC2", "S3", "RDS", "VPC", "IAM", "Auto Scaling"],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description:
      "Turning tables of numbers into decisions — business queries, dashboards and reporting that answer the question that was actually asked.",
    tech: ["SQL", "Power BI", "Tableau", "KNIME"],
  },
] as const;
