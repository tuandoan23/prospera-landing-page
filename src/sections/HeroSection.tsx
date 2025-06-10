"use client";
import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import marketingImg from "@/assets/images/marketing.png";
import mobileUsageImg from "@/assets/images/mobile_usage.png";
import avatar1 from "@/assets/images/avatar1.png";
import avatar2 from "@/assets/images/avatar2.png";
import avatar3 from "@/assets/images/avatar3.png";
import avatar4 from "@/assets/images/avatar4.png";
import cardsIcon from "@/assets/images/hero-sidebar/cards.svg";
import moreIcon from "@/assets/images/hero-sidebar/more.svg";
import trendsIcon from "@/assets/images/hero-sidebar/trends.svg";
import numbersIcon from "@/assets/images/hero-sidebar/numbers.svg";
import timelineIcon from "@/assets/images/hero-sidebar/timeline.svg";
import peopleIcon from "@/assets/images/hero-sidebar/people.svg";

const avatars = [avatar1, avatar2, avatar3, avatar4];

const sidebar = [
  {
    text: "Cards",
    icon: cardsIcon,
  },
  {
    text: "People",
    icon: peopleIcon,
  },
  {
    text: "Trends",
    icon: trendsIcon,
  },
  {
    text: "Timeline",
    icon: timelineIcon,
  },
  {
    text: "Numbers",
    icon: numbersIcon,
  },
  {
    text: "More",
    icon: moreIcon,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

interface Props {}

const HeroSection: NextPage<Props> = ({}) => {
  return (
    <div className="mx-auto p-3 sm:px-6 md:max-w-9/12 lg:px-8">
      <div className="rounded-2xl border-[1px] border-[#3E3E3E] p-3">
        <div className="mb-4 flex justify-between">
          <div className="flex items-center gap-2 px-2">
            <div className="h-2 w-2 rounded-full bg-[var(--color-red)]"></div>
            <div className="h-2 w-2 rounded-full bg-[var(--color-orange)]"></div>
            <div className="h-2 w-2 rounded-full bg-[var(--color-green)]"></div>
          </div>
          <motion.div
            className="flex items-center space-x-[-10px]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {avatars.map((src, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-6 w-6 overflow-hidden rounded-full"
              >
                <Image src={src} alt={`Avatar ${index}`} className="h-6 w-6" />
              </motion.div>
            ))}
            <motion.div
              variants={itemVariants}
              className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-zinc-400 to-black text-white shadow-md transition duration-200 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w- h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
        <div className="bg-hero-main-gradient flex flex-wrap justify-center rounded-xl px-6 py-8 sm:justify-between lg:py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="mx-auto flex max-w-3xl flex-col justify-center text-center md:px-4 lg:max-w-1/2"
          >
            <motion.h2
              className="text-left text-4xl leading-tight font-extrabold"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Impactful Stories. Made effortlessly
            </motion.h2>
            <motion.p
              className="mt-4 text-left text-base text-white/70"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Shronicle is a modern format presentations. Deliver impressive,
              interactive stories without the design guesswork!
            </motion.p>
          </motion.div>

          {/* Content Section */}
          <div className="mt-10 flex h-fit w-full rounded-xl bg-black lg:max-w-1/2">
            {/* Sidebar */}
            <div className="flex w-2/5 flex-col justify-center gap-1 border-r-[1px] border-[#1c1c1c] px-2 py-2 md:gap-2 md:py-4 lg:py-6">
              {sidebar.map((s, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 8px #8067ff" }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 0.9,
                    delay: 0.1 * i,
                  }}
                  className={`relative flex items-center justify-between gap-1 rounded-sm px-1 py-1 text-left text-white sm:rounded-md lg:py-2 ${
                    i === 0 && "bg-[#8067ff]"
                  }`}
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-gradient-to-br from-[#2b2b2b] to-[#121212]">
                    <Image
                      src={s.icon}
                      alt={`${s.text} icon`}
                      className="h-3 w-3"
                    />
                  </div>
                  <div className="items-left flex flex-1 content-start">
                    <span className="text-left text-[10px]">{s.text}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </motion.button>
              ))}
            </div>

            {/* Main Cards */}
            <div className="flex flex-1 flex-col justify-evenly gap-3 rounded-r-xl bg-[#131313] px-2 py-2 md:py-4 lg:py-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-lg bg-black p-1 sm:p-2"
              >
                <Image
                  src={marketingImg}
                  alt="Marketing Team Management"
                  className="h-auto w-full rounded-lg object-cover"
                />
                <div className="py-2">
                  <h3 className="text-[0.6rem]">Marketing Team Management</h3>
                  <p className="text-[0.4rem] text-white/60">
                    Description is here...
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex gap-2 overflow-hidden rounded-xl bg-black p-1 sm:p-2"
              >
                <Image
                  src={mobileUsageImg}
                  alt="Mobile Usage"
                  className="h-auto w-10 object-contain"
                />
                <div className="p-1">
                  <h3 className="text-[0.6rem] font-semibold">Mobile Usage</h3>
                  <p className="text-[0.4rem] text-white/60">
                    Description is added here like...
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
