import React from "react";
import "./project.css";
import Image from "next/image";
import Link from "next/link";
import projectsData from "./../../../public/data/project.json";

export default function Project() {
  return (
    <div className="project">
      <h2 className="mb-[20px] max-md:text-[40px] lg:text-[60px] uppercase">
        Explore My Projects
      </h2>
      <div className="space-y-[40px] mt-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-2 gap-y-[80px] max-sm:gap-y-[40px]">
          {projectsData.project.map((project, index) => (
            <div
              key={index}
              className="flex dark:border-none border pb-[20px] z-4"
            >
              <div className="w-full">
                <img
                  src={`/img/project/${project.gambar}`}
                  className="w-full border dark:border-none"
                  alt={project.tittle}
                />
                <Link href={project.link}>
                  <p className="text-center text-[16px] tracking-[1px] underline mt-[10px]">
                    {project.tittle}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
