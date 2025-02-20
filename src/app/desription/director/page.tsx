"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Director() {
  return (
    <main className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent mb-4">
            FROM DIRECTOR&apos;S DESK
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="space-y-8 text-muted-foreground">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed"
          >
            Dear Recruiters, The Training and Placement Cell of the Central Institute
            of Technology Kokrajhar serves as a bridge between academia and industry,
            facilitating a seamless transition for our students into the professional
            realm. We understand the pivotal role that recruiters play in identifying
            and harnessing talent, and we are eager to forge lasting partnerships that
            benefit both our students and your organization.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg leading-relaxed"
          >
            CIT started its first batch of students with a Diploma module in 2006 and
            has now grown into a Deemed to be University offering BTech/BDes/MTech/MDes/PhD
            programs in various departments. I would like to remind you all that it is
            next to impossible to live and cope up with the present-day world without
            technical knowledge. So, to help society and the country, we still need many
            young technical graduates and researchers.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg leading-relaxed"
          >
            Since assuming my charge as the Director of CIT Kokrajhar, I have
            come to know that many of our alumni are pursuing MTech and PhD in IISc/IITs
            and abroad, and that many are placed in various prestigious positions in the
            industry. These achievements are the pride of CIT Kokrajhar, and we can learn
            a lot from these accomplishments of the alumni.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg leading-relaxed"
          >
            I encourage you to explore the detailed profiles of our students, the academic
            programs we offer, and the various success stories that highlight the caliber
            of talent that emerges from CIT Kokrajhar. We look forward to the opportunity
            to welcome your organization to our campus, providing a platform for meaningful
            interactions between your representatives and our aspiring young professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center pt-8"
          >
            <p className="text-xl font-medium text-blue-600 dark:text-blue-400 italic mb-8">
              Welcome to CIT Kokrajhar, where excellence meets innovation!
            </p>
            
            <div className="flex flex-col items-center space-y-4">
              {/* Profile Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/20 dark:border-blue-400/20 shadow-lg dark:shadow-blue-500/10">
                <Image
                  src="/director-2023.jpg"
                  alt="Prof. A. Srinivasan"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-2xl font-heading font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                  Prof. A. Srinivasan
                </h2>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Director
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Central Institute Of Technology, Kokrajhar
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
