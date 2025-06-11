"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { fadeInDown, fadeInRight } from "@/animations/variants";

interface Props {}

const States: NextPage<Props> = ({}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <motion.div
      variants={isMobile ? fadeInRight : fadeInDown}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-w-36 rounded-2xl bg-gradient-to-br from-[#191919] to-[#101010] p-2 sm:p-3"
    >
      <div className="mb-5 flex justify-between">
        <div>
          <p className="text-secondary text-[7px]">States</p>
          <p className="text-sm font-bold">Traffic Source</p>
        </div>
        <div
          className="text-7b h-fit rounded-xl border-[1px] border-[#1E1E1E] px-2 py-1 text-[7px]"
          style={{
            background: "linear-gradient(90deg, #191919 45%, #424242 100%)",
          }}
        >
          This Week
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <div className="h-1 flex-1 rounded-md bg-blue-300"></div>
          <div className="h-1 w-1/5 rounded-md bg-pink-200"></div>
          <div className="h-1 w-1/6 rounded-md bg-yellow-300"></div>
          <div className="h-1 w-1/6 rounded-md bg-purple-400"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-7b grid grid-cols-12 text-[7px]">
            <div className="col-span-1 flex items-center justify-center">
              <div className="h-1 w-1 rounded-full bg-blue-300"></div>
            </div>
            <p className="col-span-6">Facebook</p>
            <p className="col-span-3">14,620</p>
            <p className="col-span-2 col-start-12 text-right">+48%</p>
          </div>
          <div className="bg-7b h-[0.1px]"></div>
          <div className="text-7b grid grid-cols-12 text-[7px]">
            <div className="col-span-1 flex items-center justify-center">
              <div className="h-1 w-1 rounded-full bg-pink-200"></div>
            </div>
            <p className="col-span-6">Instagram</p>
            <p className="col-span-3">7,468</p>
            <p className="col-span-2 col-start-12 text-right">+18%</p>
          </div>
          <div className="bg-7b h-[0.1px]"></div>
          <div className="text-7b grid grid-cols-12 text-[7px]">
            <div className="col-span-1 flex items-center justify-center">
              <div className="h-1 w-1 rounded-full bg-yellow-300"></div>
            </div>
            <p className="col-span-6">Tiktok</p>
            <p className="col-span-3">4,583</p>
            <p className="col-span-2 col-start-12 text-right">-8%</p>
          </div>
          <div className="bg-7b h-[0.1px]"></div>
          <div className="text-7b grid grid-cols-12 text-[7px]">
            <div className="col-span-1 flex items-center justify-center">
              <div className="h-1 w-1 rounded-full bg-purple-400"></div>
            </div>
            <p className="col-span-6">Organic</p>
            <p className="col-span-3">865</p>
            <p className="col-span-2 col-start-12 text-right">+10%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default States;
