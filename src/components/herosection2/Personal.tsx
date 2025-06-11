"use client";
import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { fadeInDown, fadeInLeft } from "@/animations/variants";
import notionLogo from "@/assets/images/notion_logo.png";
import avatar from "@/assets/images/benjamin.png";
import icon from "@/assets/images/ic.svg";

interface Props {}

const Personal: NextPage<Props> = ({}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <motion.div
      variants={isMobile ? fadeInLeft : fadeInDown}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-2"
    >
      <NotionCard />
      <PersonalCard />
    </motion.div>
  );
};

const NotionCard = () => {
  return (
    <div className="flex min-w-36 gap-2 rounded-2xl bg-gradient-to-br from-[#191919] to-[#101010] p-2 sm:p-3">
      <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#191919] to-[#101010] p-2 sm:p-3">
        <Image src={notionLogo} alt="notion logo" className="h-6 w-6" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[9px]">Road Map Planning v4.0</p>
        <p className="text-7b text-[7px]">www.notion.com</p>
      </div>
    </div>
  );
};

const PersonalCard = () => {
  return (
    <div className="flex min-w-36 flex-col gap-2 rounded-2xl bg-gradient-to-br from-[#191919] to-[#101010] p-2 sm:p-3">
      <div className="flex gap-1">
        <Image
          src={avatar}
          alt="personal avatar"
          className="h-10 w-10 rounded-md"
        />
        <div className="flex flex-col justify-between py-1">
          <p className="text-xs">James Benjamin</p>
          <p className="text-7b text-[7px]">james@business.com</p>
        </div>
      </div>

      <div className="flex justify-between gap-2">
        <div className="flex max-w-1/3 flex-col text-center">
          <h2 className="text-[9px] font-bold text-white">26 Apr 2022</h2>
          <p className="text-7b text-[7px]">Join Date</p>
        </div>
        <div className="flex max-w-1/3 flex-col text-center">
          <h2 className="text-[9px] font-bold text-white">82 Sales</h2>
          <p className="text-7b text-[7px]">Sales Mode</p>
        </div>
        <div className="flex max-w-1/3 flex-col text-center">
          <h2 className="text-[9px] font-bold text-white">$186,455.00</h2>
          <p className="text-7b text-[7px]">Sales Amount</p>
        </div>
      </div>
      <div className="bg-7b h-[0.1px] w-full"></div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <Image src={icon} alt="icon" className="h-4 w-4" />
          <div className="text-7b flex flex-1 items-center justify-between text-[8px]">
            <p>Peter Mackeson</p>
            <p>$18,218.00</p>
          </div>
        </div>
        <div className="flex gap-1">
          <Image src={icon} alt="icon" className="h-4 w-4" />
          <div className="text-7b flex flex-1 items-center justify-between text-[8px]">
            <p>Peter Mackeson</p>
            <p>$18,218.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
