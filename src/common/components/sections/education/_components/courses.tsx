'use client';
 
import { useRef } from 'react';
import { educationData } from '@/common/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
 
type CoursesProps = (typeof educationData)[number];
 
export default function Courses({
  courses,
}: CoursesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
 
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
        marginTop: 15,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
 
            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {courses.map((course, index) => (
                <li
                  className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black"
                  key={index}
                >
                  {course}
                </li>
              ))}
            </ul>
 
    </motion.div>
  );
}
 
 
