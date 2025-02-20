import Card from "@/components/alumni/card";
import data from "@/data/alumni.json";

export default function Page() {
  return (
    <main className="min-h-screen px-5 py-5 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-5xl text-center mb-8 font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        Alumni
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Card data={item} />
          </div>
        ))}
      </div>
    </main>
  );
}
