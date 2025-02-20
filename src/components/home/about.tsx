"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaBriefcase, FaChartLine } from "react-icons/fa";

const stats = [
  {
    icon: FaGraduationCap,
    value: "2006",
    label: "Established",
  },
  {
    icon: FaUsers,
    value: "1000+",
    label: "Students",
  },
  {
    icon: FaBriefcase,
    value: "100+",
    label: "Recruiters",
  },
  {
    icon: FaChartLine,
    value: "95%",
    label: "Placement Rate",
  },
];

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gradient">
            Welcome to the Training And Placement Cell
          </h2>
          <p className="text-lg sm:text-xl text-primary font-medium">
            A Deemed-to-be-university under MoE, Govt. of India
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 rounded-xl bg-card border"
            >
              <stat.icon className="text-3xl text-primary mb-3" />
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 to-blue-600/50 opacity-75 blur" />
              <div className="relative h-full rounded-lg bg-card p-6 space-y-4">
                <h3 className="text-xl font-semibold">Our Legacy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Central Institute of Technology (CIT) Kokrajhar, established on December 19, 2006,
                  stands as a premier institute under the Ministry of Education, Government of India.
                  As an autonomous body registered under the Societies Registration Act, 1860,
                  we operate under a Board of Governors (BOG) with mentorship from the Indian
                  Institutes of Technology (IITs).
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600/50 to-primary/50 opacity-75 blur" />
              <div className="relative h-full rounded-lg bg-card p-6 space-y-4">
                <h3 className="text-xl font-semibold">Student Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  CIT Kokrajhar fosters a balanced approach to education, emphasizing both academic
                  excellence and co-curricular activities. Our students actively participate in
                  research, national conferences, and workshops while also serving as Teaching
                  Assistants to junior batches. This comprehensive development is reflected in
                  their impressive project repositories and achievements in sports and cultural events.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/whycitk"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <span className="relative inline-flex h-10 overflow-hidden rounded-md bg-primary p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full items-center justify-center rounded-md bg-primary px-4 py-1 text-sm font-medium text-primary-foreground backdrop-blur-3xl">
                Discover More About CITK
              </span>
            </span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
