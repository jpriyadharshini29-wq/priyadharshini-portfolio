import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Programming, backend, data analytics, NLP, and tooling skills, mapped to the projects they were used in.",
};

export default function SkillsPage() {
  return (
    <div className="section-shell">
      <SectionLabel index="skills">Skills</SectionLabel>
      <p className="max-w-2xl text-muted-foreground">
        Every skill below has been used in at least one shipped project — nothing here is a list
        of buzzwords without context. Hover or read into each card to see where it was actually applied.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.06}>
            <Card>
              <CardHeader>
                <CardTitle>{group.label}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <div key={item.name} className="group relative">
                      <Badge>{item.name}</Badge>
                      <div className="pointer-events-none absolute left-0 top-full z-10 mt-2 w-56 rounded-md border border-border bg-card p-2 text-xs text-muted-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                        Used in: {item.usedIn.join(", ")}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
