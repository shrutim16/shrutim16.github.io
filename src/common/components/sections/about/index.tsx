'use client';

import { useSectionInView } from '@/common/lib/hooks';
import portfolioImg from '@/../public/images/photo.jpg';
import { smoothScrollTo } from '@/common/lib/utils';
import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';

export default function About() {
  const { ref } = useSectionInView('about', 0.4);
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      className="z-50 flex h-[1000px] w-full flex-col items-center justify-start leading-8 dark:bg-darkBg dark:text-white md:scroll-mt-4 lg:h-[1100px] lg:scroll-mt-24"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, ease: 'easeInOut' }}
      id="about"
    >
      <div className="flex w-full flex-col items-center pt-8">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          className="w-full overflow-hidden px-4 py-12 sm:w-[60%] sm:text-center lg:h-[700px] lg:w-[1040px] xl:w-[1180px]"
          ref={divRef}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        >
          <div className="antialiased group relative w-full">
            <div className="text-md relative z-40 flex flex-col gap-3 font-normal tracking-wide text-primary lg:absolute lg:right-0 lg:top-[27%] lg:block lg:max-w-[580px] lg:text-start lg:text-lg xl:top-1/3 xl:h-[442px] xl:max-w-[650px]">
              <div className="flex h-full flex-col justify-center gap-6">
                <span>
                Hey there, I'm Shruti! I'm an Electrical Engineer with a passion for building smart, tiny things — from sensors and microsystems 
                to innovative product designs. I'm deeply interested in how things are made, from precision manufacturing and 
                microfabrication to scaling up ideas into real products. Whether it's designing in CAD, 
                refining a manufacturing process, or experimenting with new materials, I love bringing ideas to life. 
                I'm always curious, always learning, and excited to take on new challenges. When I'm not engineering, you’ll find me 
                traveling, cooking, baking, or dreaming up the next big innovation. 
               
                </span>
                
                <p className="flex flex-col items-start sm:items-center lg:items-start">
                  <span>Hit me up and let’s build something incredible together! Cheers!</span>
                  <Link
                    href={'contact'}
                    onClick={(e) => {
                      smoothScrollTo({ e, id: 'contact' });
                    }}
                    className="w-52 lg:w-40"
                  >
                    <span className="bg-[#ffcbb4] text-2xl font-bold uppercase dark:bg-[#ddbea9] lg:normal-case">
                      Contact me!
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="absolute z-30 lg:left-0 lg:top-1/4 lg:block">
              <div className="relative h-72 w-72 lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]">
                <div className="absolute inset-0">
                  <Image
                    src={portfolioImg}
                    alt="portfolio image"
                    placeholder="blur"
                    width={470}
                    height={470}
                    className="z-10 rounded-full lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </motion.section>
  );
}
