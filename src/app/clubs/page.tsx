import ClubCard from "@/components/whycitk/clubcard";
import Image from "next/image";

export default function Page() {
  const clubs = [
    {
      name: "Robotics Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "Coding Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "GDSC CIT Kokrajhar",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "Cyber Security Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "AI Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "DevCom Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "Design Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "Astrophysics Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "Konstruct Club",
      imageUrl: "/cit-logo.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Technical Clubs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {clubs.map((club, index) => (
            <div 
              key={index} 
              className="transform hover:-translate-y-1 transition-transform duration-300"
            >
              <ClubCard name={club.name} imageUrl={club.imageUrl} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
