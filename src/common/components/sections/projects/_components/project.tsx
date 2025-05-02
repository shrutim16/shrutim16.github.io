'use client';
 
import React, { useState } from "react";
import { useRef } from 'react';
import { projectsData } from '@/common/lib/data';
import { smoothScrollTo } from "@/common/lib/utils";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
 
type ProjectProps = (typeof projectsData)[number] & {
  onClick?: () => void;
};
 
export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  onClick,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const [clickedProject, setClickedProject] = useState<boolean>(false);
  const [clickClass, setClickClass] = useState<string>("group mb-3 last:mb-0 sm:mb-8");
  const handleProjectClick = (onClick: (() => void) | undefined) => {
    if (clickedProject ) {
      // If the same project is clicked, reset state to null
      setClickedProject(false);
      setClickClass("group mb-3 last:mb-0 sm:mb-8");
    } else {
      // If a different project is clicked, set the new project
      setClickedProject(true);
      setClickClass("group");
    }
    if(onClick)
      onClick()
  };
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className={clickClass}
 
    >
        <section
          className={
            'relative max-w-[52rem] overflow-hidden rounded-lg border transition hover:bg-gray-200 dark:hover:bg-primary-foreground sm:h-[20rem]'
          }
          onClick={()=>handleProjectClick(onClick)}
        >
          <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[60%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold uppercase"> {title}</h3>
            <p className="mt-2 leading-relaxed">{description}</p>
            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
 
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
          />
        </section>
    </motion.div>
  );
}