import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "How Priyadharshini J went from customer support to Python development and data analytics.",
};

const timeline = [
  {
    year: "2018–2022",
    title: "B.Tech, Information Technology",
    place: "Jerusalem College of Engineering, Anna University",
    detail: "Aggregate 79%. This is where the foundation in programming and systems thinking started, even if the career path took a detour right after.",
  },
  {
    year: "2023–2025",
    title: "Customer Support Executive",
    place: "Foundever",
    detail: "Two years handling the Avast/AVG Antivirus retention process. This taught me to read data for what it means to a real person, not just what the number says — a habit that carried directly into analytics work.",
  },
  {
    year: "2025",
    title: "Discovered programming, seriously",
    place: "Self-directed",
    detail: "Started building small Python scripts to automate parts of daily reporting at work, which is what pushed me to look for a structured way to go deeper.",
  },
  {
    year: "2025–Present",
    title: "AI Programming Assistant (AIPA)",
    place: "NSTI Chennai, with Microsoft & Edunet Foundation",
    detail: "A government-backed, NCVT-certified program with monthly project deliverables across Python, ML, computer vision, NLP, and Generative AI — not just lectures.",
  },
  {
    year: "2025–2026",
    title: "Built five portfolio projects",
    place: "Independent & coursework-driven",
    detail: "From a computer-vision classroom analytics tool to an HR attrition dashboard in Power BI, each project pushed into a different part of the backend/data stack on purpose.",
  },
  {
    year: "Now",
    title: "Looking for a software role",
    place: "Chennai, India",
    detail: "Open to Python backend developer or data analyst roles where I can keep building things that get used, not just demoed.",
  },
];

export default function AboutPage() {
  return (
    <div className="section-shell">
      <SectionLabel index="about">About</SectionLabel>
      <Reveal>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          {profile.summary} I studied Information Technology, then spent two years in customer
          support before moving into programming. That sequence matters more than it sounds —
          support work means spending all day looking at data through the lens of what it actually
          means for the person on the other end, which turned out to be useful training for data
          analysis. I&apos;m currently in a government-backed AI programming program at NSTI Chennai,
          building real projects month over month rather than just studying theory.
        </p>
      </Reveal>

      <div className="relative mt-14 space-y-10 border-l border-border pl-8">
        {timeline.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.06}>
            <div className="relative">
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <p className="font-mono text-xs text-primary">{t.year}</p>
              <h3 className="mt-1 font-display font-semibold text-foreground">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.place}</p>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
