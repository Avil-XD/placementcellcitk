"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const facilities = [
  {
    title: "Fully furnished AC rooms for interview",
    imageUrl: "/Facilities/acroom.jpeg",
    description: "Comfortable and professional interview spaces equipped with modern amenities.",
  },
  {
    title: "Seminar Hall for PPT",
    imageUrl: "/Facility/F-3.jpg",
    description: "State-of-the-art presentation facilities for company briefings and pre-placement talks.",
  },
  {
    title: "Guest House for recruiters",
    imageUrl: "/Facility/guest-house photo- citk - Copy.jpg",
    description: "Comfortable accommodation for visiting recruiters ensuring a pleasant stay.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            Campus Facilities
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            CIT Kokrajhar provides excellent facilities for recruiters visiting the campus. 
            The institute offers a comfortable guest house for accommodation, ensuring a pleasant stay. 
            For presentations and pre-placement talks, spacious and well-equipped seminar halls 
            are available. Additionally, air-conditioned rooms are provided for conducting interviews, 
            ensuring a professional and comfortable environment for recruiters.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-lg overflow-hidden border border-border shadow-lg hover:shadow-xl dark:shadow-primary/5 dark:hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={facility.imageUrl}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent dark:from-black/80 dark:via-black/50 dark:to-transparent" />
              </div>
              <div className="relative p-6">
                <h2 className="text-xl font-heading font-bold mb-2 text-foreground">
                  {facility.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-center rounded-2xl p-8 bg-card border border-border shadow-lg dark:shadow-primary/5"
        >
          <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
            Planning Your Visit?
          </h3>
          <p className="text-muted-foreground">
            The placement office ensures its best hospitality to the recruiters.
            Accommodation and conveyance can be arranged by the institute on prior
            notification. Contact our placement cell for seamless arrangements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 px-6 py-3 text-sm font-medium text-white shadow transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-600/25"
          >
            Contact Placement Cell
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}
