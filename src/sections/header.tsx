"use client";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {}

const menu = [
  {
    id: 0,
    title: "Product",
    route: "/product",
  },
  {
    id: 1,
    title: "Company",
    route: "/company",
  },
  {
    id: 2,
    title: "Service",
    route: "/service",
  },
  {
    id: 3,
    title: "Career",
    route: "/career",
  },
  {
    id: 4,
    title: "Our Story",
    route: "/story",
  },
];

const Header: NextPage<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between sm:h-20">
          <div className="flex w-full items-center justify-start sm:items-stretch">
            <div className="flex shrink-0 items-center">
              <Link href={"/"} className="text-xl font-bold">
                <motion.p
                  className="cursor-pointer text-center text-2xl font-bold text-white"
                  initial={{
                    textShadow: "0 0 0px #8067ff00",
                  }}
                  whileHover={{
                    textShadow: `
                      0 0 4px #8067ff,
                      0 0 8px #8067ff,
                      0 0 12px #8067ff,
                      0 0 16px #8067ff
                    `,
                  }}
                  transition={{
                    duration: 1.5,
                    // repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Prospera
                </motion.p>
              </Link>
            </div>
            <div className="hidden flex-1 sm:ml-6 sm:block">
              <div className="flex h-full items-center justify-center sm:space-x-2 md:space-x-10">
                {menu.map((item) => (
                  <Link
                    key={item.id}
                    href={item.route}
                    className="text-7b text-sm transition-all duration-500 hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <button className="hidden cursor-pointer bg-[#D9D9D9] text-black hover:bg-white sm:block sm:px-2 sm:py-1 md:px-4 md:py-3">
              Register Now
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden sm:hidden"
          >
            <div className="space-y-1 px-2 pt-2 pb-3">
              {menu.map((item) => (
                <Link
                  key={item.id}
                  href={item.route}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
