"use client";

import { useEffect, useState } from "react";
import Data from "@/data/data.js";
import { FlickeringGrid } from "./ui/flickering-grid";

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="w-full py-10">

      <div className="relative isolate overflow-hidden rounded-2xl border border-border px-6 py-12 sm:py-14">

        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-44"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 100%)",
          }}
        >
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={3}
            flickerChance={0.15}
            color="rgb(128, 128, 128)"
            maxOpacity={0.55}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center gap-4">

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Get in Touch
          </h2>

          <p className="max-w-lg text-sm sm:text-base leading-relaxed text-muted-foreground">
            Wanna chat? Drop me an email. I will be ignoring all soliciting.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {Data.personal.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
              >
                {email}
              </a>
            ))}
          </div>

        </div>
      </div>

      <div className="flex justify-between items-center mt-6 text-xs text-muted-foreground">
        <span>© {year ?? ""} {Data.personal.username}</span>
        <span>{Data.personal.location}</span>
      </div>

    </footer>
  );
};

export default Footer;