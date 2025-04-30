'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'next-themes';
import { useHasMounted, useSectionInView } from '@/common/lib/hooks';
import SectionHeading from '@/common/components/shared/section-heading';
import { educationData } from '@/common/lib/data';
import SectionDivider from '@/common/components/shared/section-divider';
import Courses from './_components/courses';

export default function Education() {
  const { ref } = useSectionInView('education');
  const { theme } = useTheme();
  const ihasMounted = useHasMounted();

  return (
    <section
      id="education"
      ref={ref}
      className="w-full scroll-mt-20 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>Education</SectionHeading>
      <VerticalTimeline animate={false}>
        {ihasMounted &&
          educationData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === 'light'
                      ? '0.4rem solid #9ca3af'
                      : '0.4rem solid rgba(255, 255, 255, 0.5)',
                  display: theme === 'dark' ? 'none' : 'block',
                }}
                date={item.date}
                icon={<img src={item.icon}  
                width={100}
                height={100}
                className="rounded-full lg:h-[80px] lg:w-[80px] xl:h-[60px] xl:w-[60px]"
                />}
                iconStyle={{
                  background:
                    theme === 'light' ? '#fff' : 'rgba(255, 255, 255, 0.15)',
                  fontSize: '1.5rem',
                  display: theme === 'dark' ? 'none' : 'flex',
                }}
              >
                <h3 className="font-semibold">{item.university}</h3>
                <p className="!mt-1 font-normal text-gray-700 dark:text-white/75">{item.degree}</p>
                <p className="!mt-1 font-semibold text-gray-700 dark:text-white/75">{item.GPA}</p>
                <p className="!mt-1 font-normal italic text-gray-700 dark:text-white/75">{item.location}</p>
                <Courses courses={item.courses}/>
                  
            
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
      </VerticalTimeline>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}
