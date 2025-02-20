"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Why CITk", path: "/whycitk" },
  {
    name: "Academic Programme",
    path: "#",
    dropdown: [
      { name: "Programme details", path: "/courses" },
      { name: "Student strength", path: "/coursestrength" },
    ],
  },
  {
    name: "Placement Records",
    path: "#",
    dropdown: [
      { name: "Placement Records 2023-24", path: "/T&P data/PlacementData_2023-24.pdf" },
      { name: "Placement Records 2022-23", path: "/T&P data/PlacementData_2022-23.pdf" },
      { name: "Placement Records 2021-22", path: "/T&P data/PlacementData_2021-22.pdf" },
      { name: "Our Alumni", path: "/alumni" },
    ],
  },
  {
    name: "To Recruit",
    path: "#",
    dropdown: [
      { name: "Contact Us", path: "/contact" },
      { name: "How to Reach", path: "/reach" },
      { name: "Facilities", path: "/facilities" },
    ],
  },
];

const navVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
  },
};

export default function Header() {
  const pathname = usePathname();
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "glass-effect shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative h-10 w-10">
                <Image
                  src="/citklogo.png"
                  alt="CITK logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                  priority
                />
              </div>
              <h1 className="hidden sm:block text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Placement Cell, CITK
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredTab(index)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  <Link
                    href={tab.path}
                    className={`flex items-center space-x-1 py-2 text-sm font-medium transition-colors ${
                      pathname === tab.path
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={() => !tab.dropdown && setMenuOpen(false)}
                  >
                    <span>{tab.name}</span>
                    {tab.dropdown && (
                      <FaAngleDown className={`transition-transform duration-200 ${
                        hoveredTab === index ? "rotate-180" : ""
                      }`} />
                    )}
                  </Link>

                  <AnimatePresence>
                    {tab.dropdown && hoveredTab === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-56 rounded-lg border bg-card shadow-lg"
                      >
                        <ul className="space-y-1 p-2">
                          {tab.dropdown.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <Link
                                href={item.path}
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                              >
                                {item.name}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}

              {/* Theme Toggle */}
              <li>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-md p-2 hover:bg-muted"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden rounded-md p-2 hover:bg-muted"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={navVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-card shadow-xl lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 hover:bg-muted rounded-md"
                >
                  <FaTimes className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                  {tabs.map((tab, index) => (
                    <li key={index}>
                      {tab.dropdown ? (
                        <div>
                          <button
                            onClick={() => setHoveredTab(hoveredTab === index ? null : index)}
                            className="flex w-full items-center justify-between p-2 text-sm font-medium text-muted-foreground hover:text-primary"
                          >
                            {tab.name}
                            <FaAngleDown className={`transition-transform duration-200 ${
                              hoveredTab === index ? "rotate-180" : ""
                            }`} />
                          </button>
                          <AnimatePresence>
                            {hoveredTab === index && (
                              <motion.ul
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="ml-4 overflow-hidden"
                              >
                                {tab.dropdown.map((item, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                  >
                                    <Link
                                      href={item.path}
                                      onClick={() => setMenuOpen(false)}
                                      className="block p-2 text-sm text-muted-foreground hover:text-primary"
                                    >
                                      {item.name}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={tab.path}
                          onClick={() => setMenuOpen(false)}
                          className="block p-2 text-sm font-medium text-muted-foreground hover:text-primary"
                        >
                          {tab.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t p-4">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex w-full items-center justify-between p-2 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                  {theme === "dark" ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
