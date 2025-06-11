"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 py-8 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-7 sm:py-14 lg:py-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-3xl">Prospera</h4>
            <p>Experience the future of storytelling.</p>
          </motion.div>
          <div className="flex flex-wrap gap-12 text-sm sm:gap-28">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h6 className="mb-4 text-base sm:mb-7">About</h6>
              <div className="flex flex-col gap-3 text-[#ADADAD]">
                <div>Contact</div>
                <div>Blog</div>
                <div>Our Story</div>
                <div>Careers</div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h6 className="mb-4 text-base sm:mb-7">Company</h6>
              <div className="flex flex-col gap-3 text-[#ADADAD]">
                <div>Press</div>
                <div>Brand Assets</div>
                <div>Terms of Service</div>
                <div>Privacy Policy</div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h6 className="mb-4 text-base sm:mb-7">Social</h6>
              <div className="flex flex-col gap-3 text-[#ADADAD]">
                <div>Facebook</div>
                <div>Instagram</div>
                <div>Twitter</div>
                <div>Tiktok</div>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-2 text-xl">Subscribe to our Newsletter</p>
            <div className="flex gap-1 sm:h-10">
              <input
                type="text"
                className="border-[1px] border-[#707070] px-2 py-1 text-sm"
                placeholder="Enter your email"
              />
              <button className="bg-white p-2 text-black">Subscribe</button>
            </div>
          </motion.div>
        </div>
        <div className="w-full border-[1px] border-[#707070]"></div>
        <div className="flex justify-between py-3 sm:py-8">
          <p className="text-xs">©2025 Prospera. All rights reserved</p>
          <p className="text-xs">
            Privacy Policy | Terms & Conditions | Cookies Policy | Map
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
