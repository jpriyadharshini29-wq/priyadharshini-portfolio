import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { achievements } from "@/data/achievements";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Certificate of Achievement from NSTI Chennai, TechSprint Hackathon participation, and Epoch Club leadership.",
};

export default function AchievementsPage() {
  return (
    <div className="section-shell">
      <SectionLabel index="achievements">Achievements</SectionLabel>
      <div className="relative space-y-8 border-l border-border pl-8">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <div className="relative">
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
              <p className="font-mono text-xs text-accent">{a.year}</p>
              <h3 className="mt-1 font-display font-semibold text-foreground">{a.title}</h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
