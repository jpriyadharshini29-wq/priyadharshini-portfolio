import type { Metadata } from "next";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ContactForm } from "@/components/sections/contact-form";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Priyadharshini J about Python backend developer or data analyst roles.",
};

export default function ContactPage() {
  return (
    <div className="section-shell">
      <SectionLabel index="contact">Contact</SectionLabel>
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <h3 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance">
            Looking for a Python backend developer or data analyst? I&apos;d like to hear from you.
          </h3>
          <div className="mt-8 space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
              <Mail size={16} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
              <Phone size={16} /> {profile.phone}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
              <Github size={16} /> github.com/jpriyadharshini29-wq
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
              <Linkedin size={16} /> LinkedIn profile
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
