import Hero from "@/components/Hero";
import DockNav from "@/components/DockNav";
import { FlickeringGrid } from "@/components/ui/flickering-grid";


export default function Home() {
  return (
    <div className="bg-background flex w-full justify-center">
    <main className="w-[45%] border-b mt-20">
      <FlickeringGrid />
      <DockNav />
      <Hero />
    </main>
    </div>
  )
}
