export type ProjectCategory =
  | "data-engineering"
  | "business-intelligence"
  | "machine-learning"
  | "full-stack"
  | "cloud"
  | "academic";

export const categoryLabels: Record<ProjectCategory, string> = {
  "data-engineering": "Data Engineering",
  "business-intelligence": "Business Intelligence",
  "machine-learning": "Machine Learning",
  "full-stack": "Full Stack",
  cloud: "Cloud",
  academic: "Academic",
};

export type Visual =
  | "vision"
  | "dashboard"
  | "pipeline-ml"
  | "queue"
  | "etl"
  | "cloud-topology";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  featured: boolean;
  visual?: Visual;
  problem: string;
  built: string;
  stack: string[];
  features: string[];
  contribution: string;
  link?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    id: "plant-disease-detection",
    name: "AI-Based Plant Disease Detection System",
    category: "machine-learning",
    featured: true,
    visual: "vision",
    problem:
      "Farmers need fast, accurate identification of plant diseases and nutrient deficiencies directly from leaf images — final year project.",
    built:
      "A deep learning system that classifies plant diseases and nutrient deficiencies from images, combined with a full stack web application for real-world use.",
    stack: ["Deep Learning", "Ensemble Techniques", "Image Processing", "Django", "PostgreSQL"],
    features: [
      "Image-based disease and deficiency classification",
      "Ensemble techniques for higher prediction accuracy",
      "Full stack web app with Django backend and PostgreSQL",
    ],
    contribution:
      "Designing and training the detection model, applying ensemble methods and image processing, and building the Django/PostgreSQL application around it.",
  },
  {
    id: "snooker-club",
    name: "Snooker Club Management System",
    category: "full-stack",
    featured: true,
    visual: "dashboard",
    problem:
      "A snooker club needs one system to manage tables, billing, inventory, staff and sales instead of juggling spreadsheets.",
    built:
      "A full stack management system covering table management, POS/billing, canteen inventory, staff roles, sales tracking and reporting.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    features: [
      "Table management and POS/billing",
      "Canteen inventory tracking",
      "Staff roles and authentication via Supabase",
      "Sales tracking and reporting",
    ],
    contribution:
      "Built the frontend in Next.js/React/TypeScript, and designed and managed the PostgreSQL database and backend services through Supabase.",
  },
  {
    id: "skillbridge-ai",
    name: "SkillBridge AI",
    category: "machine-learning",
    featured: true,
    visual: "pipeline-ml",
    problem:
      "Job seekers need a data-driven read on their employability and a concrete direction for which careers fit their profile.",
    built:
      "An end-to-end AI-powered employability prediction and career recommendation platform.",
    stack: ["Python", "Scikit-learn", "XGBoost", "Feature Engineering", "EDA"],
    features: [
      "Employability prediction model",
      "Career recommendation logic",
      "Exploratory data analysis pipeline",
      "Ensemble machine learning techniques",
    ],
    contribution:
      "Developed the full pipeline — feature engineering, EDA, and ensemble model training with Scikit-learn and XGBoost.",
  },
  {
    id: "task-management-system",
    name: "Task Management & Asynchronous Processing System",
    category: "full-stack",
    featured: true,
    visual: "queue",
    problem:
      "Task management systems need to handle background work — notifications, processing — without blocking the main API.",
    built:
      "A Flask backend with PostgreSQL for task management and authentication, with Redis and Celery handling asynchronous background jobs.",
    stack: ["Python", "Flask", "PostgreSQL", "Redis", "Celery", "REST APIs"],
    features: [
      "RESTful API for task management and authentication",
      "Asynchronous background job processing with Celery",
      "Message queues via Redis",
    ],
    contribution:
      "Built the Flask/PostgreSQL backend end to end and integrated Redis/Celery for async task processing.",
  },
  {
    id: "python-data-engineering-etl",
    name: "Python Project for Data Engineering",
    category: "data-engineering",
    featured: true,
    visual: "etl",
    problem:
      "Global bank market-capitalization data is scattered and inconsistent across sources — it needs a repeatable pipeline to become usable.",
    built:
      "A Python-based ETL pipeline that extracts, cleans, transforms and processes global bank market-cap data via web scraping.",
    stack: ["Python", "Pandas", "Web Scraping", "SQLite", "SQL"],
    features: [
      "Extraction via web scraping",
      "Currency conversion and transformation logic",
      "Loading into CSV and SQLite with SQL querying",
      "ETL process logging",
    ],
    contribution:
      "Designed and implemented the full ETL flow — extraction, cleaning, transformation, loading and logging.",
  },
  {
    id: "aws-cloud-infrastructure",
    name: "AWS-Based Cloud Infrastructure",
    category: "cloud",
    featured: true,
    visual: "cloud-topology",
    problem:
      "Applications need infrastructure that's secure, observable and able to scale — not just a single server.",
    built:
      "Cloud infrastructure on AWS covering compute, storage, networking, identity, monitoring and scaling.",
    stack: ["AWS", "EC2", "S3", "IAM", "VPC", "RDS", "CloudWatch", "ELB", "Auto Scaling"],
    features: [
      "Secure networking via VPC",
      "Identity and access management with IAM",
      "Monitoring via CloudWatch",
      "Load balancing and auto scaling for availability",
    ],
    contribution:
      "Designed and deployed the infrastructure following cloud computing best practices for security and scalability.",
  },

  {
    id: "sales-bi-dashboard",
    name: "Sales & Business Intelligence Dashboard",
    category: "business-intelligence",
    featured: true,
    visual: "dashboard",
    problem:
      "Raw sales data across products, regions and time needs to become clear, decision-ready insight instead of static reports.",
    built:
      "An interactive Power BI dashboard built on cleaned sales data, with full data modeling, Power Query transformations, DAX measures, KPIs and drill-down analysis.",
    stack: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    features: [
      "Data modeling and Power Query ETL transformations",
      "DAX measures and KPIs for revenue and profit",
      "Drill-down analysis across products and regions",
      "Sales trend and regional performance visualizations",
    ],
    contribution:
      "Built the full dashboard end to end — data modeling, Power Query transformations, DAX measures, KPIs and business-focused visualizations covering revenue, profit, sales trends, product performance and regional insights.",
  },
  {
    id: "ecommerce-bi-dashboard",
    name: "E-Commerce Business Intelligence Dashboard",
    category: "business-intelligence",
    featured: true,
    visual: "dashboard",
    problem:
      "E-commerce orders, products, customers and delivery data are hard to read as separate tables — the business needs one place to see performance end to end.",
    built:
      "An end-to-end Power BI dashboard analyzing orders, revenue, profit, products, customers and delivery performance on a star schema.",
    stack: ["Power BI", "Power Query", "DAX", "Star Schema"],
    features: [
      "Star schema data model for scalable analysis",
      "Power Query ETL for orders, products and customer data",
      "Advanced DAX calculations for revenue and profit",
      "Customer and delivery performance insights",
    ],
    contribution:
      "Designed the end-to-end dashboard — star schema modeling, Power Query ETL, DAX calculations and interactive business insight visualizations.",
  },

  // Archive-only projects
  {
    id: "ml-multiclass-classification",
    name: "Machine Learning Multi-Class Classification System",
    category: "machine-learning",
    featured: false,
    problem: "A single model rarely gives the best classification accuracy on its own.",
    built:
      "A Voting Classifier combining Logistic Regression, Random Forest and SVM to improve prediction accuracy through ensemble learning.",
    stack: ["Python", "Scikit-learn", "Ensemble Learning"],
    features: ["Voting Classifier across three base models", "Improved accuracy via ensembling"],
    contribution: "Built and evaluated the ensemble classifier in Python.",
    link: "https://github.com/Hamia974/Artificial-Intelligence-Project",
    linkLabel: "View on GitHub",
  },
  {
    id: "retail-sales-analysis",
    name: "Retail Sales Analysis using PostgreSQL",
    category: "data-engineering",
    featured: false,
    problem: "1,000 real-world retail sales records need to become actionable business insight.",
    built:
      "A SQL-based retail sales analysis project using PostgreSQL to generate sales and customer insights.",
    stack: ["PostgreSQL", "SQL"],
    features: ["Aggregations and CASE statements", "Date functions and reporting queries"],
    contribution: "Wrote the full analytical query set and reporting logic.",
  },
  {
    id: "ecommerce-etl-pipeline",
    name: "E-Commerce ETL Pipeline",
    category: "data-engineering",
    featured: false,
    problem: "Raw e-commerce CSV/JSON exports are messy and inconsistent across sources.",
    built:
      "An ETL pipeline using Python and Pandas to extract, clean, transform, validate and process CSV/JSON data into analytics-ready datasets.",
    stack: ["Python", "Pandas"],
    features: ["Data quality checks and duplicate handling", "Type conversion, joins and sales aggregations"],
    contribution: "Built the pipeline end to end from raw files to analytics-ready output.",
  },
  {
    id: "sql-analytics",
    name: "SQL Analytics & Database",
    category: "data-engineering",
    featured: false,
    problem: "Interview-level SQL fluency requires real, documented practice — not just syntax recall.",
    built:
      "An interview-focused SQL portfolio solving real-world business queries and database scenarios in PostgreSQL.",
    stack: ["PostgreSQL", "SQL"],
    features: ["Documented solutions to business query scenarios", "Data transformation practice"],
    contribution: "Ongoing self-directed practice and documentation.",
  },
  {
    id: "food-delivery",
    name: "Full-Stack Food Delivery Web Application",
    category: "full-stack",
    featured: false,
    problem: "Food ordering needs a responsive, component-driven interface.",
    built: "A fully responsive web app with dynamic UI components for a food delivery experience.",
    stack: ["React", "Tailwind CSS"],
    features: ["Responsive layout", "Dynamic UI components"],
    contribution: "Built the frontend application.",
  },
  {
    id: "wanderwise",
    name: "WanderWise — Tourism Web Application",
    category: "full-stack",
    featured: false,
    problem: "Tourism platforms need to present destinations clearly without overwhelming the visitor.",
    built: "A responsive tourism platform optimized for user experience.",
    stack: ["React", "Tailwind CSS"],
    features: ["Responsive destination browsing", "UX-focused layout"],
    contribution: "Built the frontend application.",
  },
  {
    id: "retro-vision",
    name: "Retro Vision — AR-Based Historical Visualization App",
    category: "academic",
    featured: false,
    problem: "Historical events are hard to make tangible in a classroom setting.",
    built:
      "An interactive AR application concept to visualize historical events and enhance educational engagement.",
    stack: ["Figma", "AR/UX Design"],
    features: ["Interactive AR interaction design", "Educational engagement focus"],
    contribution: "Designed the interactive experience and interface in Figma.",
  },
  {
    id: "library-management",
    name: "Library Management System",
    category: "academic",
    featured: false,
    problem: "Managing books, members and borrowing needs a clean object model.",
    built:
      "A system built on Object-Oriented Programming principles — encapsulation, inheritance, polymorphism and abstraction.",
    stack: ["OOP"],
    features: ["Book, member and borrowing management", "Full OOP design"],
    contribution: "Designed and implemented the full object model and application logic.",
  },
  {
    id: "dsa-project",
    name: "Data Structures and Algorithms Project",
    category: "academic",
    featured: false,
    problem: "Self-balancing trees and prefix search structures need to be implemented, not just studied.",
    built: "Red-Black Tree and Trie data structures implemented from scratch.",
    stack: ["C++", "Data Structures", "Algorithms"],
    features: ["Self-balancing Red-Black Tree", "Trie for prefix searching"],
    contribution: "Implemented both structures and optimized core operations.",
    link: "https://github.com/Hamia974/DSArepository/tree/3ac3f3528243b606de6624908edc9ac083107802/projects",
    linkLabel: "View on GitHub",
  },
  {
    id: "thalassemia-management",
    name: "Thalassemia Patient Management System",
    category: "academic",
    featured: false,
    problem: "Patients, doctors, appointments and medical records need a properly normalized relational model.",
    built:
      "A relational database designed with ERD, relational schema design and normalization to manage patient care records.",
    stack: ["SQL", "ERD", "Database Design"],
    features: ["Normalized relational schema", "Queries, joins, views and constraints"],
    contribution: "Designed the schema and implemented the full query layer.",
  },
  {
    id: "agile-mobile-app",
    name: "Agile-Based Mobile Application Development",
    category: "academic",
    featured: false,
    problem: "A mobile app project needed a full SDLC process, not just code.",
    built:
      "A mobile application built with MIT App Inventor following Agile methodology, from requirements to testing.",
    stack: ["MIT App Inventor", "UML", "Agile"],
    features: ["Use Case, Sequence and Class diagrams", "Data Flow Diagrams and full SDLC documentation"],
    contribution: "Led requirements analysis, UML design and testing across the SDLC.",
  },
  {
    id: "university-network",
    name: "University Network Infrastructure",
    category: "academic",
    featured: false,
    problem: "A university campus needs secure, reliable connectivity across departments.",
    built:
      "A scalable campus network in Cisco Packet Tracer with LANs, VLAN segmentation, routing and switching.",
    stack: ["Cisco Packet Tracer", "Networking", "VLAN", "DHCP"],
    features: ["VLAN segmentation", "Routing protocols and DHCP configuration"],
    contribution: "Designed and configured the full network topology.",
  },
  {
    id: "flipmart",
    name: "FlipMart",
    category: "full-stack",
    featured: false,
    problem: "E-commerce interfaces need clear navigation and search to be usable.",
    built:
      "A responsive e-commerce website inspired by Flipkart, with product listings, category navigation and search.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: ["Product listings and category navigation", "Search functionality"],
    contribution: "Built the full frontend interface.",
    link: "https://github.com/Hamia974/Flipmart-assigment3",
    linkLabel: "View on GitHub",
  },
  {
    id: "voyage",
    name: "Voyage",
    category: "full-stack",
    featured: false,
    problem: "Travel websites need to make destinations and booking information easy to browse.",
    built:
      "A responsive travel website showcasing destinations, tour packages and booking information.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: ["Destination and tour package showcase", "Interactive booking flow"],
    contribution: "Designed and built the full site.",
    link: "https://github.com/Hamia974/Voyage-Project",
    linkLabel: "View on GitHub",
  },
  {
    id: "dream-agency",
    name: "Dream Agency Website",
    category: "full-stack",
    featured: false,
    problem: "A digital agency needs a modern site to showcase services and past work.",
    built:
      "A modern business website featuring service portfolios, project showcases, team profiles and contact forms.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: ["Service and project showcases", "Team profiles and contact forms"],
    contribution: "Designed and built the full site.",
  },
  {
    id: "hci-app-design",
    name: "App Design — HCI Project",
    category: "academic",
    featured: false,
    problem: "A mobile app concept needed a modern, usable interface designed from HCI principles.",
    built: "A complete UI/UX design for a mobile application, designed in Figma.",
    stack: ["Figma", "UI/UX Design"],
    features: ["Full interface design system", "HCI-driven interaction design"],
    contribution: "Designed the full UI/UX in Figma.",
    link: "https://www.figma.com/design/2BqC4F9lOr9FWAajsxjGRL/hci-project",
    linkLabel: "View on Figma",
  },
  {
    id: "ui-practice-collection",
    name: "UI Practice Collection",
    category: "academic",
    featured: false,
    problem: "Frontend fundamentals need repetition across varied real-world UI briefs.",
    built:
      "A collection of responsive landing pages and forms — construction, coffee shop, fashion, photography, food and registration UI builds.",
    stack: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    features: ["Multiple responsive landing page builds", "Form and layout practice across varied briefs"],
    contribution: "Designed and built each page independently.",
    link: "https://github.com/Hamia974/Web-Development",
    linkLabel: "View on GitHub",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
