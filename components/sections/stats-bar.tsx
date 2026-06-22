import { Code2, Rocket, GraduationCap, Award } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";
import { certifications } from "@/data/achievements";

export function StatsBar() {
  const liveDemoCount = projects.filter((p) => p.liveDemo).length;

  const stats = [
    { icon: Code2, value: `${projects.length}`, label: "Projects" },
    { icon: Rocket, value: `${liveDemoCount}`, label: "Live Applications" },
    { icon: GraduationCap, value: "2+", label: "Years Experience" },
    { icon: Award, value: `${certifications.length}+`, label: "Certifications" },
  ];

  return (
    <section className="section-shell border-t border-border py-10 sm:py-12">
      <Reveal>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon size={18} />
              </div>
              <div>
                <p className="font-display text-xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
