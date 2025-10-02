import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Career from "@/components/sections/Career";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Skills />
      <Career />
      <Projects />
      <Contact />
    </div>
  );
}
