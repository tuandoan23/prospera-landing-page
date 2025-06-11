"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { fadeInDown, fadeInLeft } from "@/animations/variants";

interface Props {}

const Mau: NextPage<Props> = ({}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <motion.div
      variants={isMobile ? fadeInLeft : fadeInDown}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-w-36 rounded-2xl bg-gradient-to-br from-[#191919] to-[#101010] p-2 sm:p-3"
    >
      <div className="mb-5 flex justify-between">
        <div>
          <p className="text-secondary text-[7px]">MAU</p>
          <p className="text-sm font-bold">Mar 2023</p>
        </div>
        <div
          className="text-7b h-fit rounded-xl border-[1px] border-[#1E1E1E] px-2 py-1.5 text-[7px]"
          style={{
            background: "linear-gradient(270deg, #191919 45%, #424242 100%)",
          }}
        >
          Last 28 days
        </div>
      </div>
      <div className="relative">
        <svg
          viewBox="0 0 300 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-24 w-full"
        >
          <path
            d="M0,150 L30,90 L35,115 L80,85 L100,115 L115,95 L135,85 L150,40 L160,30 L180,70 L210,10 L230,0"
            stroke="#a78bfa"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="30"
            cy="90"
            r="4"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2"
          />
          <circle
            cx="80"
            cy="85"
            r="4"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2"
          />
          <circle
            cx="100"
            cy="115"
            r="4"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2"
          />
          <circle
            cx="135"
            cy="85"
            r="4"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2"
          />
          <circle
            cx="160"
            cy="30"
            r="4"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2"
          />
          <circle
            cx="180"
            cy="70"
            r="4"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2"
          />
          <circle
            cx="210"
            cy="10"
            r="4"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2"
          />
        </svg>
        <svg
          viewBox="0 0 300 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-full"
        >
          <path
            d="M0,150 L30,130 L35,135 L60,125 L85,135 L100,135 L125,115 L135,105 L150,120 L160,100 L180,90 L210,100 L230,80"
            stroke="#7b7b7b"
            strokeWidth="2"
            fill="none"
            strokeDasharray="2,2"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default Mau;
