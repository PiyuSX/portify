"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import Data from "@/data/data.js";
import Script from "next/script";

const ReelSection = () => {
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
          {Data.reels.map((reel, index) => (
            <div key={index} className="w-[340px] shrink-0 snap-start">
              <blockquote
               className="instagram-media"
               data-instagram-permalink={reel}
               data-instagram-version="14"
              >
                <a href={reel}>View on Instagram</a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onReady={() => {
          window.instgrm?.Embeds?.process();
        }}
      />
    </div>
  );
};

export default ReelSection;
