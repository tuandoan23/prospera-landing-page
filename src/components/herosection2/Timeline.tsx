"use client";
import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { fadeInUp, fadeInRight } from "@/animations/variants";
import journey from "@/assets/images/journey.png";

interface Props {}

const timeline = [
  {
    title: "First Concept",
    image: journey,
  },
  {
    title: "All started here",
    description:
      "Everything starts with an idea. A spark that we just could not stop thinking about building.",
  },
  {
    title: "When things got serious",
    description: "When from just an idea to actually...",
  },
];

const Timeline: NextPage<Props> = ({}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <motion.div
      variants={isMobile ? fadeInRight : fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-w-36 rounded-2xl bg-gradient-to-br from-[#191919] to-[#101010] p-2 sm:p-3"
    >
      <div className="mb-5 flex justify-between">
        <div>
          <p className="text-secondary text-[7px]">Timeline</p>
          <p className="text-sm font-bold">Our Journey</p>
        </div>
      </div>
      <div className="relative border-l border-gray-600/40">
        {timeline.map((item, index) => (
          <div key={index} className="relative pb-5 pl-4 last:pb-2">
            <span className="absolute top-0.5 -left-[7px] h-3 w-3 rounded-full border-[1px] border-[#111] bg-white" />
            <div>
              <h3 className="text-xs font-semibold">{item.title}</h3>
              {item.image && (
                <Image
                  src={item.image}
                  alt=""
                  className="my-3 w-full max-w-md rounded-xl"
                />
              )}
              {item.description && (
                <p className="mt-1 text-[7px] leading-relaxed text-gray-400">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
