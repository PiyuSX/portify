"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = () => {
  const [mounted, setMounted] = useState(false);
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    setMounted(true);

    const root = document.documentElement;

    const updateTheme = () => {
      setColorScheme(root.classList.contains("dark") ? "dark" : "light");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const theme = {
    dark: ["#161616", "#064e2b", "#087f42", "#00b957", "#75f0a5"],
    light: ["#e5e5e5", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  };

  return (
    <section className="w-full py-7">
      <span className="text-sm ">/ Github Activity</span>

      <div className="mt-5 w-full overflow-x-auto">
        {mounted ? (
          <GitHubCalendar
            username="PiyuSX"
            colorScheme={colorScheme}
            theme={theme}
            blockSize={8}
            blockMargin={4}
            fontSize={12}
            showMonthLabels
            showTotalCount
            showColorLegend
            tooltips
            className="w-full text-muted-foreground [&_svg]:w-full [&_svg]:h-auto [&_text]:fill-current"
          />
        ) : (
          <div className="h-28 w-full animate-pulse rounded-md bg-muted" />
        )}
      </div>
      <div className="border-b my-6"></div>
    </section>
  );
};

export default GithubActivity;