"use client";
import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { fadeInLeft, fadeInUp } from "@/animations/variants";
import Img1 from "@/assets/images/inspiration1.png";
import Img2 from "@/assets/images/inspiration2.png";

interface Props {}

const StackImage: NextPage<Props> = ({}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <motion.div
      variants={isMobile ? fadeInLeft : fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-w-36 rounded-2xl bg-gradient-to-br from-[#191919] to-[#101010] p-2 sm:p-3"
    >
      <div className="mb-2 flex justify-between">
        <div>
          <p className="text-secondary text-[7px]">Stack Image</p>
          <p className="text-sm font-bold">Inspiration board</p>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-1">
        <div className="col-start-1 row-start-1">
          <Image src={Img1} alt="Inspiration board 1" className="" />
        </div>
        <div className="relative col-start-2 row-start-2">
          <div className="absolute z-10 flex h-full w-full items-center justify-center bg-black/40">
            <span className="text-2xl font-bold">+32</span>
          </div>
          <Image src={Img2} alt="Inspiration board 2" className="" />
        </div>
      </div>
    </motion.div>
  );
};

export default StackImage;
