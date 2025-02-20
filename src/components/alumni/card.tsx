"use client";
import { useState } from "react";
import Image from "next/image";
import DetailCard from "./detailcard";

interface CardProps {
  data: {
    imageUrl: string;
    altText: string;
    name: string;
    description: string;
    currentcompany: string;
  };
}

const truncateDescription = (description: string, wordLimit: number) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};

export default function Card({ data }: CardProps) {
  const [isDetailCardVisible, setIsDetailCardVisible] = useState(false);

  const truncatedDescription = truncateDescription(data.description, 15); 

  const handleDetailsClick = () => {
    setIsDetailCardVisible(true);
  };

  return (
    <div className="w-full sm:w-80 md:w-96 h-auto sm:h-80 shadow-lg flex flex-col items-center p-4 bg-gradient-to-r from-blue-100 to-teal-200 dark:from-blue-900 dark:to-teal-800 rounded-2xl">
      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-400 dark:bg-gray-600 rounded-full overflow-hidden mb-2 ring-2 ring-white/20 dark:ring-white/10">
        <Image
          src={data.imageUrl}
          alt={data.altText}
          height={1000}
          width={1000}
          className="object-cover"
        />
      </div>
      <h2 className="text-center text-lg font-semibold text-gray-800 dark:text-white">{data.name}</h2>
      <h2 className="text-center text-sm font-bold text-gray-700 dark:text-gray-300">{data.currentcompany}</h2>

      <p className="text-center text-sm text-gray-600 dark:text-gray-400">{truncatedDescription}</p>
      <button
        className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white rounded-lg hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        onClick={handleDetailsClick}
      >
        Get More Details
      </button>
      {isDetailCardVisible && (
        <DetailCard
          setIsDetailCardVisible={setIsDetailCardVisible}
          data={data}
        />
      )}
    </div>
  );
}
