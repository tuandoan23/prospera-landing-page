"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { fadeInDown, fadeInLeft } from "@/animations/variants";

interface Props {}

const OpenTickets: NextPage<Props> = ({}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <motion.div
      // initial={{ opacity: 0, x: -50 }}
      // whileInView={{ opacity: 1, x: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.7 }}
      variants={isMobile ? fadeInLeft : fadeInDown}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-w-36 rounded-2xl bg-gradient-to-br from-[#191919] to-[#101010] p-2 sm:p-3"
    >
      <div className="mb-5 flex justify-between">
        <div>
          <p className="text-secondary text-[7px]">Open Tickets</p>
          <p className="text-sm font-bold">Tickets</p>
        </div>
        <div
          className="text-7b h-fit rounded-xl border-[1px] border-[#1E1E1E] px-2 py-1.5 text-[7px]"
          style={{
            background: "linear-gradient(270deg, #191919 45%, #424242 100%)",
          }}
        >
          This Week
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex max-w-1/3 flex-col text-center">
          <h2 className="text-lg font-bold text-white">52</h2>
          <p className="text-7b text-[9px]">Closed tickets</p>
        </div>
        <div className="bg-7b w-[1px]"></div>
        <div className="flex max-w-1/3 flex-col text-center">
          <h2 className="text-lg font-bold text-white">24</h2>
          <p className="text-7b text-[9px]">Open tickets</p>
        </div>
        <div className="bg-7b w-[1px]"></div>
        <div className="flex max-w-1/3 flex-col text-center">
          <h2 className="text-lg font-bold text-white">66</h2>
          <p className="text-7b text-[9px]">Most closed</p>
        </div>
      </div>
    </motion.div>
  );
};

export default OpenTickets;
