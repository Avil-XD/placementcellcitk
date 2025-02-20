"use client";

import { motion } from "framer-motion";
import HeroComp from "@/components/common/herocomp";
import AboutSection from "@/components/home/about";
import CardOne from "@/components/home/cardone";
import ImageCarousel from "@/components/home/recentcompany";
import Link from "next/link";
import Image from "next/image";
import Page1 from "./Page1";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroComp />

      {/* Recent Companies Carousel */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 bg-background"
      >
        <ImageCarousel />
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16"
      >
        <AboutSection />
      </motion.section>

      {/* Director's Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-2xl bg-card shadow-lg"
          >
            {/* Image Column */}
            <div className="flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20"
              >
                <Image
                  src="/director-2023.jpg"
                  alt="Director"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <motion.h2
                  {...fadeInUp}
                  className="text-2xl font-heading font-bold text-gradient mb-2"
                >
                  Our Vision
                </motion.h2>
                <motion.h3
                  {...fadeInUp}
                  className="text-xl text-primary mb-4"
                >
                  FROM DIRECTOR&apos;S DESK
                </motion.h3>
                <motion.p
                  {...fadeInUp}
                  className="text-muted-foreground leading-relaxed"
                >
                  Dear Recruiters, The Training and Placement Cell of the Central Institute
                  of Technology Kokrajhar serves as a bridge between academia and industry,
                  facilitating a seamless transition for our students.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/desription/tpo"
                  className="group inline-flex items-center gap-2 text-sm font-medium transition-colors"
                >
                  <span className="relative inline-flex h-10 overflow-hidden rounded-md bg-primary p-[1px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full items-center justify-center rounded-md bg-primary px-4 py-1 text-sm font-medium text-primary-foreground backdrop-blur-3xl">
                      Read More
                    </span>
                  </span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Content */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16"
      >
        <Page1 />
      </motion.section>
    </main>
  );
}