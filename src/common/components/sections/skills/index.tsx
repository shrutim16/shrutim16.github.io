"use client";
 
import React from "react";
import { skillsData } from "@/common/lib/data";
import { useSectionInView } from "@/common/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";
import Skill from "./_components/skill";
 
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
 
export default function Skills() {
  const { ref } = useSectionInView("skills",0.25);
 
  return (
    <section
      id="skills"
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24 pb-[150px] text-center dark:bg-darkBg dark:text-white sm:pb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="my-26 mb-[150px]  max-w-[53rem]  items-center justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="borderBlack mb-[15px] flex items-center justify-center rounded-xl bg-gray-200 px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Skill {...skill}></Skill>
          </motion.li>
        ))}
      </ul>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}
 
 