"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaBell } from "react-icons/fa";
import Link from "next/link";

const links = [
  {
    href: "https://www.tcsion.com/hub/national-qualifier-test/",
    title: "TCS iON NQT National Qualifier Test",
    date: "2024-02-20",
  },
  {
    href: "https://sih.gov.in/",
    title: "Smart India Hackathon-2024 is live now",
    date: "2024-02-18",
  },
  {
    href: "https://unstop.com/competitions/tata-imagination-challenge-2024-student-track-tata-imagination-challenge-2024-tata-group-1096490",
    title: "Tata Imagination Challenge 2024",
    date: "2024-02-15",
  },
];

const repeatedLinks = Array.from({ length: 2 }, () => links).flat();

export default function LinkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % repeatedLinks.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-xl bg-card shadow-lg border overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="relative">
              <FaBell className="text-xl text-primary animate-bounce" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary animate-ping" />
            </div>
            <h2 className="text-lg font-heading font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Latest Updates
            </h2>
          </div>
          <Link
            href="/all-updates" // Add a page for all updates if needed
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
          >
            View All
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        {/* Updates Carousel */}
        <div
          className="relative overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="px-4"
            >
              <a
                href={repeatedLinks[activeIndex].href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <span className="text-xs text-muted-foreground">
                    {repeatedLinks[activeIndex].date}
                  </span>
                  <h3 className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors duration-200">
                    {repeatedLinks[activeIndex].title}
                  </h3>
                </div>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 p-4 border-t">
          {repeatedLinks.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-primary"
                  : "bg-muted hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Side Indicators */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-transparent to-primary opacity-20" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-transparent to-primary opacity-20" />
      </motion.div>
    </div>
  );
}
