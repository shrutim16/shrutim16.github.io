"use client";
 
import React, { useState } from "react";
import { useSectionInView } from "@/common/lib/hooks";
import { projectsData } from "@/common/lib/data";
import Project from "./_components/project";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";
import Image, { StaticImageData } from 'next/image';
 
const NewComponent = ({ detailedDescription, extraImages }: { readonly detailedDescription: readonly String[], readonly extraImages: readonly StaticImageData[] }) => {
 
  return (
    <div className="mb-3 last:mb-0 sm:mb-8 relative max-w-[52rem] overflow-hidden rounded-lg border transition hover:bg-gray-200 dark:hover:bg-primary-foreground text-black">
      <div className="flex flex-col px-5 pb-7 pt-4 sm:pl-10 sm:pr-2 sm:pt-10">
        {detailedDescription.map((dsc, index) => (
          <div key={index} className={`flex flex-col sm:flex-row mb-4 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
            <div className={`${index < extraImages.length?'sm:max-w-[50%]':''} ${(index < extraImages.length) && index % 2 === 0 ? 'sm:ml-4' : ''}`}>
              <p className="mt-2 leading-relaxed" style={{textAlign: 'justify', marginRight:20}}>{dsc}</p>
            </div>
 
            {extraImages.length > index && extraImages[index] && (
              <div className={`sm:max-w-[50%] ${index % 2 === 0 ? 'sm:mr-4' : ''}`}>
                <Image
                  src={extraImages[index]}
                  alt={`Image ${index}`}
                  className="w-full rounded-t-lg transition-all sm:block"
                />
              </div>
            )}
          </div>
        ))}
 
        {detailedDescription.length === extraImages.length && extraImages.every(img => !img) && (
          <div className="w-full">
            {detailedDescription.map((dsc, index) => (
              <p key={index} className="mt-2 leading-relaxed">{dsc}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
 
 
export default function Projects() {
  const { ref } = useSectionInView("projects", 0.25);
  const [clickedProject, setClickedProject] = useState<string | null>(null);
 
  // Handle click on a project (toggle behavior)
  const handleProjectClick = (projectName: string) => {
    if (clickedProject === projectName) {
      // If the same project is clicked, reset state to null
      setClickedProject(null);
    } else {
      // If a different project is clicked, set the new project
      setClickedProject(projectName);
    }
  };
 
  return (
    <section
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="my-24">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} onClick={() => handleProjectClick(project.title)} />
            {clickedProject == project.title && <NewComponent detailedDescription={project.detailedDescription} extraImages={project.extraImg}/>}
          </React.Fragment>
        ))}
      </div>
      <SectionDivider />
    </section>
  );
}
 