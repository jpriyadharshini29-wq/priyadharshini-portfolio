import Link from "next/link";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function HomeCta() {
  return (
    <section className="section-shell border-t border-border">
      <Reveal>
        <div className="rounded-xl border border-border bg-card p-10 text-center sm:p-14">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Looking for a Python backend developer or data analyst?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            I&apos;m currently open to roles and would like to hear about what you&apos;re building.
          </p>
          <Button asChild className="mt-6">
            <Link href="/contact"><Mail size={15} /> Get in touch</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
