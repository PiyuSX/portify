import Data from "@/data/data"

const About = () => {
  return (
    <div className="flex flex-col gap-4">
        <span className="text-sm ">
        / ABOUT
        </span>

        <p className="text-muted-foreground leading-7">
        {Data.about.bio}
        </p>
    </div>
  )
}

export default About