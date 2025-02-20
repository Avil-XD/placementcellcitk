import Image from "next/image";

interface CardProps {
  setIsDetailCardVisible: (value: boolean) => void;
  data: {
    imageUrl: string;
    altText: string;
    name: string;
    description: string;
    currentcompany: string;
  };
}

export default function DetailCard({
  setIsDetailCardVisible,
  data,
}: CardProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm p-4 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl dark:shadow-black/50 w-full sm:w-3/4 relative border dark:border-gray-700">
        <button
          onClick={() => setIsDetailCardVisible(false)}
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-4xl"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className="w-full h-40 bg-gray-100 dark:bg-gray-700 rounded-t-lg flex items-center justify-center">
            <Image
              src={data.imageUrl}
              alt={data.altText}
              width={500}
              height={500}
              className="bg-gray-400 dark:bg-gray-600 rounded-full h-36 w-36 ring-2 ring-white/20 dark:ring-white/10"
            />
          </div>
          <div className="w-full p-4">
            <h2 className="text-center text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {data.name}
            </h2>
            <p className="text-center text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              <span className="font-normal text-gray-600 dark:text-gray-400">Currently working at</span>{" "}
              {data.currentcompany}
            </p>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
