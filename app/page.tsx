import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { AboutSnapshot } from "@/components/sections/about-snapshot";
import { HomeCta } from "@/components/sections/home-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedProjects />
      <AboutSnapshot />
      <HomeCta />
    </>
  );
}
