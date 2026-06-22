export type Project = {
  slug: string;
  name: string;
  period: string;
  oneLiner: string;
  stack: string[];
  github?: string;
  liveDemo?: string;
  liveDemoNote?: string;
  problemStatement: string;
  businessObjective: string;
  solution: string;
  architecture: {
    overview: string;
    components: { name: string; detail: string }[];
  };
  workflow: string[];
  features: string[];
  screenshots: { caption: string }[];
  challenges: { title: string; detail: string }[];
  lessonsLearned: string[];
  futureImprovements: string[];
  recognition?: string;
};

export const projects: Project[] = [
  {
    slug: "smart-classroom-analytics",
    name: "AI Powered Smart Classroom Analytics System",
    period: "2025 – 2026",
    oneLiner:
      "A computer vision system that tracks student presence and attention during class and turns that into dashboards instructors can actually use.",
    stack: ["Python", "OpenCV", "Scikit-learn", "Pandas", "Streamlit", "SQLite"],
    github: "https://github.com/jpriyadharshini29-wq/ai-powered-smart-classroom-analytics",
    liveDemo: "https://jpriyadharshini29-wq-ai-powered-smart-classroom-anal-app-m5tbud.streamlit.app/",
    problemStatement:
      "Instructors had no easy way to know how engaged a class actually was during a session. Attendance sheets only record who showed up, not who was paying attention, and by the time test scores reveal a problem, the semester is half over.",
    businessObjective:
      "Give instructors a same-day, per-session view of presence and engagement so they can adjust teaching pace and content before a pattern of disengagement turns into a drop in grades.",
    solution:
      "I used OpenCV to detect faces and estimate presence and attention in real time from a classroom video feed. Each session's readings are written to SQLite so trends can be tracked across sessions instead of judged from a single snapshot. On top of the raw detections, I trained a Scikit-learn classifier on engagement and behavior data, and built a Streamlit dashboard that presents per-session KPIs in language meant for an instructor, not a data scientist.",
    architecture: {
      overview:
        "A single-process pipeline: a video capture module feeds frames to the detection layer, detection output is aggregated and classified, results are persisted, and the dashboard reads from that persisted store rather than the live feed directly — so the dashboard stays responsive even while detection is running.",
      components: [
        { name: "Capture layer", detail: "Pulls frames from the classroom camera feed at a fixed sampling rate to avoid overloading the detection step." },
        { name: "Detection layer (OpenCV)", detail: "Runs face detection per sampled frame and estimates presence and a coarse attention signal per detected face." },
        { name: "Classification layer (Scikit-learn)", detail: "Takes aggregated per-session behavior features and classifies overall session engagement." },
        { name: "Storage (SQLite)", detail: "Stores per-session aggregates, not raw frames, keeping the database small and queryable for trend analysis." },
        { name: "Dashboard (Streamlit)", detail: "Reads from SQLite and renders per-session KPIs, trend charts, and instructor-facing summaries." },
      ],
    },
    workflow: [
      "Camera feed is sampled at a fixed interval rather than processed frame-by-frame, to keep the pipeline real-time on modest hardware.",
      "Each sampled frame goes through face detection; presence and attention are estimated per detected face.",
      "Per-frame readings are aggregated into per-session features (average presence, attention variance, occupancy over time).",
      "The trained classifier scores overall session engagement from those aggregated features.",
      "Aggregates and classification results are written to SQLite, keyed by session.",
      "The Streamlit dashboard queries SQLite on load and on refresh, rendering KPIs and trend lines across sessions.",
    ],
    features: [
      "Real-time presence and occupancy detection from a live or recorded classroom feed",
      "Per-session attention scoring using a trained classifier rather than a hand-tuned heuristic",
      "Session-over-session trend view so instructors can see whether engagement is improving or declining",
      "Instructor-facing KPI dashboard built in Streamlit, with no data-science background required to read it",
    ],
    screenshots: [
      { caption: "Dashboard overview — per-session KPI cards" },
      { caption: "Trend view across multiple sessions" },
      { caption: "Detection overlay on a sample classroom frame" },
    ],
    challenges: [
      {
        title: "Inconsistent detection quality across lighting and camera angle",
        detail:
          "Getting consistent attention readings from a live camera feed was harder than expected — lighting changes and camera angle shifted detection quality session to session. I tuned detection thresholds and added smoothing across frames so the numbers didn't jump around unrealistically between sessions.",
      },
      {
        title: "Aggregating noisy per-frame signals into something trustworthy",
        detail:
          "A single frame's attention estimate is noisy. I had to design the aggregation step carefully — averaging over a sliding window rather than trusting any single reading — before the per-session numbers were stable enough to put in front of an instructor.",
      },
    ],
    lessonsLearned: [
      "This was my first time working with a live video pipeline end to end — capture, process, store, visualize — and most of the real engineering time went into the plumbing around the model, not the model itself.",
      "A dashboard is only as trustworthy as the aggregation logic behind it; smoothing and windowing decisions matter as much as the detector.",
    ],
    futureImprovements: [
      "Test detection across multiple camera angles and group sizes rather than a single fixed angle.",
      "Add a simple way for instructors to flag false positives so the classifier can improve from real feedback over time.",
    ],
    recognition:
      "Recognized by NSTI Chennai with a Certificate of Achievement, supported by Microsoft and implemented by Edunet Foundation, for outstanding performance on this project under the AIPA program.",
  },
  {
    slug: "resume-screening-candidate-matching",
    name: "Resume Screening & Candidate Matching System",
    period: "2026",
    oneLiner:
      "An NLP pipeline that scores resumes against a job description and ranks candidates, with an API layer and a side-by-side comparison dashboard.",
    stack: ["Python", "NLP", "Scikit-learn", "SQLite", "REST API", "Streamlit"],
    github: "https://github.com/jpriyadharshini29-wq/resume-screening-candidate-matching-system",
    liveDemo: "https://nlp-project-resume-screeningnlp--rzbwbt.streamlit.app/",
    problemStatement:
      "Manually comparing resumes against a job description doesn't scale past a handful of candidates, and scoring people by eye tends to be inconsistent — the tenth resume of the day doesn't get read as carefully as the first.",
    businessObjective:
      "Let a recruiter or hiring manager rank a batch of resumes against a job description consistently, and free up their time to focus on the candidates who actually score well.",
    solution:
      "I built a pipeline that vectorizes resumes and job descriptions using TF-IDF, then scores each candidate against a job description using cosine similarity. Profiles, scores, and job metadata are stored in SQLite. On top of the scoring pipeline, I built a REST API so resume submission and scoring can happen asynchronously, and a Streamlit frontend where scores update live and candidates can be compared side by side.",
    architecture: {
      overview:
        "A three-layer system: an ingestion and preprocessing layer that cleans raw resume text, a scoring layer that vectorizes and compares text, and an API + frontend layer that exposes results for human review.",
      components: [
        { name: "Preprocessing", detail: "Strips formatting noise from resumes (headers, bullet artifacts, inconsistent section names) before vectorization." },
        { name: "TF-IDF vectorizer", detail: "Converts cleaned resume text and the job description into comparable vector representations." },
        { name: "Scoring engine", detail: "Computes cosine similarity between each candidate vector and the job description vector to produce a ranking." },
        { name: "REST API", detail: "Accepts resume submissions and triggers scoring asynchronously, so the frontend isn't blocked waiting on processing." },
        { name: "SQLite store", detail: "Persists candidate profiles, scores, and job metadata for later retrieval and comparison." },
        { name: "Streamlit frontend", detail: "Displays live-updating scores and a side-by-side candidate comparison view." },
      ],
    },
    workflow: [
      "A resume is submitted through the REST API.",
      "The text is cleaned — headers, inconsistent bullet styles, and section-name variations are normalized.",
      "The cleaned text is vectorized with TF-IDF, alongside the job description.",
      "Cosine similarity between the candidate vector and the job description vector produces a match score.",
      "The score, profile, and job metadata are written to SQLite.",
      "The Streamlit frontend polls or queries the API/database and updates the ranking and comparison view.",
    ],
    features: [
      "Asynchronous resume submission and scoring through a REST API",
      "TF-IDF + cosine similarity scoring against a job description",
      "Live-updating ranked list of candidates as new resumes are scored",
      "Side-by-side comparison view for shortlisted candidates",
    ],
    screenshots: [
      { caption: "Ranked candidate list with match scores" },
      { caption: "Side-by-side resume comparison view" },
    ],
    challenges: [
      {
        title: "Formatting noise was breaking vectorization quality",
        detail:
          "TF-IDF is sensitive to how resumes are formatted — bullet points, headers, and inconsistent section names all affect the resulting vectors. I had to write a fair amount of text-cleaning logic before scoring became reliable across different resume formats.",
      },
    ],
    lessonsLearned: [
      "Cosine similarity is simple to implement but easy to misuse if the inputs aren't cleaned first — preprocessing turned out to be the actual hard part of the project, not the scoring math.",
    ],
    futureImprovements: [
      "TF-IDF treats words independently and misses context — testing a transformer-based embedding model is the natural next step to see how much ranking quality actually improves.",
      "Add configurable weighting for specific must-have skills rather than treating the whole job description as one flat signal.",
    ],
  },
  {
    slug: "employee-attrition-analytics-dashboard",
    name: "Employee Attrition Analytics Dashboard",
    period: "2026",
    oneLiner:
      "An HR dashboard with 15+ DAX measures that breaks down attrition by tenure and department, built for people who need answers, not a spreadsheet.",
    stack: ["Power BI", "DAX", "Excel", "Relational Data Modeling"],
    github: "https://github.com/jpriyadharshini29-wq/employee-attrition-analytics-dashboard",
    problemStatement:
      "HR teams often have the data to understand why people leave, but it's spread across tables that don't talk to each other, so the patterns stay invisible until someone manually stitches the data together.",
    businessObjective:
      "Give HR and people-leadership a self-serve view of attrition by department and tenure band, so retention conversations are backed by numbers instead of anecdotes.",
    solution:
      "I modeled the relational data across multiple tables in Power BI and Excel, then built out 15+ DAX measures covering attrition rate, tenure distribution, and department-level trends. Slicers and drill-through reports let someone move from a high-level number down to the specific department or tenure band driving it, without needing to request a new view each time.",
    architecture: {
      overview:
        "A star-schema-style data model in Power BI: a central employee fact table joined to dimension tables for department, tenure band, and exit reason, with DAX measures layered on top for each KPI.",
      components: [
        { name: "Data model", detail: "Employee records joined to department, tenure-band, and exit-reason dimension tables with explicit relationship directions." },
        { name: "DAX measure layer", detail: "15+ measures covering attrition rate, average tenure, department-level breakdowns, and trend-over-time calculations." },
        { name: "Slicers & drill-through", detail: "Lets a viewer filter by department or tenure band and drill from a summary number into the underlying detail." },
        { name: "Excel staging", detail: "Used for initial cleaning and modeling of relational tables before loading into Power BI." },
      ],
    },
    workflow: [
      "Raw HR data is cleaned and structured into relational tables in Excel.",
      "Tables are loaded into Power BI and joined into a data model with explicit relationships.",
      "DAX measures are written on top of the model for attrition rate, tenure distribution, and department trends.",
      "Slicers and drill-through reports are added so a viewer can move from summary to department-level detail.",
      "The dashboard is shared as an executive-level summary view for retention strategy discussions.",
    ],
    features: [
      "15+ DAX measures covering attrition rate, tenure distribution, and department trends",
      "Drill-through reports from summary KPIs down to department-level detail",
      "Dynamic slicers for filtering by department and tenure band",
      "Executive-level summary views designed for retention-strategy discussions",
    ],
    screenshots: [
      { caption: "Executive summary view with top-line attrition KPIs" },
      { caption: "Department-level drill-through report" },
    ],
    challenges: [
      {
        title: "Relationship direction errors in the data model",
        detail:
          "Getting the relationships between tables right took a few attempts — a wrong relationship direction quietly produces wrong numbers, and DAX doesn't warn you about it. I had to verify several measures against manually calculated numbers before trusting the model.",
      },
    ],
    lessonsLearned: [
      "Most of the value in a BI dashboard comes from the data model, not the visuals — if the model is wrong, no amount of formatting fixes the dashboard.",
    ],
    futureImprovements: [
      "Add a predictive layer that uses historical attrition data to flag employees at higher risk of leaving, instead of only reporting on attrition after it happens.",
    ],
  },
  {
    slug: "smart-home-energy-prediction",
    name: "Smart Home Energy Consumption Prediction System",
    period: "2026",
    oneLiner:
      "A forecasting system for household energy use, built around seasonal patterns and appliance-level correlations rather than a single blended number.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "SQLite", "Streamlit"],
    github: "https://github.com/jpriyadharshini29-wq/Smart-Home-Energy-Prediction",
    liveDemo: "https://jpriyadharshini29-wq-smart-home-energy-prediction-app-dldlmc.streamlit.app/",
    problemStatement:
      "Most simple energy estimates ignore seasonality and treat all usage as one signal, which makes them inaccurate for planning consumption from one month to the next.",
    businessObjective:
      "Give a household a forecast of energy consumption that accounts for seasonal patterns, with enough confidence information attached to make the forecast useful for planning rather than just informative.",
    solution:
      "I ran exploratory data analysis on time-series energy data to surface seasonal patterns and correlations between appliances, then combined regression and classification models for the forecast itself. Results are stored in SQLite so past forecasts can be queried later, and the Streamlit dashboard shows KPI charts, forecast confidence indicators, and exportable summary reports.",
    architecture: {
      overview:
        "An EDA-driven modeling pipeline: exploratory analysis informs feature selection, a combined regression/classification approach produces the forecast and a confidence signal, and results are persisted for historical comparison.",
      components: [
        { name: "EDA module", detail: "Surfaces seasonal patterns and appliance-level correlations that inform which features feed the model." },
        { name: "Regression model", detail: "Forecasts expected energy consumption based on historical and seasonal features." },
        { name: "Classification model", detail: "Estimates a confidence band or risk category around the regression forecast." },
        { name: "SQLite store", detail: "Stores historical forecasts so they can be queried and compared against actual usage later." },
        { name: "Streamlit dashboard", detail: "Renders KPI charts, confidence indicators, and exportable summary reports." },
      ],
    },
    workflow: [
      "Time-series energy data is loaded and explored for seasonal patterns and appliance-level correlations.",
      "Features informed by the EDA step are built for both the regression and classification models.",
      "The regression model produces the consumption forecast; the classification model attaches a confidence signal.",
      "Forecast results are written to SQLite, keyed by time period.",
      "The Streamlit dashboard reads from SQLite to render KPI charts and exportable reports.",
    ],
    features: [
      "Combined regression + classification forecasting, rather than a single point estimate",
      "Seasonal pattern detection feeding directly into model features",
      "Forecast confidence indicators alongside the predicted numbers",
      "Exportable summary reports for business or household consumption review",
    ],
    screenshots: [
      { caption: "Forecast dashboard with confidence indicators" },
      { caption: "Seasonal pattern breakdown from the EDA step" },
    ],
    challenges: [
      {
        title: "Data leakage in the time-series split",
        detail:
          "Time-series data leaks information from the future into training if the split isn't handled carefully. I rebuilt the train/test split more than once after noticing suspiciously good early results that didn't hold up on genuinely unseen data.",
      },
    ],
    lessonsLearned: [
      "Forecast confidence matters as much as the forecast itself — a number without a sense of how reliable it is isn't very useful for planning.",
    ],
    futureImprovements: [
      "Extend the model to per-appliance forecasts instead of whole-household totals, which would make the recommendations more actionable.",
    ],
  },
  {
    slug: "recipe-collection-dashboard",
    name: "Recipe Collection Dashboard",
    period: "2025",
    oneLiner:
      "A Flask backend that pulls from a third-party recipe API and keeps a normalized, automatically refreshing local database.",
    stack: ["Python", "Flask", "SQLite", "REST API", "Streamlit"],
    github: "https://github.com/jpriyadharshini29-wq/recipe-collection-dashboard",
    liveDemo: "https://jpriyadharshini29-wq-recipe-collecti-recipe-collectorapp-pgaqeq.streamlit.app/",
    liveDemoNote: "This demo is mid-redeploy and may show an error until the next push finishes.",
    problemStatement:
      "Pulling from a live third-party API every time a user needs data is slow and fragile — a local, normalized copy that's kept fresh on a schedule is far more reliable.",
    businessObjective:
      "Provide fast, reliable access to recipe data for an end user without depending on a third-party API's response time or availability at request time.",
    solution:
      "I built a Flask backend that integrates with a third-party REST API for recipe discovery and stores everything in a normalized SQLite schema, with separate tables for ingredients and categories instead of one flat table. A scheduled ETL routine refreshes the data automatically so the Streamlit frontend is never working from stale results.",
    architecture: {
      overview:
        "An ETL-backed web app: a scheduled job pulls from the third-party API and normalizes the data into SQLite, while the Flask backend and Streamlit frontend always read from the local store rather than the live API.",
      components: [
        { name: "ETL job", detail: "Runs on a schedule, pulls from the third-party recipe API, and writes normalized records into SQLite." },
        { name: "Normalized schema", detail: "Separate tables for recipes, ingredients, and categories rather than one denormalized table, avoiding duplicate ingredient/category data." },
        { name: "Flask backend", detail: "Serves recipe data to the frontend from the local SQLite store." },
        { name: "Streamlit frontend", detail: "Lets a user browse and search the recipe collection without waiting on third-party API latency." },
      ],
    },
    workflow: [
      "A scheduled ETL job calls the third-party recipe API.",
      "Returned data is split into normalized records — recipes, ingredients, categories — and written to SQLite.",
      "The Flask backend exposes endpoints that read from SQLite rather than calling the third-party API directly.",
      "The Streamlit frontend queries the Flask backend to display and search the recipe collection.",
    ],
    features: [
      "Normalized SQLite schema with separate ingredient and category tables",
      "Scheduled ETL refresh so data stays current without manual intervention",
      "Flask REST endpoints decoupling the frontend from third-party API latency",
      "Searchable Streamlit interface for browsing the recipe collection",
    ],
    screenshots: [
      { caption: "Recipe browsing and search interface" },
      { caption: "Recipe detail view with ingredient breakdown" },
    ],
    challenges: [
      {
        title: "Avoiding duplicate ingredients and categories across recipes",
        detail:
          "Designing the schema so ingredients and categories didn't duplicate across recipes took a couple of redesigns before the normalization felt right.",
      },
    ],
    lessonsLearned: [
      "There's a real difference between storing data and modeling data — normalizing the schema early saved a lot of cleanup work later in the project.",
    ],
    futureImprovements: [
      "Move from a timer-based refresh to an event-driven one, refreshing only when the source data actually changes.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
