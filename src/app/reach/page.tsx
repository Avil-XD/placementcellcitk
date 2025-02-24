import ReachCard from "@/components/common/reachcard";
import ReachCardVarTwo from "@/components/common/reachcardvartwo";

export default function Page() {
  return (
    <main className="min-h-screen py-5 px-4 sm:px-8 lg:px-16 space-y-8 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl sm:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        How to Reach Us
      </h1>
      <section className="flex flex-col lg:flex-row flex-wrap gap-5 lg:gap-10 border-0 sm:border-2 border-teal-500 dark:border-teal-600/50 py-7 px-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ReachCard
          image="/Facility/train-photo.jpg"
          description="The nearest railway station to CIT Kokrajhar is the Kokrajhar Railway Station. It is situated just 10 kilometers away from the institute premises. The station serves as a vital gateway for students, faculty, and visitors alike."
          subtitle=""
          title="Railways"
        />
        <ReachCardVarTwo
          image="/Facility/Screenshot (1961).png"
          description="Reaching CIT Kokrajhar by air offers a swift and comfortable way to access this esteemed institution nestled in the heart of Assam, India."
          subtitle=""
          title="Airways"
        />
        <ReachCard
          image="/Facility/highway-t&p.png"
          description="The nearest major highway to CIT Kokrajhar is NH27 (National Highway 27). This well-connected highway plays a crucial role in connecting various regions and provides a convenient route to reach CIT Kokrajhar."
          subtitle=""
          title="Roadways"
        />
      </section>
    </main>
  );
}
