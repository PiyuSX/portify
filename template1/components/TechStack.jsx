import Data from "@/data/data.js";

const TechStack = () => {
  return (
    <div>
      <span className="text-sm">
        / TECH STACK
      </span>

      <div className="flex flex-wrap items-center gap-3 mt-4">
        {Data.skills.map((skill, index) => (
          <span 
            key={index} 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700 font-medium shadow-sm hover:bg-zinc-800 transition-colors text-sm"
          >
           <div className="grayscale">
            {skill.icon}
            </div> 
            {skill.name}
          </span>
        ))}
      </div>

      <div className="border-b my-6 border-zinc-800"></div>
    </div>
  )
}

export default TechStack;