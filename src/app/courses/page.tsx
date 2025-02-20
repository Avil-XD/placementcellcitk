"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface ClubCardProps {
  name: string;
  subjects: string[];
}

function ClubCard({ name, subjects }: ClubCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-lg overflow-hidden border border-border shadow-lg dark:shadow-primary/5 h-full"
    >
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-heading font-bold text-foreground mb-4">{name}</h3>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2 mb-4"
            >
              {subjects.map((subject, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-muted-foreground"
                >
                  <span className="text-primary mr-2">•</span>
                  <span>{subject}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="mt-auto pt-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-full gap-2 rounded-md bg-primary/10 dark:bg-primary/20 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
          >
            {isOpen ? "Hide Details" : "View Core Subjects"}
            <FaChevronDown
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const btechCourses = [
  {
    name: "B.Tech in Computer Science and Engineering",
    subjects: ["Data Structure and Algorithm", "Database Management System", "AI", "Machine Learning", "Block Chain", "Computer Architecture", "Automata Theory"],
  },
  {
    name: "B.Tech in Electronics and Communication Engineering",
    subjects: [
      "In VLSI & Embedded System: Digital System Design, VLSI Design, Linear IC, Analog IC Design Microcontrollers",
      "In Communication Systems: Analog Communication, Digital Communication, Computer Networks, Antennas & Wave Propagation and Information Theory and Coding",
      "In Signal Processing: Signal and Systems, Digital Signal Processing",
    ],
  },
  {
    name: "B.Tech in Civil Engineering",
    subjects: ["Geotechnical Engineering", "Building Materials", "Design of Structures and RCC", "AutoCAD"],
  },
  {
    name: "B.Tech in Food Engineering and Technology",
    subjects: ["Food Process Engineering", "Principles of Food Processing and Preservation", "Food Product Technology", "Food Packaging Technology", "Food Analysis, Quality Control and Management"],
  },
  {
    name: "B.Tech in Instrumentation Engineering",
    subjects: ["Control Systems", "Embedded Systems", "Microprocessor & Microcontroller", "Electronic Instrumentation", "Process Control", "Biomedical Instrumentation"],
  },
  {
    name: "B.Des in Multimedia Communication and Design",
    subjects: ["3D Modeling", "Graphic Design", "UI/UX Design", "Design Studio", "Introduction to Game Design", "Animation Production Design"],
  },
];

const mtechCourses = [
  {
    name: "M.Tech in Computer Science & Engineering",
    subjects: ["Advanced DBMS", "Machine Learning", "Advanced Computer Network", "Artificial Intelligence", "Data Mining and Data Warehousing"],
  },
  {
    name: "M.Tech in Food Engineering & Technology",
    subjects: ["Research Methodology and IPR", "Recent Trends in Food Engineering and Technology", "Recent Advances in Enzyme and Microbial Technology", "Emerging Food Processing Technologies", "Recent Trends in Food Safety and Quality Management"],
  },
  {
    name: "M.Tech in Green Energy Technology (GET)",
    subjects: ["Green Energy Technology", "Energy & Environment", "Fundamentals of Energy Technology", "Energy Management & Auditing", "Power Plant Engineering", "Bio-energy & Conversion Systems", "Wind and Hydro Power Systems", "Solar Thermal Energy Conversions"],
  },
  {
    name: "M.Tech in Water Resources and Hydraulic Engineering (WRH)",
    subjects: ["Research Methodology", "Water Resources Systems Analysis", "Hydropower Engineering", "Human Resource Management for Water Resources Projects", "Advanced Computational Hydraulics"],
  },
  {
    name: "M.Des in Multimedia Communication & Design",
    subjects: ["Multimedia Communication & Design", "Understanding Aesthetics: Analytical Studies", "Game Design for Digital Media", "Animation & Visual Effects", "Animation Production Techniques", "3D Sculpture & Visualization Techniques"],
  },
];

const diplomaCourses = [
  {
    name: "Diploma in Computer Science and Engineering (CSE)",
    subjects: ["System Programming", "Computer Architecture and Organization", "Operating System", "Database Management Systems", "Cryptography & Network Security", "Software Engineering"],
  },
  {
    name: "Diploma in Electronics and Communication Engineering (ECE)",
    subjects: ["Electronic Devices and Circuits", "Microcontroller and Applications", "Digital Electronics", "Embedded Systems", "Mobile and Wireless Communication", "Power Electronics", "Electronic Measurements and Instrumentation"],
  },
  {
    name: "Diploma in Control and Instrumentation (CAI)",
    subjects: ["Electrical Circuits and Networks", "Electronics Devices and Circuits", "Microprocessors", "Control Systems", "Biomedical Instrumentation", "Industrial Instrumentation"],
  },
  {
    name: "Diploma in Food Processing Technology (FPT)",
    subjects: ["Food Product Technology", "Basics of Food Chemistry", "Food Storage and Packaging", "Food Quality Control", "Elements of Food Engineering"],
  },
  {
    name: "Diploma in Civil Engineering (CE)",
    subjects: ["Construction Materials", "Surveying", "Water Supply & Sanitary Installation", "Structural Analysis", "Construction Technology", "Concrete Technology", "Design of Steel Structures", "Design of RCC Structures"],
  },
  {
    name: "Diploma in Animation & Multimedia Technology (AMT)",
    subjects: ["Art Fundamentals and Graphics Design", "2D Animation Techniques", "3D Animation", "Introduction to Multimedia Design", "Audio Video Editing", "Lighting in Animation", "Compositing & Visual Effects"],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container px-4 mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            Academic Programs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of undergraduate, postgraduate, and diploma programs
            designed to prepare you for success in your chosen field.
          </p>
        </motion.div>

        {/* Undergraduate Programs */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-foreground">Undergraduate Programs</h2>
            <p className="text-muted-foreground mt-2">
              Our B.Tech programs offer cutting-edge curriculum across various engineering disciplines.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {btechCourses.map((course, index) => (
              <ClubCard key={index} name={course.name} subjects={course.subjects} />
            ))}
          </div>
        </section>

        {/* Masters Programs */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-foreground">Masters Programs</h2>
            <p className="text-muted-foreground mt-2">
              Advanced specializations for those seeking to deepen their expertise.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mtechCourses.map((course, index) => (
              <ClubCard key={index} name={course.name} subjects={course.subjects} />
            ))}
          </div>
        </section>

        {/* Diploma Programs */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-foreground">Diploma Programs</h2>
            <p className="text-muted-foreground mt-2">
              Practical, career-oriented programs to kickstart your technical journey.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diplomaCourses.map((course, index) => (
              <ClubCard key={index} name={course.name} subjects={course.subjects} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
