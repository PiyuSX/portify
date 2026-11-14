import Hero from "@/components/Hero";
import DockNav from "@/components/DockNav";
import Top from "@/components/Top";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GithubActivity from "@/components/GithubActivity";
import TechStack from "@/components/TechStack";
import ReelSection from "@/components/ReelSection";

export default function Home() {
  return (
    <div className="bg-background flex w-full justify-center">
    <main className="w-[35%] mt-25">
      <Top />
      <DockNav />
      <Hero />
      <About />
      <GithubActivity />
      <Projects />
      <TechStack />
      <ReelSection />
    </main>
    </div>
  )
}
