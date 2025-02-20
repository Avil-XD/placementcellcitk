import React from "react";
import Image from "next/image";

interface Mou {
  name: string;
  imageUrl: string;
}

const mous: Mou[] = [
  { name: "MoU with ABC University", imageUrl: "/images/mou1.jpg" },
  { name: "MoU with XYZ Corporation", imageUrl: "/images/mou2.jpg" },
  { name: "MoU with DEF Institute", imageUrl: "/images/mou3.jpg" },
  { name: "MoU with DEF Institute", imageUrl: "/images/mou3.jpg" },
  { name: "MoU with DEF Institute", imageUrl: "/images/mou3.jpg" },
  // Add more MoUs as needed
];

const MouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        University MoUs
      </h1>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mous.map((mou, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-primary/5 rounded-lg overflow-hidden border border-border hover:shadow-xl dark:hover:shadow-primary/10 transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={mou.imageUrl}
                alt={mou.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent dark:from-black/50 dark:to-transparent" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">
                {mou.name}
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                Click to view details
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MouPage;
