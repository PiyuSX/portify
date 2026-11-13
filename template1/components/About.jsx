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
        <div className="border-b my-6"></div>
    </div>
  )
}

export default About