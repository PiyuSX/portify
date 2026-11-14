"use client";
import { FaInstagram } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Data from "@/data/data.js";

const getEmbedUrl = (reel, theme) => {
  const base = reel.split("?")[0].replace(/\/$/, "");
  return `${base}/embed/captioned/${theme === "dark" ? "?theme=dark" : ""}`;
};

const ReelSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex flex-col gap-6 py-7">
      <span className="text-sm">/ ME IN MY FREE TIME</span>
      <a
        href="https://www.instagram.com/piyusX.builds/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <FaInstagram />
        <span>Follow me on Instagram</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>

      <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div className="flex gap-4 w-max">
          {mounted &&
            Data.reels.map((reel) => (
              <div key={reel} className="w-[340px] shrink-0 snap-start">
                <iframe
                  key={resolvedTheme} // forces reload when theme changes
                  src={getEmbedUrl(reel, resolvedTheme)}
                  className="w-full h-[600px] rounded-lg border-0"
                  allowTransparency
                  scrolling="no"
                  loading="lazy"
                />
              </div>
            ))}
        </div>
      </div>
    <div className="border-b my-6"></div>

    </div>
  );
};

export default ReelSection;