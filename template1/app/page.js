import Hero from "@/components/Hero";
import DockNav from "@/components/DockNav";
import Top from "@/components/Top";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-background flex w-full justify-center">
    <main className="w-[35%] mt-25">
      <Top />
      <DockNav />
      <Hero />
      <About />
      <Projects />
    </main>
    </div>
  )
}
