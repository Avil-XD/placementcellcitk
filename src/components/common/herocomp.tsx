"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaDownload, FaUserPlus } from "react-icons/fa";
import Loading from "./loading";

const images = [
  "/test/homepage-1 CITK.jpg",
  "/test/CIT-Kokrajhar-celebrates-second-convocation-5.jpeg",
];

export default function HeroComp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map((src) => {
            return new Promise((resolve, reject) => {
              const img = document.createElement("img");
              img.src = src;
              img.onload = () => resolve(true);
              img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
            });
          })
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error preloading images:", error);
        setIsLoading(false);
      }
    };

    preloadImages();

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    window.open("/information_brouchure_diploma_degree_master_phd2024 (1).pdf", "_blank");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="relative h-[calc(100vh-4rem)] overflow-hidden">
      {/* Background Images with Gradient Overlay */}
      <AnimatePresence mode="wait">
        {images.map((src, index) => (
          index === activeIndex && (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <div className="relative h-full">
                <Image
                  src={src}
                  alt="CITK Campus"
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                  onLoadingComplete={() => setIsLoading(false)}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-gradient-to-r from-cyan-500 to-blue-500"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-10">
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 ring-1 ring-white/20 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
              <span className="inline-block relative">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent blur-md animate-glow"></span>
                <span className="relative bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-shine bg-[length:200%_100%] [text-shadow:_0_2px_20px_rgba(255,255,255,0.1)]">
                  Training & Placement Cell
                </span>
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Central Institute of Technology, Kokrajhar
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <button
                onClick={() => setShowForm(!showForm)}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-8 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-100 shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                <span className="relative flex items-center gap-2">
                  <FaUserPlus className="text-xl" />
                  Start Recruitment
                </span>
              </button>

              <button
                onClick={handleDownload}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-100 shadow-lg hover:-translate-y-0.5"
              >
                <span className="relative flex items-center gap-2">
                  <FaDownload className="text-xl" />
                  Download Brochure
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/90 text-sm font-medium tracking-wide">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-8 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent animate-glow"
            />
          </div>
        </motion.div>
      </div>

      {/* Recruitment Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg"
            >
              {/* Add your RecruitmentForm component here */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
