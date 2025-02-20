"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page1() {
  return (
    <main>
      <div className="py-12 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-2xl bg-card shadow-lg border">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-48 h-48">
                <Image
                  src="/dr-agile-methew.jpg"
                  alt="Director"
                  fill
                  className="object-cover rounded-full hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-heading font-bold text-gradient">
                  Exploring the Skies
                </h2>
                <h3 className="text-xl text-primary font-medium">
                  THE TRAINING AND PLACEMENT CELL
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dear Esteemed Recruiters, Welcome to CIT Kokrajhar, your premier
                  destination for top-tier talent in engineering and technology.
                  Located in the prestigious Bodoland Territorial (BTR) of India,
                  we have established a solid reputation in both Assam and the
                  North Eastern Region (NER). Our accomplished alumni are living
                  proof of our tradition of excellence, excelling across the globe.
                </p>
              </div>

              <Link href="/desription/director">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:shadow-lg"
                >
                  <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-primary to-blue-600 transition-all duration-300 group-hover:w-full" />
                  <span className="relative">Read More</span>
                  <svg
                    className="relative h-4 w-4 transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}