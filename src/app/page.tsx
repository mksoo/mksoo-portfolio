import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import Career from "@/app/components/Career";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

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
