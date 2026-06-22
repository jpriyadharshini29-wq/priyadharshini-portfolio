export type SkillGroup = {
  label: string;
  description: string;
  items: { name: string; usedIn: string[] }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming & Backend",
    description: "The languages and frameworks I build APIs and backend services with.",
    items: [
      { name: "Python", usedIn: ["All projects"] },
      { name: "SQL", usedIn: ["Resume Screening System", "Attrition Dashboard"] },
      { name: "FastAPI", usedIn: ["Backend training projects"] },
      { name: "Flask", usedIn: ["Recipe Collection Dashboard"] },
      { name: "REST APIs", usedIn: ["Resume Screening System", "Recipe Collection Dashboard"] },
      { name: "Streamlit", usedIn: ["Classroom Analytics", "Resume Screening", "Energy Prediction", "Recipe Dashboard"] },
      { name: "Jupyter Notebook", usedIn: ["EDA and model prototyping across projects"] },
    ],
  },
  {
    label: "Data Analysis & BI",
    description: "Tools I use to clean, model, and present data to non-technical stakeholders.",
    items: [
      { name: "Pandas", usedIn: ["Classroom Analytics", "Energy Prediction"] },
      { name: "NumPy", usedIn: ["Energy Prediction"] },
      { name: "Scikit-learn", usedIn: ["Classroom Analytics", "Resume Screening", "Energy Prediction"] },
      { name: "Matplotlib", usedIn: ["EDA across projects"] },
      { name: "Seaborn", usedIn: ["EDA across projects"] },
      { name: "Power BI", usedIn: ["Employee Attrition Dashboard"] },
      { name: "DAX", usedIn: ["Employee Attrition Dashboard"] },
      { name: "Excel", usedIn: ["Employee Attrition Dashboard", "Foundever reporting"] },
    ],
  },
  {
    label: "NLP & Machine Learning",
    description: "Techniques I've applied to text and behavioral data.",
    items: [
      { name: "NLTK", usedIn: ["Resume Screening System"] },
      { name: "TF-IDF", usedIn: ["Resume Screening System"] },
      { name: "Cosine Similarity", usedIn: ["Resume Screening System"] },
      { name: "Regression", usedIn: ["Energy Prediction"] },
      { name: "Classification", usedIn: ["Classroom Analytics", "Energy Prediction"] },
      { name: "Reinforcement Learning", usedIn: ["AIPA coursework"] },
      { name: "OpenCV", usedIn: ["Classroom Analytics"] },
    ],
  },
  {
    label: "Databases",
    description: "Where the data actually lives once it's collected.",
    items: [
      { name: "MySQL", usedIn: ["AIPA coursework"] },
      { name: "SQLite", usedIn: ["Classroom Analytics", "Resume Screening", "Energy Prediction", "Recipe Dashboard"] },
      { name: "Relational Modeling", usedIn: ["Employee Attrition Dashboard", "Recipe Dashboard"] },
      { name: "Joins & Subqueries", usedIn: ["AIPA coursework"] },
    ],
  },
  {
    label: "Tools",
    description: "Day-to-day development tooling.",
    items: [
      { name: "Git", usedIn: ["All projects"] },
      { name: "GitHub", usedIn: ["All projects"] },
      { name: "Streamlit Cloud", usedIn: ["Project deployment"] },
      { name: "VS Code", usedIn: ["All projects"] },
    ],
  },
];
