"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  text: string;
  speed: number;
}

const TypewriterText: NextPage<Props> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-mono text-xl"
    >
      {displayedText}
    </motion.p>
  );
};

export default TypewriterText;
