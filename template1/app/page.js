import Hero from "@/components/Hero";
import DockNav from "@/components/DockNav";
import Top from "@/components/Top";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-background flex w-full justify-center">
    <main className="w-[40%] mt-25">
      <Top />
      <DockNav />
      <Hero />
      <About />
    </main>
    </div>
  )
}
