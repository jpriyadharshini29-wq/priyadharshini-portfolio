"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="section-shell pt-10 sm:pt-14">
      {/* Real, crawlable heading kept for SEO/accessibility — visually hidden because
          the hero image below already communicates this content visually. */}
      <h1 className="sr-only">
        {profile.name} — {profile.role}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="overflow-hidden rounded-2xl border border-border shadow-xl shadow-slate-900/5"
      >
        <Image
          src="/images/hero-bg.png"
          alt={`${profile.name} — Python Developer, Data Analyst, Backend Developer, AI Enthusiast. Building intelligent solutions, turning data into meaningful insights.`}
          width={1536}
          height={1024}
          priority
          className="h-auto w-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start"
      >
        <Button asChild>
          <Link href="/contact"><Mail size={15} /> Get in touch</Link>
        </Button>
        <Button asChild variant="outline">
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Download Resume</a>
        </Button>
        <Button asChild variant="outline">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
        </Button>
        <Button asChild variant="outline">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/projects">View projects <ArrowRight size={15} /></Link>
        </Button>
      </motion.div>
    </section>
  );
}
