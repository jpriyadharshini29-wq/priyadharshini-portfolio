import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { education } from "@/data/experience";

export const metadata: Metadata = {
  title: "Education",
  description: "B.Tech in Information Technology from Jerusalem College of Engineering, Anna University.",
};

export default function EducationPage() {
  return (
    <div className="section-shell">
      <SectionLabel index="education">Education</SectionLabel>
      <Reveal>
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-foreground">{education.degree}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{education.institute}</p>
          <p className="text-sm text-muted-foreground">{education.location}</p>
          <div className="mt-4 flex gap-6 font-mono text-xs text-muted-foreground/80">
            <span>{education.period}</span>
            <span>Aggregate: {education.aggregate}</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
