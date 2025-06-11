"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import OpenTickets from "@/components/herosection2/OpenTickets";
import Poll from "@/components/herosection2/Poll";
import Mau from "@/components/herosection2/Mau";
import StackImage from "@/components/herosection2/StackImage";

interface Props {}

const HeroSection2: NextPage<Props> = ({}) => {
  return (
    <div className="mx-auto p-3 sm:px-6 md:max-w-9/12 lg:px-8">
      <div className="flex flex-col">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="inline-block"
        >
          <motion.h2
            className="mr-2.5 inline-block text-left text-3xl leading-tight font-bold md:text-5xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
          >
            A
          </motion.h2>
          <motion.h2
            className="inline-block bg-gradient-to-b from-[#2a0a9a] to-[#d2a6ca] bg-clip-text text-left text-3xl leading-tight font-bold text-transparent md:text-5xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
          >
            New Easy
          </motion.h2>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            className="text-left text-3xl leading-tight font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
          >
            Way to Create
          </motion.h2>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
        <div className="md:row-span order-1 md:order-none md:col-start-1 md:row-span-1">
          <OpenTickets />
        </div>
        <div className="order-2 md:order-none md:col-start-1 md:row-start-2">
          <Poll />
        </div>
        <div className="order-4 md:order-none md:col-start-2 md:row-span-1 md:row-start-2 md:-mt-10">
          <Mau />
        </div>
        <div className="order-3 md:order-none md:col-start-3 md:row-start-2 md:-mt-24">
          <StackImage />
        </div>
        <div className="order-5 md:order-none md:col-start-4 md:row-span-1">
          Card 5
        </div>
        <div className="order-6 md:order-none md:col-start-5 md:row-span-1">
          Card 6
        </div>
        <div className="order-8 md:order-none md:col-start-5 md:row-span-1">
          Card 7
        </div>
        <div className="order-7 md:order-none md:col-start-6 md:row-start-2">
          Card 8
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
