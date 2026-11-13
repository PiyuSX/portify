import React from "react";
import Image from "next/image";
import AgeCounter from "./AgeCounter";
import Data from "@/data/data.js";
import { HyperText } from "./ui/hyper-text";


const Hero = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          className="border rounded-full grayscale"
          alt="Profile Pic"
          src="/profile.jpg"
          width={90}
          height={90}
        />

        <div className="text-[0.7rem] *:text-muted-foreground">
          <span>
            been alive for <AgeCounter dob={Data.personal.dob} /> years.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10">
      <div>
        <h1 className="text-5xl font-semibold text-[--foreground-color]">
          {Data.personal.username}
        </h1>
      </div>
      <div>
        <h2>
          <HyperText className="text-2xl">
            {Data.personal.animatedText}
          </HyperText>
        </h2>
      </div>
      <p className="text-base text-muted-foreground w-[70%] leading-7">
        {Data.personal.bio}
      </p>
      <p className="text-sm text-muted-foreground">
        {Data.personal.location}<span className="mx-2">·</span>{Data.personal.role}
      </p>
      </div>

      <div>

      </div>

      <div className="border-b my-6"></div>

    </div>
  );
};

export default Hero;
