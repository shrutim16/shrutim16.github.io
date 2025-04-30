"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/lib/hooks";
import SubmitBtn from "./_components/submit-btn";
import SectionHeading from "@/common/components/shared/section-heading";
import toast from "react-hot-toast";
import { sendEmail } from "@/common/utils/actions/send-email";

export default function Contact() {
  const { ref } = useSectionInView("contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center py-20 pb-44 text-center dark:bg-darkBg dark:text-white"
      initial={{
        opacity: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Hit me up!</SectionHeading>
      <div className="w-[min(100%,38rem)] px-4">
        <p className="mb-20 mt-6 text-black-600 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline font-semibold text-blue-600 dark:text-blue/80" href="mailto:mahajasu@mail.uc.edu">
            mahajasu@mail.uc.edu
          </a>{" "}
          or via <a className= "underline font-semibold text-blue-600 dark:text-blue/80" href=" https://www.linkedin.com/in/shrutimahajan/"
          target="_blank"> LinkedIn </a>
        </p>

        
      </div>
    </motion.section>
  );
}
