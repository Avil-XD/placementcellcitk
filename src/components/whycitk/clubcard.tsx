import Image from "next/image";

interface ClubCardProps {
  name: string;
  imageUrl: string;
}

export default function ClubCard({ name, imageUrl }: ClubCardProps) {
  return (
    <div className="h-28 w-full sm:w-80 bg-white dark:bg-gray-800 flex items-center gap-4 px-5 py-2 rounded-md shadow-md shadow-primary/20 dark:shadow-primary/10">
      <div className="flex-grow">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">{name}</h2>
      </div>
    </div>
  );
}
