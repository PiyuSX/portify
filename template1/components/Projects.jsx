
"use client";

import Data from "@/data/data";
import Image from "next/image";
import { ArrowUpRight, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <span className="text-sm">/ Projects</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Data.projects.map((project, index) => {
          return (
            <article
              key={project.name}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/5"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="relative block aspect-[1.85/1] overflow-hidden bg-muted"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-3 py-1.5 text-xs text-white shadow-lg backdrop-blur-md">
                  <Globe size={12} />
                  Live
                </div>
              </a>

              <div className="flex flex-1 flex-col p-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-3"
                >
                  <h3 className="text-base font-semibold tracking-tight transition-colors group-hover:text-muted-foreground">
                    {project.name}
                  </h3>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                  />
                </a>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-foreground/30 px-2.5 py-1 text-xs transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <div className="mt-auto flex justify-end pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} GitHub repository`}
                      className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <FaGithub />
                      Source Code
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                )}
              </div>
            </article>
          );
        })}
        
      </div>
      <div className="border-b my-6"></div>
    </section>
  );
};

export default Projects;
