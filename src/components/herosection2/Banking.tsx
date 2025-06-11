"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { fadeInUp, fadeInLeft } from "@/animations/variants";

interface Props {}

const Banking: NextPage<Props> = ({}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <motion.div
      variants={isMobile ? fadeInLeft : fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-w-36 rounded-2xl bg-gradient-to-br from-[#191919] to-[#101010] p-2 sm:p-3"
    >
      <div className="mb-5 flex justify-between">
        <div>
          <p className="text-secondary text-[7px]">Banking</p>
          <p className="text-sm font-bold">Our Mission</p>
        </div>
      </div>
      <div className="mb-3">
        <p className="text-7b text-[9px]">
          Changing the world in three key ways
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-7b h-[0.1px]"></div>
        <div className="flex items-center gap-2">
          <h1 className="w-6 text-sm font-semibold">1st</h1>
          <p className="text-7b flex-1 text-[7px]">
            Enable quicker absorption of information from audience
          </p>
        </div>
        <div className="bg-7b h-[0.1px]"></div>
        <div className="flex items-center gap-2">
          <h1 className="w-6 text-sm font-semibold">2nd</h1>
          <p className="text-7b flex-1 text-[7px]">
            Enable creators to be proud of the output they create
          </p>
        </div>
        <div className="bg-7b h-[0.1px]"></div>
        <div className="flex items-center gap-2">
          <h1 className="w-6 text-sm font-semibold">3rd</h1>
          <p className="text-7b flex-1 text-[7px]">
            Enable People to fall in love with the process of creations
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Banking;
