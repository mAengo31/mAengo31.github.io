import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Principles } from "@/components/principles";
import { Timeline } from "@/components/timeline";
import { Writing } from "@/components/writing";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Principles />
        <div className="section-divider" />
        <Timeline />
        <div className="section-divider" />
        <Writing />
        <div className="section-divider" />
        <Contact />
      </main>
    </>
  );
}
