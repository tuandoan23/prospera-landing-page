"use client";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import aumniImg from "@/assets/images/partners/aumni.png";
import cnbcImg from "@/assets/images/partners/cnbc.png";
import ondeckImg from "@/assets/images/partners/ondeck.png";
import ssoftwareImg from "@/assets/images/partners/ssoftware.png";
import techCrunchImg from "@/assets/images/partners/techcrunch.png";
import forbesImg from "@/assets/images/partners/forbes.png";

const partners = [
  techCrunchImg,
  forbesImg,
  ssoftwareImg,
  aumniImg,
  cnbcImg,
  ondeckImg,
  techCrunchImg,
  forbesImg,
  ssoftwareImg,
  aumniImg,
  cnbcImg,
  ondeckImg,
];

interface Props {}

const Partners: NextPage<Props> = ({}) => {
  const controls = useAnimation();
  const xRef = useRef(0);
  const speed = 25;
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalWidth, setTotalWidth] = useState(1000);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.scrollWidth;
      setTotalWidth(width);
    }
  }, []);

  const startAnimation = (fromX: number) => {
    const distance = totalWidth + fromX;
    const duration = distance / speed;

    controls.start({
      x: -totalWidth,
      transition: {
        ease: "linear",
        duration,
        repeat: Infinity,
      },
    });

    xRef.current = fromX;
  };
  useEffect(() => {
    startAnimation(0);
  }, []);

  const handlePause = () => {
    controls.stop();
  };

  const handleResume = () => {
    const el = document.querySelector("#scrolling-partners");
    if (el) {
      const transform = getComputedStyle(el).transform;
      if (transform !== "none") {
        const match = transform.match(/matrix\(1, 0, 0, 1, (-?\d+\.?\d*),/);
        const currentX = match ? parseFloat(match[1]) : 0;
        xRef.current = currentX;
        startAnimation(currentX);
      }
    }
  };
  return (
    <div className="mx-auto my-8 p-3 sm:px-6 md:max-w-9/12 lg:px-8">
      <h1 className="mb-3 text-center text-2xl font-bold">
        Trusted by 4,000 leading companies
      </h1>

      <div className="w-full overflow-hidden py-4 whitespace-nowrap text-white">
        <motion.div
          id="scrolling-partners"
          className="flex gap-10 hover:[animation-play-state:paused] lg:gap-20"
          animate={controls}
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
        >
          {partners.map((p, i) => (
            <Image
              src={p}
              alt="partner companies"
              key={i}
              className="h-6 w-auto"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
